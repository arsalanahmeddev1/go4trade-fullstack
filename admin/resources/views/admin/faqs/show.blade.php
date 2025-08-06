@extends('layouts.admin.master')

@section('title', 'FAQ Details')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>FAQ Information</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Question:</label>
                                    <p class="form-control-static">{{ $faq->question }}</p>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Answer:</label>
                                    <div class="form-control-static">
                                        {!! nl2br(e($faq->answer)) !!}
                                    </div>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Category:</label>
                                    <p class="form-control-static">{{ $faq->category->name ?? 'No Category' }}</p>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Slug:</label>
                                    <p class="form-control-static">{{ $faq->slug }}</p>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Created:</label>
                                    <p class="form-control-static">{{ $faq->created_at->format('F j, Y \a\t g:i A') }}</p>
                                </div>
                                
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Last Updated:</label>
                                    <p class="form-control-static">{{ $faq->updated_at->format('F j, Y \a\t g:i A') }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-12">
                                <a href="{{ route('admin.faqs.edit', $faq->slug) }}" class="btn btn-primary">
                                    <i class="material-icons-outlined">edit</i> Edit FAQ
                                </a>
                                <a href="{{ route('admin.faqs.index') }}" class="btn btn-secondary">
                                    <i class="material-icons-outlined"></i> Back to Faqs List
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection