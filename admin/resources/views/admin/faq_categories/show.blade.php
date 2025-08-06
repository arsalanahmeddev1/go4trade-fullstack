@extends('layouts.admin.master')

@section('title', 'FAQ Category Details')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5>FAQs in Category: {{ $faqCategory->name }}</h5>
                            <a href="{{ route('admin.faq-categories.index') }}" class="btn btn-secondary">
                                <i class="material-icons-outlined">arrow_back</i> Back to Categories
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        @if($faqCategory->faqs->count() > 0)
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Created</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($faqCategory->faqs as $faq)
                                            <tr>
                                                <td>{{ $faq->question }}</td>
                                                <td>{{ Str::limit($faq->answer, 100) }}</td>
                                                <td>{{ $faq->created_at->format('M j, Y') }}</td>
                                                <td>
                                                    <div class="btn-group" role="group">
                                                        <a href="{{ route('admin.faqs.show', $faq->slug) }}" 
                                                           class="btn btn-sm btn-info" title="View">
                                                            <i class="material-icons-outlined">visibility</i>
                                                        </a>
                                                        <a href="{{ route('admin.faqs.edit', $faq->slug) }}" 
                                                           class="btn btn-sm btn-primary" title="Edit">
                                                            <i class="material-icons-outlined">edit</i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        @else
                            <div class="text-center py-4">
                                <p class="text-muted">No FAQs found in this category.</p>
                                <a href="{{ route('admin.faqs.create') }}" class="btn btn-primary">
                                    <i class="material-icons-outlined">add</i> Add FAQ
                                </a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
