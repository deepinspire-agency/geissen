jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Site
	 * @type {{init: Site.init, install: Site.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 * @date 22.02.2022
	 */
	var Site = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.cookie()
			this.nav()
			this.pravicy_policy()

		},


		/**
		 * Menu
		 */
		nav: function ()
		{

			$(document).on('click', '.header__burger', function(e) {

				e.preventDefault();

				const $this = $(this)

				$('body').toggleClass('menu_active')

			})

		},

		/**
		 * Cookie Accept
		 */
		cookie: function ()
		{

			$(document).on('click', '.cookieAccept', function(e) {

				e.preventDefault();

				$.cookie('accept_cookie', 1)

				$('#cookieMessage').remove()

			})

		},

		/**
		 * Pravicy Policy
		 */
		pravicy_policy: function ()
		{

			$(document).on('click', '.scrollSection a', function(e) {

				e.preventDefault()

				let $this = $(this),
					$id = $this.attr('href')

				$("html, body").animate({
					scrollTop: $($id).offset().top - 30
				}, {
					duration: 500,
					easing: "swing"
				});

			})

		},

	}

	Site.init()

});
