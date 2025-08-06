@extends('layouts.admin.master')
@section('title', 'Dashboard')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>FAQ Categories Listings</h5>
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
                            <table class="table" id="faq-categories-listing">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>FAQs Count</th>
                                        <th>Created</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($categories as $category)
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    {{-- <img class="img-fluid bl-image-size me-2" src="{{ asset('assets/images/dashboard/user/2.jpg') }}"
                                                        alt="category image" /> --}}
                                                    <div class="img-content-box">
                                                        <a class="f-w-500" href="{{ route('admin.faq-categories.show', $category->id) }}">{{ $category->name }}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="badge bg-info">{{ $category->faq_count }}</span>
                                            </td>
                                            <td>{{ $category->created_at->format('M j, Y') }}</td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <a href="{{ route('admin.faq-categories.edit', $category->id) }}"
                                                        class="text-primary" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="{{ route('admin.faq-categories.show', $category->id) }}"
                                                        class="text-success" title="View">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <form class="delete-category-form" data-id="{{ $category->id }}">
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
        $("#faq-categories-listing").DataTable({
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
            searchable: true,
            pageLength: 5,
            autoWidth: false,
            lengthChange: false,
            info: false,
        });


        $(document).on('click', '.delete-btn', function(e) {
            e.preventDefault();
            const form = $(this).closest('.delete-category-form');
            const categoryId = form.data('id');

            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete this category?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                preConfirm: () => {
                    return fetch(`/admin/faq-categories/${categoryId}`, {
                        method: 'DELETE',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        if (!response.ok) {
                            return response.json().then(data => {
                                throw new Error(data.message || 'Something went wrong');
                            });
                        }
                        return response.json();
                    }).catch(error => {
                        Swal.showValidationMessage(error.message);
                    });
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Category has been deleted.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false
                    });

                    // Option 1: Remove row without reload
                    form.closest('tr').fadeOut();

                    // Option 2: Reload page
                    // location.reload();
                }
            });
        });
    </script>
@endpush
