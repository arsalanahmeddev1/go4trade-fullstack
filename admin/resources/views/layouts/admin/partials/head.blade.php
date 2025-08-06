
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Cuba admin is super flexible, powerful, clean & modern responsive bootstrap 5 admin template with unlimited possibilities." />
    <meta name="keywords" content="admin template, Cuba admin template, dashboard template, flat admin template, responsive admin template, web app" />
    <meta name="author" content="pixelstrap" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="{{ asset('assets/images/favicon.png') }}" type="image/x-icon" />
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.png') }}" type="image/x-icon" />
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
    
    <!-- Vendor CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/icofont.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/themify.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/flag-icon.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/feather-icon.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/slick.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/slick-theme.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/scrollbar.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/vendors/bootstrap.css') }}" />
    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
    <link id="color" rel="stylesheet" href="{{ asset('assets/css/color-1.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}" />
    <!-- SweetAlert2 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    @stack('styles')
    <!-- Optional Color Themes -->
    {{-- Uncomment only if you need to switch theme dynamically --}}
{{--     
    <link rel="stylesheet" href="{{ asset('assets/css/color-2.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/color-3.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/color-4.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/color-5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/color-6.css') }}" />
    --}}
    
    <!-- JS (deferred to avoid blocking) -->
    <script defer src="{{ asset('assets/css/color-1.js') }}"></script>
    <script defer src="{{ asset('assets/css/responsive.js') }}"></script>
    <script defer src="{{ asset('assets/css/style.js') }}"></script>
    <title>@yield('title', 'Dashboard')</title>


