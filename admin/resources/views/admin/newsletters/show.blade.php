@extends('layouts.admin.master')
@section('title', 'Newsletter Details')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Newsletter Subscription Details</h5>
                            <div class="card-header-right-icon">
                                <a href="{{ route('admin.newsletters.index') }}" class="btn btn-primary">
                                    <i class="fa fa-arrow-left"></i> Back to List
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Email:</label>
                                    <p class="form-control-static">{{ $newsletter->email }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Status:</label>
                                    <span class="badge badge-{{ $newsletter->status === 'active' ? 'success' : 'danger' }}">
                                        {{ ucfirst($newsletter->status) }}
                                    </span>
                                                                         <button type="button" class="btn btn-link {{ $newsletter->status === 'active' ? 'text-success' : 'text-warning' }} p-0 ms-2" onclick="toggleStatus({{ $newsletter->id }})">
                                         <i class="fa fa-toggle-{{ $newsletter->status === 'active' ? 'on' : 'off' }}"></i>
                                     </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Subscribed:</label>
                                    <p class="form-control-static">{{ $newsletter->created_at->format('F d, Y \a\t g:i A') }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Last Updated:</label>
                                    <p class="form-control-static">{{ $newsletter->updated_at->format('F d, Y \a\t g:i A') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
<script>
function toggleStatus(newsletterId) {
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
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
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
}
</script>
@endpush 