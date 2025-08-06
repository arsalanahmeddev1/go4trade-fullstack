@extends('layouts.admin.master')
@push('styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/quill.snow.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/select2.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/dropzone.min.css') }}" />
@endpush
@section('title', 'Blog')
@section('content')
    <main class="create-blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Add Blog</h5>
                        </div>
                        <div class="card-body add-post">
                            <form class="row g-3" id="blogForm" action="{{ route('admin.blogs.store') }}" method="post">
                                @csrf
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label for="validationCustom01">Title:</label>
                                        <input class="form-control" id="validationCustom01" name="title" type="text"
                                            placeholder="Post Title" />
                                        <div class="text-danger error-message" id="error-title"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="validationCustom01">Slug:</label>
                                        <input class="form-control" id="validationCustom01" name="slug" type="text"
                                            placeholder="Add Slug" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="validationCustom01">Summary:</label>
                                        {{-- <textarea class="form-control" id="validationCustom01" name="slug" type="text"
                                            placeholder="Add Slug" /> --}}
                                        <textarea class="form-control mb-3" name="summary" id="" rows="4" style="resize: none;"
                                            placeholder="Provide a short summary – this will appear in the blog listing previews."></textarea>

                                    </div>

                                    <div class="email-wrapper">
                                        <div class="theme-form">
                                            <div class="mb-3">
                                                <label class="w-100">Content:</label>
                                                <div class="toolbar-box mb-3">
                                                    <div id="toolbar8">
                                                        <span class="ql-formats"><select class="ql-size">
                                                                <option value="small">Small</option>
                                                                <option selected="">Normal</option>
                                                                <option value="large">Large</option>
                                                                <option value="huge">Huge</option>
                                                            </select></span><span class="ql-formats"><button
                                                                class="ql-bold">Bold</button><button
                                                                class="ql-italic">Italic</button><button
                                                                class="ql-underline">
                                                                Underline</button><button
                                                                class="ql-strike">Strike</button><button class="ql-script"
                                                                value="sub"></button><button class="ql-script"
                                                                value="super"></button></span><span
                                                            class="ql-formats"><button class="ql-header"
                                                                value="1"></button><button class="ql-header"
                                                                value="2"></button></span><span
                                                            class="ql-formats"><button class="ql-list" value="ordered">
                                                                List</button><button class="ql-list" value="bullet">
                                                                Bullet</button><button class="ql-indent"
                                                                value="-1"></button><button class="ql-indent"
                                                                value="+1"></button></span><span
                                                            class="ql-formats"><button class="ql-link">Link</button><button
                                                                class="ql-image">Image</button><button
                                                                class="ql-video">Video</button><select
                                                                class="ql-color"></select><select
                                                                class="ql-background"></select></span><!-- Add more options here--><span
                                                            class="ql-formats"><button class="ql-blockquote">
                                                                Blockquote</button><button
                                                                class="ql-code-block"></button></span><span
                                                            class="ql-formats"><button class="ql-align"
                                                                value=""></button><button class="ql-align"
                                                                value="center"></button><button class="ql-align"
                                                                value="right"></button><button class="ql-align"
                                                                value="justify"></button></span><span class="ql-formats">
                                                            <button class="ql-clean"></button></span>
                                                    </div>
                                                    <div id="editor8"></div>
                                                    <input type="hidden" name="content" id="content-input">
                                                </div>
                                                <div class="text-danger error-message" id="error-content"></div>
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
                                        <label class="form-label" for="validationMetaTitle1">Meta Title<span
                                                class="txt-danger">*</span></label><input class="form-control"
                                            id="validationMetaTitle1" type="text" name="meta_title"
                                            placeholder="Enter meta title" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label class="form-label" for="validationKeywords">Meta Keywords<span
                                                class="txt-danger">*</span><span class="c-o-light">&nbsp;(In comma
                                                separated)</span></label>
                                        <input class="form-control" id="validationKeywords" name="meta_keywords"
                                            type="text" placeholder="Enter meta keywords" />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="form-label">Meta Description</label>
                                        <input class="form-control" id="validationCustom01" name="meta_description"
                                            type="text" placeholder="Add Meta Description" />

                                    </div>
                                    <div class="common-flex justify-content-end mt-3">
                                        <button class="btn btn-primary" type="submit">Post</button>
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
    <script src="{{ asset('assets/js/dropzone/dropzone-script.js') }}"></script>
    <script src="{{ asset('assets/js/select2/select2.full.min.js') }}"></script>
    <script src="{{ asset('assets/js/select2/select2-custom.js') }}"></script>
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

            document.querySelector('#blogForm').addEventListener('submit', function(e) {
                e.preventDefault();

                // Clear previous errors
                document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

                document.querySelector('#content-input').value = editor8.root.innerHTML;

                let contentHTML = editor8.root.innerHTML.trim();
                let isContentEmpty = contentHTML === '' || contentHTML === '<p><br></p>';
                if (isContentEmpty) {
                    document.getElementById('error-content').innerText = 'The content field is required.';
                    return; // Stop submission
                }

                document.querySelector('#content-input').value = contentHTML;

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
                        if (response.status === 422) {
                            return response.json().then(data => {
                                let errors = data.errors;
                                Object.keys(errors).forEach(function(key) {
                                    let errorDiv = document.getElementById('error-' +
                                        key.replace('.', '_'));
                                    if (errorDiv) {
                                        errorDiv.innerText = errors[key][0];
                                    }
                                });
                                throw new Error("Validation failed");
                            });
                        }

                        if (!response.ok) {
                            throw new Error('Network error');
                        }

                        return response.json();
                    })
                    .then(data => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Blog created successfully!',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            form.reset();
                            editor8.setContents([]);
                            window.location.href = '/admin/blogs';
                        });
                    })
                    .catch(error => {
                        if (error.message !== "Validation failed") {
                            Swal.fire('Error', 'Something went wrong!', 'error');
                            console.error(error);
                        }
                    });
            });

        });
    </script>
@endpush
