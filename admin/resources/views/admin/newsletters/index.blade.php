@extends('layouts.admin.master')
@section('title', 'Newsletter Subscriptions')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Newsletter Subscriptions</h5>
                            <div class="card-header-right-icon">
                                <div class="dropdown icon-dropdown">
                                    <button class="btn dropdown-toggle" id="newsletterButton" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="icon-more-alt"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="newsletterButton">
                                        <a class="dropdown-item" href="#!">Today</a><a class="dropdown-item"
                                            href="#!">Tomorrow</a><a class="dropdown-item" href="#!">Yesterday</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body main-customer-table px-0 pt-0">
                        <div class="recent-table table-responsive custom-scrollbar">
                            <table class="table" id="newsletter-listing">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Subscribed Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($newsletters as $newsletter)
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div class="d-flex">
                                                    <div class="img-content-box">
                                                        <a class="f-w-500" href="{{ route('admin.newsletters.show', $newsletter->id) }}">{{ $newsletter->email }}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="badge badge-{{ $newsletter->status === 'active' ? 'success' : 'danger' }}">
                                                    {{ ucfirst($newsletter->status) }}
                                                </span>
                                            </td>
                                            <td>{{ $newsletter->created_at->format('F d, Y \a\t g:i A') }}</td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <a href="{{ route('admin.newsletters.show', $newsletter->id) }}"
                                                        class="text-success" title="View">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                                                                         <button type="button" class="btn btn-link {{ $newsletter->status === 'active' ? 'text-success' : 'text-warning' }} p-0 toggle-status-btn" 
                                                             data-id="{{ $newsletter->id }}" title="Toggle Status">
                                                         <i class="fa fa-toggle-{{ $newsletter->status === 'active' ? 'on' : 'off' }}"></i>
                                                     </button>
                                                    <form class="delete-newsletter-form" data-id="{{ $newsletter->id }}">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="button"
                                                            class="btn btn-link text-danger p-0 delete-btn" title="Delete">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script src="{{ asset('assets/js/datatable/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/js/datatable/datatables/dataTables.js') }}"></script>
    <script src="{{ asset('assets/js/datatable/datatables/dataTables.select.js') }}"></script>
    <script src="{{ asset('assets/js/datatable/datatables/select.bootstrap5.js') }}"></script>
    <script>
        $("#newsletter-listing").DataTable({
            columnDefs: [{
                targets: 0,
                orderable: false,
                render: $.fn.dataTable.render.select(),
            }, ],
            fixedColumns: {
                leftColumns: 2,
            },
            order: [
                [1, "asc"]
            ],
            scrollCollapse: true,
            select: {
                style: "multi",
                selector: "td:first-child",
            },
            lengthChange: false,
        });

        // Delete newsletter functionality
        $(document).on('click', '.delete-btn', function() {
            const form = $(this).closest('form');
            const newsletterId = form.data('id');
            
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`/admin/newsletters/${newsletterId}`, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                            'Accept': 'application/json',
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message) {
                            Swal.fire(
                                'Deleted!',
                                data.message,
                                'success'
                            ).then(() => {
                                location.reload();
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire(
                            'Error!',
                            'An error occurred while deleting the newsletter subscription.',
                            'error'
                        );
                    });
                }
            });
        });

        // Toggle status functionality
        $(document).on('click', '.toggle-status-btn', function() {
            const newsletterId = $(this).data('id');
            
            Swal.fire({
                title: 'Are you sure?',
                text: 'Do you want to toggle the status of this newsletter subscription?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Yes, update it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`/admin/newsletters/${newsletterId}/toggle-status`, {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                            'Accept': 'application/json',
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            Swal.fire(
                                'Updated!',
                                data.message,
                                'success'
                            ).then(() => {
                                location.reload();
                            });
                        } else {
                            Swal.fire(
                                'Error!',
                                data.message,
                                'error'
                            );
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire(
                            'Error!',
                            'An error occurred while updating the status.',
                            'error'
                        );
                    });
                }
            });
        });
    </script>
@endpush 