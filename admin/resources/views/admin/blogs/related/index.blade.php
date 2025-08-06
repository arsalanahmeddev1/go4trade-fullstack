@extends('layouts.admin.master')
@push('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/select2.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/sortable.css') }}" />
@endpush
@section('title', 'Related Blogs - ' . $blog->title)
@section('content')
    <main class="related-blogs">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>Related Blogs for: {{ $blog->title }}</h5>
                                <a href="{{ route('admin.blogs.index') }}" class="btn btn-secondary">
                                    <i class="fa fa-arrow-left"></i> Back to Blogs
                                </a>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- Add Related Blog Section -->
                            <div class="row mb-4">
                                <div class="col-md-8">
                                    <div class="card">
                                        <div class="card-header">
                                            <h6>Add Related Blog</h6>
                                        </div>
                                        <div class="card-body">
                                            <form id="addRelatedBlogForm">
                                                @csrf
                                                <input type="hidden" name="blog_id" value="{{ $blog->id }}">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <div class="mb-3">
                                                            <label for="related_blog_id" class="form-label">Select Blog</label>
                                                            <select class="form-control js-example-basic-single" name="related_blog_id" id="related_blog_id" required>
                                                                <option value="">Choose a blog...</option>
                                                                @foreach($availableBlogs as $availableBlog)
                                                                    <option value="{{ $availableBlog->id }}">{{ $availableBlog->title }}</option>
                                                                @endforeach
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mb-3">
                                                            <label class="form-label">&nbsp;</label>
                                                            <button type="submit" class="btn btn-primary w-100">
                                                                <i class="fa fa-plus"></i> Add Related Blog
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-header">
                                            <h6>Quick Stats</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row text-center">
                                                <div class="col-6">
                                                    <h4 class="text-primary">{{ $relatedBlogs->count() }}</h4>
                                                    <small>Related Blogs</small>
                                                </div>
                                                <div class="col-6">
                                                    <h4 class="text-success">{{ $availableBlogs->count() }}</h4>
                                                    <small>Available Blogs</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Related Blogs List -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h6>Current Related Blogs</h6>
                                            <small class="text-muted">Drag to reorder</small>
                                        </div>
                                        <div class="card-body">
                                            @if($relatedBlogs->count() > 0)
                                                <div id="relatedBlogsList" class="sortable-list">
                                                    @foreach($relatedBlogs as $relatedBlog)
                                                        <div class="related-blog-item" data-id="{{ $relatedBlog->id }}" data-sort-order="{{ $relatedBlog->sort_order }}">
                                                            <div class="d-flex justify-content-between align-items-center p-3 border rounded mb-2 bg-light">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="drag-handle me-3">
                                                                        <i class="fa fa-grip-vertical text-muted"></i>
                                                                    </div>
                                                                    <div class="blog-info">
                                                                        <h6 class="mb-1">{{ $relatedBlog->relatedBlog->title }}</h6>
                                                                        <small class="text-muted">
                                                                            {{ Str::limit($relatedBlog->relatedBlog->summary, 100) }}
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                                <div class="actions">
                                                                    <a href="{{ route('admin.blogs.show', $relatedBlog->relatedBlog->slug) }}" 
                                                                       class="btn btn-sm btn-outline-primary me-2" title="View">
                                                                        <i class="fa fa-eye"></i>
                                                                    </a>
                                                                    <button type="button" 
                                                                            class="btn btn-sm btn-outline-danger remove-related-blog" 
                                                                            data-id="{{ $relatedBlog->id }}" title="Remove">
                                                                        <i class="fa fa-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            @else
                                                <div class="text-center py-4">
                                                    <i class="fa fa-info-circle text-muted fa-3x mb-3"></i>
                                                    <h6 class="text-muted">No related blogs yet</h6>
                                                    <p class="text-muted">Add some related blogs using the form above.</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
@push('scripts')
    <script src="{{ asset('assets/js/select2/select2.full.min.js') }}"></script>
    <script src="{{ asset('assets/js/select2/select2-custom.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
    <script>
        $(document).ready(function() {
            // Initialize Select2
            $('.js-example-basic-single').select2({
                placeholder: 'Choose a blog...',
                allowClear: true
            });

            // Add Related Blog Form
            $('#addRelatedBlogForm').on('submit', function(e) {
                e.preventDefault();
                
                let formData = new FormData(this);
                
                fetch('{{ route("admin.blogs.related.store", $blog->slug) }}', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': '{{ csrf_token() }}',
                        'Accept': 'application/json',
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: data.message,
                            confirmButtonText: 'OK'
                        }).then(() => {
                            location.reload();
                        });
                    } else if (data.error) {
                        Swal.fire('Error', data.error, 'error');
                    }
                })
                .catch(error => {
                    Swal.fire('Error', 'Something went wrong!', 'error');
                    console.error(error);
                });
            });

            // Remove Related Blog
            $('.remove-related-blog').on('click', function() {
                let relatedBlogId = $(this).data('id');
                
                Swal.fire({
                    title: 'Are you sure?',
                    text: 'This will remove the related blog association.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Yes, remove it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                                                 fetch(`/admin/blogs/{{ $blog->slug }}/related/${relatedBlogId}`, {
                            method: 'DELETE',
                            headers: {
                                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                                'Accept': 'application/json',
                            }
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.message) {
                                Swal.fire('Removed!', data.message, 'success').then(() => {
                                    location.reload();
                                });
                            }
                        })
                        .catch(error => {
                            Swal.fire('Error', 'Something went wrong!', 'error');
                            console.error(error);
                        });
                    }
                });
            });

            // Sortable functionality
            if (document.getElementById('relatedBlogsList')) {
                new Sortable(document.getElementById('relatedBlogsList'), {
                    handle: '.drag-handle',
                    animation: 150,
                    onEnd: function(evt) {
                        let items = [];
                        document.querySelectorAll('.related-blog-item').forEach((item, index) => {
                            items.push({
                                id: item.dataset.id,
                                sort_order: index
                            });
                        });

                        fetch('{{ route("admin.blogs.related.order", $blog->slug) }}', {
                            method: 'PUT',
                            headers: {
                                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                            body: JSON.stringify({
                                related_blogs: items
                            })
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.message) {
                                // Show a subtle notification
                                let notification = $('<div class="alert alert-success alert-dismissible fade show position-fixed" style="top: 20px; right: 20px; z-index: 9999;">' +
                                    data.message +
                                    '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>' +
                                    '</div>');
                                $('body').append(notification);
                                setTimeout(() => notification.remove(), 3000);
                            }
                        })
                        .catch(error => {
                            console.error('Error updating order:', error);
                        });
                    }
                });
            }
        });
    </script>
@endpush 