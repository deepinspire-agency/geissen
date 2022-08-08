<?php
if (isset($_COOKIE['accept_cookie'])) return;
?>
<!-- Message -->
<div class="cookie" id="cookieMessage">

    <!-- title -->
    <h5 class="cookie__title">
        We use cookies
    </h5>
    <!-- end title -->

    <!-- excerpt -->
    <div class="cookie__excerpt">
        We use cookies on this website to ensure that you get the best browsing experience. You may delete and block all cookies from this site <a href="https://www.aboutcookies.org/" target="_blank">as described here</a>. By continuing to browse, we assume that you agree to our
        <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
    </div>
    <!-- end excerpt -->

    <!-- footer -->
    <div class="cookie__footer">

        <a href="javascript:;" class="btn btn-sm btn-opacity cookieAccept">
            Accept
        </a>

    </div>
    <!-- end footer -->

</div>
<!-- End Message -->
