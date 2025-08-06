<!DOCTYPE html>
<html lang="en">

<head>
    @include('layouts.admin.partials.head')
</head>

<body>
    <div class="tap-top"><i data-feather="chevrons-up"></i></div>
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
        {{-- header --}}
        @include('layouts.admin.partials.header')
        <div class="page-body-wrapper">
            @include('layouts.admin.partials.sidebar')
            <div class="page-body">
                @include('layouts.admin.partials.bread_crumbs')
                @yield('content')
            </div>
        </div>
    </div>
    @include('layouts.admin.partials.scripts')
</body>
</html>
