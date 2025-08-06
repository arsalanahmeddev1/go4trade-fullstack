@extends('layouts.admin.master')

@section('title', 'Add FAQ Category')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add FAQ Category</h5>
                    </div>
                    <div class="card-body">
                        <form class="row g-3" id="categoryForm" action="{{ route('admin.faq-categories.store') }}" method="post">
                            @csrf
                            <div class="col-sm-12">
                                <div class="mb-3">
                                    <label for="categoryName">Category Name:</label>
                                    <input class="form-control" id="categoryName" name="name" type="text"
                                        placeholder="Enter category name" />
                                    <div class="text-danger error-message" id="error-name"></div>
                                </div>
                            </div>
                            <div class="common-flex justify-content-end mt-3">
                                <a href="{{ route('admin.faq-categories.index') }}" class="btn btn-secondary me-2">Cancel</a>
                                <button class="btn btn-primary" type="submit">Create Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        $(document).ready(function() {
            document.querySelector('#categoryForm').addEventListener('submit', function(e) {
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
                                    let errorDiv = document.getElementById('error-' + key);
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
                            text: 'FAQ Category created successfully!',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            window.location.href = '/admin/faq-categories';
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
