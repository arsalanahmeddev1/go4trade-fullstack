@extends('layouts.admin.master')
@section('title', 'Contact Details')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Contact Details</h5>
                            <div class="card-header-right-icon">
                                <a href="{{ route('admin.contacts.index') }}" class="btn btn-primary">
                                    <i class="fa fa-arrow-left"></i> Back to List
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Name:</label>
                                    <p class="form-control-static">{{ $contact->name }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Email:</label>
                                    <p class="form-control-static">{{ $contact->email }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Phone:</label>
                                    <p class="form-control-static">{{ $contact->phone ?? 'N/A' }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Status:</label>
                                    <span class="badge badge-{{ $contact->status === 'unread' ? 'danger' : ($contact->status === 'read' ? 'warning' : 'success') }}">
                                        {{ ucfirst($contact->status) }}
                                    </span>
                                    @if($contact->status !== 'replied')
                                        <button type="button" class="btn btn-success btn-sm ms-2" onclick="markAsReplied({{ $contact->id }})">
                                            <i class="fa fa-reply"></i> Mark as Replied
                                        </button>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Subject:</label>
                                    <p class="form-control-static">{{ $contact->subject }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Message:</label>
                                    <div class="form-control-static" style="min-height: 150px; background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                                        {{ $contact->message }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Submitted:</label>
                                    <p class="form-control-static">{{ $contact->created_at->format('F d, Y \a\t g:i A') }}</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Last Updated:</label>
                                    <p class="form-control-static">{{ $contact->updated_at->format('F d, Y \a\t g:i A') }}</p>
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
function markAsReplied(contactId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Are you sure you want to mark this contact as replied?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, mark as replied!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`/admin/contacts/${contactId}/mark-replied`, {
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
                        'Success!',
                        'Contact marked as replied successfully!',
                        'success'
                    ).then(() => {
                        location.reload();
                    });
                } else {
                    Swal.fire(
                        'Error!',
                        'Error: ' + data.message,
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