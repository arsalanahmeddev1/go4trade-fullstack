@extends('layouts.admin.master')
@section('title', 'Career Applications')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Career Applications</h5>
                            <div class="card-header-right-icon">
                                <div class="dropdown icon-dropdown">
                                    <button class="btn dropdown-toggle" id="customerButton" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="icon-more-alt"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="customerButton">
                                        <a class="dropdown-item" href="#!">Today</a><a class="dropdown-item"
                                            href="#!">Tomorrow</a><a class="dropdown-item" href="#!">Yesterday</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body main-customer-table px-0 pt-0">
                        <div class="recent-table table-responsive custom-scrollbar">
                            <table class="table" id="career-listing">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Position</th>
                                        <th>Resume</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($careers as $career)
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div class="d-flex">
                                                    <div class="img-content-box">
                                                        <a class="f-w-500" href="{{ route('admin.careers.show', $career->id) }}">{{ $career->name }}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $career->email }}</td>
                                            <td>{{ $career->position }}</td>
                                            <td>
                                                @if($career->resume_path)
                                                    <a href="{{ route('admin.careers.download-resume', $career->id) }}" 
                                                       class="text-primary" title="Download Resume">
                                                        <i class="fa fa-download"></i> Download
                                                    </a>
                                                @else
                                                    <span class="text-muted">No file</span>
                                                @endif
                                            </td>
                                            <td>
                                                <span class="badge badge-{{ $career->status === 'unread' ? 'danger' : ($career->status === 'read' ? 'warning' : 'success') }}">
                                                    {{ ucfirst($career->status) }}
                                                </span>
                                            </td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <a href="{{ route('admin.careers.show', $career->id) }}"
                                                        class="text-success" title="View">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <form class="delete-career-form" data-id="{{ $career->id }}">
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
        $("#career-listing").DataTable({
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

        // Delete career functionality
        $(document).on('click', '.delete-btn', function() {
            const form = $(this).closest('form');
            const careerId = form.data('id');
            
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
                    fetch(`/admin/careers/${careerId}`, {
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
                            'An error occurred while deleting the career application.',
                            'error'
                        );
                    });
                }
            });
        });
    </script>
@endpush 