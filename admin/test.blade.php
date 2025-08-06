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
                                <input class="form-control" name="title" type="text" placeholder="Post Title" />
                                <div class="common-flex justify-content-end mt-3">
                                        <button class="btn btn-primary" type="submit">Post</button>
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

                document.querySelector('#content-input').value = editor8.root.innerHTML;

                let form = this;
                let formData = new FormData(form);

                fetch(form.action, {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        body: formData
                    })
                    .then(response => {
                        if (!response.ok) throw new Error('Network error');
                        return response.json(); // ❗ this assumes you're returning JSON in Laravel
                    })
                    .then(data => {
                        alert('Blog created successfully!');
                        form.reset();
                        editor8.root.innerHTML = '';
                    })
                    .catch(error => {
                        alert('Something went wrong!');
                        console.error(error);
                    });
            });
        });
    </script>
@endpush
