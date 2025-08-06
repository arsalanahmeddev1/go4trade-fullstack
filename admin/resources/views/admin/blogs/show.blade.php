@extends('layouts.admin.master')
@section('title', 'Blog')
@section('content')
    <div class="container-fluid">
        @php
            preg_match('/<img[^>]+src="([^">]+)"/', $blog->content, $match);
            $imageSrc = $match[1] ?? asset('assets/images/dashboard/user/2.jpg');
        @endphp
        <div class="row blog-show-page">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="blog-single">
                            <div class="blog-box blog-details">
                                <div class="blog-detail-img-wrapper">
                                    <img class="img-fluid w-100 blog-detail-img" src="{{ $imageSrc }}" alt="blog-main" />
                                </div>
                                <div class="blog-details">
                                    <ul class="blog-social">
                                        <li>{{ $blog->created_at->format('d M Y') }}</li>
                                        <li>
                                            <i class="icofont icofont-user"></i>Admin
                                        </li>
                                    </ul>
                                    <h5>
                                        {{ $blog->title }}
                                    </h5>
                                    <div class="single-blog-content-top pt-3">
                                            {!! $blog->content !!}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Related Blogs Section -->
        <div class="row mb-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6>Related Blogs</h6>
                            <a href="{{ route('admin.blogs.related.index', $blog->slug) }}" class="btn btn-primary btn-sm">
                                <i class="fa fa-link"></i> Manage Related Blogs
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        @php
                            $relatedBlogs = $blog->relatedBlogs()->with('relatedBlog')->get();
                        @endphp
                        
                        @if($relatedBlogs->count() > 0)
                            <div class="row">
                                @foreach($relatedBlogs as $relatedBlog)
                                    <div class="col-md-6 col-lg-4 mb-3">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h6 class="card-title">
                                                    <a href="{{ route('admin.blogs.show', $relatedBlog->relatedBlog->slug) }}" class="text-decoration-none">
                                                        {{ $relatedBlog->relatedBlog->title }}
                                                    </a>
                                                </h6>
                                                <p class="card-text small text-muted">
                                                    {{ Str::limit($relatedBlog->relatedBlog->summary, 100) }}
                                                </p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <small class="text-muted">
                                                        {{ $relatedBlog->relatedBlog->created_at->format('M d, Y') }}
                                                    </small>
                                                    <a href="{{ route('admin.blogs.show', $relatedBlog->relatedBlog->slug) }}" class="btn btn-sm btn-outline-primary">
                                                        View
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        @else
                            <div class="text-center py-4">
                                <i class="fa fa-info-circle text-muted fa-2x mb-3"></i>
                                <h6 class="text-muted">No related blogs</h6>
                                <p class="text-muted">Add related blogs to improve user engagement.</p>
                                <a href="{{ route('admin.blogs.related.index', $blog->slug) }}" class="btn btn-primary">
                                    <i class="fa fa-plus"></i> Add Related Blogs
                                </a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>

        <div class="row pb-5 g-3 e-category">
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
                    placeholder="Enter meta title" value="{{ $blog->meta_title }}" readonly />
            </div>
            <div class="col-lg-6">
                <label class="form-label" for="validationKeywords">Meta Keywords<span
                        class="txt-danger">*</span></label>
                <input class="form-control" id="validationKeywords" name="meta_keywords"
                    type="text" placeholder="Enter meta keywords" value="{{ $blog->meta_keywords }}" readonly />
            </div>
            <div class="col-md-12">
                <label class="form-label">Meta Description</label>
                <input class="form-control" id="validationCustom01" name="meta_description"
                    type="text" placeholder="Add Meta Description" value="{{ $blog->meta_description }}" readonly />
            </div>
        </div>
    </div>
@endsection
