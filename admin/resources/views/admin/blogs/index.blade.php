@extends('layouts.admin.master')
@section('title', 'Dashboard')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Blogs Listings</h5>
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
                            <table class="table" id="blog-listing">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Meta Title</th>
                                        <th>Meta Description</th>
                                        <th>Meta Keywords</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($blogs as $blog)
                                        @php
                                            preg_match('/<img[^>]+src="([^">]+)"/', $blog->content, $match);
                                            $imageSrc = $match[1] ?? asset('assets/images/dashboard/user/2.jpg');
                                        @endphp
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img class="img-fluid bl-image-size me-2" src="{{ $imageSrc }}"
                                                        alt="blog image" />
                                                    <div class="img-content-box">
                                                        <a class="f-w-500" href="products-list.html">{{ $blog->title }}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $blog->meta_title }}</td>
                                            <td>{{ $blog->meta_description }}</td>
                                            <td>{{ $blog->meta_keywords }}</td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <a href="{{ route('admin.blogs.edit', $blog->slug) }}"
                                                        class="text-primary" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="{{ route('admin.blogs.show', $blog->slug) }}"
                                                        class="text-success" title="View">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <a href="{{ route('admin.blogs.related.index', $blog->slug) }}"
                                                        class="text-info" title="Related Blogs">
                                                        <i class="fa fa-link"></i>
                                                    </a>
                                                    <form class="delete-blog-form" data-slug="{{ $blog->slug }}">
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
        $("#blog-listing").DataTable({
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
            const form = $(this).closest('.delete-blog-form');
            const slug = form.data('slug');

            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete this blog?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                preConfirm: () => {
                    return fetch(`/admin/blogs/${slug}`, {
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
                        text: 'Blog has been deleted.',
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
