<div class="sidebar-wrapper" data-sidebar-layout="stroke-svg">
    <div>
        <div class="logo-wrapper">
            <a href="{{ route('admin.dashboard') }}">
                <img class="img-fluid for-light" src="{{ asset('assets/images/logo/logo.png') }}" alt="" />
                <img class="img-fluid for-dark" src="{{ asset('assets/images/logo/logo_dark.png') }}" alt="" />
            </a>
            <div class="back-btn"><i class="fa-solid fa-angle-left"></i></div>
            <div class="toggle-sidebar">
                <i class="status_toggle middle sidebar-toggle" data-feather="grid"></i>
            </div>
        </div>
        <div class="logo-icon-wrapper">
            <a href="{{ route('admin.dashboard') }}">
                <img class="img-fluid" src="{{ asset('assets/images/logo/logo-icon.png') }}" alt="" />
            </a>
        </div>
        <nav class="sidebar-main">
            <div class="left-arrow" id="left-arrow">
                <i data-feather="arrow-left"></i>
            </div>
            <div id="sidebar-menu">
                <ul class="sidebar-links" id="simple-bar">
                    <li class="back-btn">
                        <a href="{{ route('admin.dashboard') }}">
                            <img class="img-fluid" src="{{ asset('assets/images/logo/logo-icon.png') }}" alt="" />
                        </a>
                        <div class="mobile-back text-end">
                            <span>Back</span><i class="fa-solid fa-angle-right ps-2" aria-hidden="true"></i>
                        </div>
                    </li>
                    <li class="pin-title sidebar-main-title">
                        <div>
                            <h6>Pinned</h6>
                        </div>
                    </li>
                    <li class="sidebar-main-title">
                        <div>
                            <h6 class="lan-1">General</h6>
                        </div>
                    </li>
                    
                    <li class="sidebar-list">
                        <i class="fa-solid fa-thumbtack"></i>
                        <a class="sidebar-link sidebar-title">
                            <svg class="stroke-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#stroke-blog') }}"></use>
                            </svg>
                            <svg class="fill-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#fill-blog') }}"></use>
                            </svg>
                            <span>Blogs</span>
                        </a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('admin.blogs.index') }}">Blogs List</a></li>
                            <li><a href="{{ route('admin.blogs.create') }}">Add Blog</a></li>
                        </ul>
                    </li>
                    <li class="sidebar-list">
                        <i class="fa-solid fa-thumbtack"></i>
                        <a class="sidebar-link sidebar-title">
                            <svg class="stroke-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#stroke-blog') }}"></use>
                            </svg>
                            <svg class="fill-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#fill-blog') }}"></use>
                            </svg>
                            <span>Faqs</span>
                        </a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('admin.faqs.index') }}">Faqs List</a></li>
                            <li><a href="{{ route('admin.faqs.create') }}">Add Faqs</a></li>
                        </ul>
                    </li>
                    <li class="sidebar-list">
                        <i class="fa-solid fa-thumbtack"></i>
                        <a class="sidebar-link sidebar-title">
                            <svg class="stroke-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#stroke-blog') }}"></use>
                            </svg>
                            <svg class="fill-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#fill-blog') }}"></use>
                            </svg>
                            <span>Faqs Categories</span>
                        </a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('admin.faq-categories.index') }}">Faqs Categories List</a></li>
                            <li><a href="{{ route('admin.faq-categories.create') }}">Add Faqs Categories</a></li>
                        </ul>
                    </li>
                    <li class="sidebar-list">
                        <i class="fa-solid fa-thumbtack"></i>
                        <a class="sidebar-link sidebar-title">
                            <svg class="stroke-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#stroke-blog') }}"></use>
                            </svg>
                            <svg class="fill-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#fill-blog') }}"></use>
                            </svg>
                            <span>Contact</span>
                        </a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('admin.contacts.index') }}">Contact List</a></li>
                        </ul>
                    </li>
                    <li class="sidebar-list">
                        <i class="fa-solid fa-thumbtack"></i>
                        <a class="sidebar-link sidebar-title">
                            <svg class="stroke-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#stroke-blog') }}"></use>
                            </svg>
                            <svg class="fill-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#fill-blog') }}"></use>
                            </svg>
                            <span>Careers</span>
                        </a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('admin.careers.index') }}">Career Applications</a></li>
                        </ul>
                    </li>
                    <li class="sidebar-list">
                        <i class="fa-solid fa-thumbtack"></i>
                        <a class="sidebar-link sidebar-title">
                            <svg class="stroke-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#stroke-blog') }}"></use>
                            </svg>
                            <svg class="fill-icon">
                                <use href="{{ asset('assets/svg/icon-sprite.svg#fill-blog') }}"></use>
                            </svg>
                            <span>Newsletter</span>
                        </a>
                        <ul class="sidebar-submenu">
                            <li><a href="{{ route('admin.newsletters.index') }}">Newsletter Subscriptions</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="right-arrow" id="right-arrow">
                <i data-feather="arrow-right"></i>
            </div>
        </nav>
    </div>
</div>
