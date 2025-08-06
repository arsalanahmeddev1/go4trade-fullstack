@extends('layouts.admin.master')
@section('title', 'Dashboard')
@section('content')
    <div class="container-fluid default-dashboard">
        <div class="row widget-grid">
            <div class="col-xxl-4 col-sm-6 box-col-6">
                <div class="card profile-box">
                    <div class="card-body">
                        <div class="d-flex media-wrapper justify-content-between">
                            <div class="flex-grow-1">
                                <div class="greeting-user">
                                    <h2 class="f-w-600">Welcome {{ Auth::user()->name }}</h2>
                                    <p>Here whats happing in your account today</p>
                                    <div class="whatsnew-btn">
                                        <a class="btn btn-outline-white" href="{{ route('admin.profile.edit') }}" target="_blank">View
                                            {{ __('Profile') }}</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="clockbox">
                                    <svg id="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                                        <g id="face">
                                            <circle class="circle" cx="300" cy="300" r="253.9"></circle>
                                            <path class="hour-marks"
                                                d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6">
                                            </path>
                                            <circle class="mid-circle" cx="300" cy="300" r="16.2"></circle>
                                        </g>
                                        <g id="hour">
                                            <path class="hour-hand" d="M300.5 298V142"></path>
                                            <circle class="sizing-box" cx="300" cy="300" r="253.9"></circle>
                                        </g>
                                        <g id="minute">
                                            <path class="minute-hand" d="M300.5 298V67"></path>
                                            <circle class="sizing-box" cx="300" cy="300" r="253.9"></circle>
                                        </g>
                                        <g id="second">
                                            <path class="second-hand" d="M300.5 350V55"></path>
                                            <circle class="sizing-box" cx="300" cy="300" r="253.9"></circle>
                                        </g>
                                    </svg>
                                </div>
                                <div class="badge f-10 p-0" id="txt"></div>
                            </div>
                        </div>
                        <div class="cartoon">
                            <img class="img-fluid" src="../assets/images/dashboard/cartoon.svg"
                                alt="vector women with leptop" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-auto col-xl-3 col-sm-6 box-col-3">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card widget-1">
                            <div class="card-body">
                                <div class="widget-content">
                                    <div class="widget-round secondary">
                                        <div class="bg-round">
                                            <svg>
                                                <use href="../assets/svg/icon-sprite.svg#c-revenue"></use>
                                            </svg><svg class="half-circle svg-fill">
                                                <use href="../assets/svg/icon-sprite.svg#halfcircle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="f-light">Blogs</span>
                                        <h4>
                                            <span class="counter" data-target="{{$blogCount}}">{{$blogCount}}</span>
                                        </h4>
                                    </div>
                                </div>
                                <div class="font-success f-w-500">
                                    <i class="bookmark-search me-1" data-feather="trending-up"></i><span
                                        class="txt-success">+50%</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card widget-1">
                                <div class="card-body">
                                    <div class="widget-content">
                                        <div class="widget-round success">
                                            <div class="bg-round">
                                                <svg>
                                                    <use href="../assets/svg/icon-sprite.svg#c-customer"></use>
                                                </svg><svg class="half-circle svg-fill">
                                                    <use href="../assets/svg/icon-sprite.svg#halfcircle"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>
                                                <span class="counter" data-target="{{$faqCount}}">{{$faqCount}}</span>
                                            </h4>
                                            <span class="f-light">FAQs</span>
                                        </div>
                                    </div>
                                    <div class="font-success f-w-500">
                                        <i class="bookmark-search me-1" data-feather="trending-up"></i><span
                                            class="txt-success">+25%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-auto col-xl-3 col-sm-6 box-col-3">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card widget-1">
                            <div class="card-body">
                                <div class="widget-content">
                                    <div class="widget-round warning">
                                        <div class="bg-round">
                                            <svg>
                                                <use href="../assets/svg/icon-sprite.svg#c-profit"></use>
                                            </svg><svg class="half-circle svg-fill">
                                                <use href="../assets/svg/icon-sprite.svg#halfcircle"></use>
                                            </svg>
                                        </div>
                                    </div>
                                                                            <div>
                                            <h4>
                                                <span class="counter" data-target="{{$contactCount}}">{{$contactCount}}</span>
                                            </h4>
                                            <span class="f-light">Contacts</span>
                                        </div>
                                    </div>
                                    <div class="font-success f-w-500">
                                        <i class="bookmark-search me-1" data-feather="trending-up"></i><span
                                            class="txt-success">+15%</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="card widget-1">
                                <div class="card-body">
                                    <div class="widget-content">
                                        <div class="widget-round primary">
                                            <div class="bg-round">
                                                <svg class="fill-primary">
                                                    <use href="../assets/svg/icon-sprite.svg#c-invoice"></use>
                                                </svg><svg class="half-circle svg-fill">
                                                    <use href="../assets/svg/icon-sprite.svg#halfcircle"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 class="counter" data-target="{{$careerCount}}">{{$careerCount}}</h4>
                                            <span class="f-light">Career Applications</span>
                                        </div>
                                    </div>
                                    <div class="font-success f-w-500">
                                        <i class="bookmark-search me-1" data-feather="trending-up"></i><span
                                            class="txt-success">+40%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 box-ord-1 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Blogs Listings</h5>
                            <div class="card-header-right-icon">
                                <div class="dropdown icon-dropdown">
                                    <button class="btn dropdown-toggle" id="customerButton" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="icon-more-alt"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="customerButton">
                                        <a class="dropdown-item" href="#!">Today</a><a class="dropdown-item"
                                            href="#!">Tomorrow</a><a class="dropdown-item"
                                            href="#!">Yesterday</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body main-customer-table px-0 pt-0">
                        <div class="recent-table table-responsive custom-scrollbar">
                            <table class="table" id="top-customer">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Meta Title</th>
                                        <th>Meta Description</th>
                                        <th>Meta Keywords</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($blogs as $blog)
                                        @php
                                            preg_match('/<img[^>]+src="([^">]+)"/', $blog->content, $match);
                                            $imageSrc = $match[1] ?? asset('assets/images/dashboard/user/2.jpg');
                                        @endphp
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <img class="img-fluid bl-image-size me-2" src="{{ $imageSrc }}"
                                                        alt="blog image" />
                                                    <div class="img-content-box">
                                                        <a class="f-w-500" href="products-list.html">{{ $blog->title }}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $blog->meta_title }}</td>
                                            <td>{{ $blog->meta_description }}</td>
                                            <td>{{ $blog->meta_keywords }}</td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <a href="{{ route('admin.blogs.edit', $blog->slug) }}"
                                                        class="text-primary" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="{{ route('admin.blogs.show', $blog->slug) }}"
                                                        class="text-success" title="View">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <form class="delete-blog-form" data-slug="{{ $blog->slug }}">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="button"
                                                            class="btn btn-link text-danger p-0 delete-btn" title="Delete">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 box-ord-6 box-col-8e">
                <div class="card">
                    <div class="card-header card-no-border">
                        <div class="header-top">
                            <h5>Faqs Listings</h5>
                            <div class="card-header-right-icon">
                                <div class="dropdown icon-dropdown">
                                    <button class="btn dropdown-toggle" id="recentButton" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="icon-more-alt"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="recentButton">
                                        <a class="dropdown-item" href="#!">Today</a><a class="dropdown-item"
                                            href="#!">Tomorrow</a><a class="dropdown-item"
                                            href="#!">Yesterday</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body main-customer-table px-0 pt-0">
                        <div class="recent-table table-responsive custom-scrollbar">
                            <table class="table" id="blog-listing">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($faqs as $faq)
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div class="d-flex">
                                                    <div class="img-content-box">
                                                        <a class="f-w-500" href="products-list.html">{{ $faq->question }}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $faq->answer }}</td>
                                            <td>
                                                <div class="d-flex gap-2">
                                                    <a href="{{ route('admin.faqs.edit', $faq->slug) }}"
                                                        class="text-primary" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="{{ route('admin.faqs.show', $faq->slug) }}"
                                                        class="text-success" title="View">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <form class="delete-blog-form" data-slug="{{ $faq->slug }}">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="button"
                                                            class="btn btn-link text-danger p-0 delete-btn" title="Delete">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script src="{{ asset('assets/js/chart/apex-chart/apex-chart.js') }}"></script>
    <script src="{{ asset('assets/js/chart/apex-chart/stock-prices.js') }}"></script>
    {{-- <script src="{{ asset('assets/js/counter/counter-custom.js') }}"></script> --}}
    <script src="{{ asset('assets/js/datatable/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/js/datatable/datatables/dataTables.js') }}"></script>
    <script src="{{ asset('assets/js/datatable/datatables/dataTables.select.js') }}"></script>
    <script src="{{ asset('assets/js/datatable/datatables/select.bootstrap5.js') }}"></script>
    <script>
        $("#top-customer").DataTable({
            columnDefs: [{
                orderable: false,
                render: $.fn.dataTable.render.select(),
                targets: 0,
            }, ],
            fixedColumns: {
                leftColumns: 2, //
            },
            order: [
                [1, "asc"]
            ],
            scrollCollapse: true,
            select: {
                style: "multi",
                selector: "td:first-child",
            },
            searchable: true,
            pageLength: 4,
            autoWidth: false,
            lengthChange: false,
            info: false,
        });

        // $("#main-recent-order").DataTable({
        //     columnDefs: [{
        //         orderable: false,
        //         render: $.fn.dataTable.render.select(),
        //         targets: 0,
        //     }, ],
        //     fixedColumns: {
        //         leftColumns: 2, // Note: 'start' is changed to 'leftColumns' in jQuery DataTables
        //     },
        //     order: [
        //         [1, "asc"]
        //     ],
        //     scrollCollapse: true,
        //     select: {
        //         style: "multi",
        //         selector: "td:first-child",
        //     },
        //     responsive: {
        //         details: {
        //             type: "column",
        //             target: -1,
        //         },
        //         breakpoints: [{
        //                 name: "fablet",
        //                 pageLength: 4
        //             },
        //             {
        //                 name: "phone",
        //                 pageLength: 6
        //             },
        //         ],
        //     },
        //     searchable: true,
        //     responsive: true,
        //     pageLength: 4,
        //     lengthChange: false,
        //     autoWidth: false,
        // });

        $("#blog-listing").DataTable({
            columnDefs: [{
                targets: 0,
                orderable: false,
                render: $.fn.dataTable.render.select(),
            }, ],
            fixedColumns: {
                leftColumns: 2,
            },
            order: [
                [1, "asc"]
            ],
            scrollCollapse: true,
            select: {
                style: "multi",
                selector: "td:first-child",
            },
            searchable: true,
            pageLength: 5,
            autoWidth: false,
            lengthChange: false,
            info: false,
        });
    </script>

    {{-- <script src="{{ asset('assets/js/typeahead/handlebars.js') }}"></script> --}}

    {{-- <script src="{{ asset('assets/js/typeahead/typeahead.bundle.js') }}"></script> --}}
    {{-- <script src="{{ asset('assets/js/typeahead/typeahead.custom.js') }}"></script> --}}
    {{-- <script src="{{ asset('assets/js/typeahead-search/handlebars.js') }}"></script> --}}
    {{-- <script src="{{ asset('assets/js/typeahead-search/typeahead-custom.js') }}"></script> --}}
@endpush
