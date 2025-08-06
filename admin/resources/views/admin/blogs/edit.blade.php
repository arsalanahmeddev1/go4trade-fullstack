@extends('layouts.admin.master')
@push('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/quill.snow.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/select2.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/dropzone.min.css') }}" />
@endpush
@section('title', 'Edit Blog')
@section('content')
    <main class="edit-blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Edit Blog</h5>
                        </div>
                        <div class="card-body add-post">
                            <form class="row g-3" id="blogEditForm" action="{{ route('admin.blogs.update', $blog->slug) }}"
                                method="post">
                                @csrf
                                @method('PUT')
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label>Title:</label>
                                        <input class="form-control" name="title" type="text" placeholder="Post Title"
                                            value="{{ $blog->title }}" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Slug:</label>
                                        <input class="form-control" name="slug" type="text" placeholder="Add Slug"
                                            value="{{ $blog->slug }}" />
                                    </div>
                                    <div class="email-wrapper">
                                        <div class="theme-form">
                                            <div class="mb-3">
                                                <label class="w-100">Content:</label>
                                                <div class="toolbar-box">
                                                    <div id="toolbar8">
                                                        <!-- toolbar buttons only -->
                                                        <span class="ql-formats">
                                                            <select class="ql-size">
                                                                <option value="small">Small</option>
                                                                <option selected>Normal</option>
                                                                <option value="large">Large</option>
                                                                <option value="huge">Huge</option>
                                                            </select>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-bold"></button>
                                                            <button class="ql-italic"></button>
                                                            <button class="ql-underline"></button>
                                                            <button class="ql-strike"></button>
                                                            <button class="ql-script" value="sub"></button>
                                                            <button class="ql-script" value="super"></button>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-header" value="1"></button>
                                                            <button class="ql-header" value="2"></button>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-list" value="ordered"></button>
                                                            <button class="ql-list" value="bullet"></button>
                                                            <button class="ql-indent" value="-1"></button>
                                                            <button class="ql-indent" value="+1"></button>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-link"></button>
                                                            <button class="ql-image"></button>
                                                            <button class="ql-video"></button>
                                                            <select class="ql-color"></select>
                                                            <select class="ql-background"></select>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-blockquote"></button>
                                                            <button class="ql-code-block"></button>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-align" value=""></button>
                                                            <button class="ql-align" value="center"></button>
                                                            <button class="ql-align" value="right"></button>
                                                            <button class="ql-align" value="justify"></button>
                                                        </span>
                                                        <span class="ql-formats">
                                                            <button class="ql-clean"></button>
                                                        </span>
                                                    </div>

                                                    <div id="editor8">{!! $blog->content !!}</div>

                                                    <input type="hidden" name="content" id="content-input">
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3 e-category">
                                    <div class="col-12">
                                        <div class="main-divider">
                                            <div class="divider-body">
                                                <h6>SEO Tags</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-label">Meta Title</label>
                                        <input class="form-control" type="text" name="meta_title"
                                            value="{{ $blog->meta_title }}" placeholder="Enter meta title" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-label">Meta Keywords</label>
                                        <input class="form-control" name="meta_keywords" type="text"
                                            value="{{ $blog->meta_keywords }}" placeholder="Enter meta keywords" />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="form-label">Meta Description</label>
                                        <input class="form-control" name="meta_description" type="text"
                                            value="{{ $blog->meta_description }}" placeholder="Add Meta Description" />
                                    </div>
                                    <div class="common-flex justify-content-end mt-3">
                                        <button class="btn btn-primary" type="submit">Update Blog</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
    </main>
@endsection
@push('scripts')
    <script src="{{ asset('assets/js/dropzone/dropzone.min.js') }}"></script>
    <script src="{{ asset('assets/js/select2/select2.full.min.js') }}"></script>
    <script src="{{ asset('assets/js/editors/quill.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('.js-example-basic-multiple').select2();

            editor8 = new Quill("#editor8", {
                modules: {
                    toolbar: "#toolbar8",
                },
                theme: "snow",
                placeholder: "Enter your messages...",
            });

            document.querySelector('#blogEditForm').addEventListener('submit', function(e) {
                e.preventDefault();
                document.querySelector('#content-input').value = editor8.root.innerHTML;

                let form = this;
                let formData = new FormData(form);

                fetch(form.action, {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': '{{ csrf_token() }}',
                            'Accept': 'application/json',
                        },
                        body: formData
                    })
                    .then(response => {
                        if (!response.ok) throw new Error('Network error');
                        return response.json();
                    })
                    .then(data => {
                        Swal.fire({
                            title: 'Blog Updated',
                            text: 'The blog has been updated successfully.',
                            icon: 'success',
                            confirmButtonText: 'Go to Blogs',
                            showConfirmButton: true,
                            timer: 2000,
                            timerProgressBar: true,
                            customClass: {
                                popup: 'swal-custom-popup',
                                title: 'swal-custom-title',
                                confirmButton: 'swal-custom-button'
                            },
                            willClose: () => {
                                window.location.href = '{{ route('admin.blogs.index') }}';
                            }
                        });
                    })
                    .catch(error => {
                        alert('Something went wrong!');
                        console.error(error);
                    });
            });
        });
    </script>
@endpush
