<div class="page-header">
    <div class="header-wrapper row m-0">
        <form class="form-inline search-full col" action="#" method="get">
            <div class="form-group w-100">
                <div class="Typeahead Typeahead--twitterUsers">
                    <div class="u-posRelative">
                        <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text"
                            placeholder="Search Anything Here..." name="q" title="" autofocus />
                        <div class="spinner-border Typeahead-spinner" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <i class="close-search" data-feather="x"></i>
                    </div>
                    <div class="Typeahead-menu"></div>
                </div>
            </div>
        </form>
        <div class="header-logo-wrapper col-auto p-0">
            <div class="logo-wrapper">
                <a href="index.html">
                    <img class="img-fluid for-light" src="{{ asset('assets/images/logo/logo.png') }}" alt="" />
                    <img class="img-fluid for-dark" src="{{ asset('assets/images/logo/logo_dark.png') }}"
                        alt="" />
                </a>
            </div>
            <div class="toggle-sidebar">
                <i class="status_toggle middle sidebar-toggle" data-feather="align-center"></i>
            </div>
        </div>
        <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
            <div class="notification-slider">
                {{-- <div class="d-flex h-100">
                    <img src="{{ asset('assets/images/giftools.gif') }}" alt="gif" />
                    <h6 class="mb-0 f-w-400">
                        <span class="font-primary">Don't Miss Out! </span><span class="f-light">
                            Our new update has been released.</span>
                    </h6>
                    <i class="icon-arrow-top-right f-light"></i>
                </div> --}}
                {{-- <div class="d-flex h-100">
                    <img src="{{ asset('assets/images/giftools.gif') }}" alt="gif" />
                    <h6 class="mb-0 f-w-400">
                        <span class="f-light">Something you love is now on sale!
                        </span>
                    </h6>
                    <a class="ms-1" href="https://1.envato.market/3GVzd" target="_blank">Buy now !</a>
                </div> --}}
            </div>
        </div>
        <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
            <ul class="nav-menus">

                {{-- Notification icons --}}
                <li class="profile-nav onhover-dropdown pe-0 py-0">
                    <div class="d-flex profile-media">
                        <div class="flex-grow-1 d-flex align-items-center gap-2">
                            <span>{{ Auth::user()->name }}</span>
                            <p class="mb-0">
                                 <i class="middle fa-solid fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                    <div class="cart-dropdown onhover-show-div" style="max-width: 185px;">
                        <ul>
                            <li>
                                <div class="d-flex">
                                    <div class="flex-grow-1 d-flex row-gap-3 flex-column">
                                        <a href="{{ route('admin.profile.edit') }}"><span class="f-light">{{ __('Profile') }}</span></a>
                                        <form method="POST" action="{{ route('logout') }}">
                                            @csrf

                                            <x-dropdown-link :href="route('logout')"
                                                onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                                <span class="f-light">{{ __('Log Out') }}</span>
                                            </x-dropdown-link>
                                        </form>
                                        {{-- <span>Logout</span> --}}
                                    </div>
                                </div>
                            </li>
                            {{-- ... --}}
                        </ul>
                    </div>
                    {{-- ... --}}
                </li>
            </ul>
        </div>
        {{-- Scripts --}}
        <script class="result-template" type="text/x-handlebars-template">
            {{-- ... --}}
        </script>
        <script class="empty-template" type="text/x-handlebars-template">
            {{-- ... --}}
        </script>
    </div>
</div>
