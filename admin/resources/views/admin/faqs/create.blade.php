@extends('layouts.admin.master')
@section('title', 'Blog')
@section('content')
    <main class="create-blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h5>Add Faqs</h5>
                        </div>
                        <div class="card-body add-post">
                            <form class="row g-3" id="blogForm" action="{{ route('admin.faqs.store') }}" method="post">
                                @csrf
                                <div class="col-sm-12">
                                    <div class="mb-3">
                                        <label for="validationtitle">Question:</label>
                                        <input class="form-control" id="validationtitle" name="question" type="text"
                                            placeholder="Add Question" />
                                        <div class="text-danger error-message" id="error-question"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="validationslug">Slug:</label>
                                        <input class="form-control" id="validationslug" name="slug" type="text"
                                            placeholder="Add Slug" />
                                    </div>
                                    <div class="mb-3">
                                    <select class="form-control" name="faq_category_id" id="category">
                                        <option value="">Select Category</option>
                                        @foreach ($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="validationCustom01">Answer:</label>
                                        <textarea class="form-control mb-3" name="answer" id="" rows="4" style="resize: none;"
                                            placeholder="Add Answer"></textarea>
                                    </div>
                                </div>
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
    <script>
        $(document).ready(function() {

            document.querySelector('#blogForm').addEventListener('submit', function(e) {
                e.preventDefault();

                // Clear previous errors
                document.querySelectorAll('.error-message').forEach(el => el.innerText = '');


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
                            text: 'Faq created successfully!',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            form.reset();
                            editor8.setContents([]);
                            window.location.href = '/admin/faqs';
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
