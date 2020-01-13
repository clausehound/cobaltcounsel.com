/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */

( function($) {

	( function() {
		var container, button, menu, links, subMenus;

		container = document.getElementById( 'site-navigation' );
		if ( ! container ) {
			return;
		}

		button = container.parentNode.parentNode.getElementsByTagName( 'button' )[0];
		if ( 'undefined' === typeof button ) {
			return;
		}

		menu = container.getElementsByTagName( 'ul' )[0];

		// Hide menu toggle button if menu is empty and return early.
		if ( 'undefined' === typeof menu ) {
			button.style.display = 'none';
			return;
		}

		menu.setAttribute( 'aria-expanded', 'false' );
		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}

		button.onclick = function() {
			if ( -1 !== container.className.indexOf( 'toggled' ) ) {
				container.className = container.className.replace( ' toggled', '' );
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			} else {
				container.className += ' toggled';
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			}
		};

		window.onresize = function() {
			if ( -1 !== container.className.indexOf( 'toggled' ) ) {
				container.className = container.className.replace( ' toggled', '' );
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			}
		};

		// Get all the link elements within the menu.
		links    = menu.getElementsByTagName( 'a' );
		subMenus = menu.getElementsByTagName( 'ul' );

		// Set menu items with submenus to aria-haspopup="true".
		for ( var i = 0, len = subMenus.length; i < len; i++ ) {
			subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
		}

		// Each time a menu link is focused or blurred, toggle focus.
		for ( i = 0, len = links.length; i < len; i++ ) {
			links[i].addEventListener( 'focus', toggleFocus, true );
			links[i].addEventListener( 'blur', toggleFocus, true );
		}

		/**
		 * Sets or removes .focus class on an element.
		 */
		function toggleFocus() {
			var self = this;

			// Move up through the ancestors of the current link until we hit .nav-menu.
			while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

				// On li elements toggle the class .focus.
				if ( 'li' === self.tagName.toLowerCase() ) {
					if ( -1 !== self.className.indexOf( 'focus' ) ) {
						self.className = self.className.replace( ' focus', '' );
					} else {
						self.className += ' focus';
					}
				}

				self = self.parentElement;
			}
		}
	} )();

	/*** Sticky header ***/
	var $body = jQuery( 'body' ),
		$nav  = jQuery( '.sticky-navigation' ),
		veryTopHeaderHeight,
		adminBarHeight,
		isAdminBar,
		limit;

	$(document).ready( function() {
		callback_mobile_dropdown();

		$('#tech-driven-link').click(function(){
			$('html, body').animate({
				scrollTop: $('#tech-driven').offset().top
   			}, 500);
		})
	} );

	

	$(window).load(function(){
	    'use strict';

		/* PRE LOADER */
	    jQuery('.status').fadeOut();
	    jQuery('.preloader').delay(1000).fadeOut('slow');

		setTimeout( fixFooterBottom, 100 );
		stickyHeader();
		carouselNormalization();
	} );
	$(window).resize(function() {
		setTimeout( fixFooterBottom, 100 );
		setTimeout( stickyHeader, 100 );
	} );

	/*** DROPDOWN FOR MOBILE MENU */
	var callback_mobile_dropdown = function () {
		var $navLi = $('#site-navigation li');
	    $navLi.each(function(){
	        if ( $(this).find('ul').length > 0 && !$(this).hasClass('has_children') ){
	            $(this).addClass('has_children');
	            $(this).find('a').first().after('<p class="dropdownmenu"><i class="fa fa-angle-down"></i></p>');
	        }
	    });
	    $('.dropdownmenu').click(function(){
	        if( $(this).parent('li').hasClass('this-open') ){
	            $(this).parent('li').removeClass('this-open');
	        }else{
	            $(this).parent('li').addClass('this-open');
	        }
	    });
	};

	/*** STICKY FOOTER ****/
	function fixFooterBottom(){
		var $header      = $('.sticky-navigation'),
			$footer      = $('#colophon'),
			$content     = $('#content');
		$content.css('min-height', '1px');
		var headerHeight  = $header.outerHeight(),
			footerHeight  = $footer.outerHeight(),
			contentHeight = $content.outerHeight(),
			windowHeight  = $(window).height();
		var totalHeight = headerHeight + footerHeight + contentHeight;

		if (totalHeight<windowHeight){
		  $content.css('min-height', windowHeight - headerHeight - footerHeight );
		}else{
		  $content.css('min-height','1px');
		}
	}

	/* STICKY HEADER */
	jQuery(document).ready(function(){
		veryTopHeaderHeight = $( '#top-bar' ).height();
		adminBarHeight      = $( '#wpadminbar' ).height();
		isAdminBar          = ( $( '#wpadminbar' ).length !== 0 ? true : false );
	var	$container 			= $( '.container-header' );
	var	myClass 			= 'container-header-fixed';

        var timer;
		jQuery(window).scroll(function(){

            if ( timer ) {
                clearTimeout(timer);
            }
            timer = setTimeout(function(){
                scrolled();
            }, 500);

		    if( window.innerWidth > 768 ) {
		        var window_offset       = $body.offset().top - jQuery(window).scrollTop();
		        if( isAdminBar ) {
		            limit = -veryTopHeaderHeight + adminBarHeight;
		        } else {
		            limit = -veryTopHeaderHeight;
		        }
		        if( window_offset < limit ) {
		            $nav.css('top', limit );
		            if ( ! $container.hasClass( myClass ) ) {
						$container.addClass( myClass );
					}
		        } else {
		            $nav.css('top', window_offset );
		            if ( $container.hasClass( myClass ) ) {
						 $container.removeClass( myClass );
					}
		        }
		    }
		});
	});

	function stickyHeader() {
		$( '#page' ).css( 'padding-top', $( '.sticky-navigation' ).height() );
	}

	function carouselNormalization() {
		var items = $('#main-slider .item'), //grab all slides
	    	heights = [], //create empty array to store height values
	    	tallest; //create variable to make note of the tallest slide

		if( ! items.length ) {
	    	return;
		}

		function normalizeHeights() {
			items.each( function() { //add heights to array
				heights.push( $(this).height() );
			} );
			tallest = Math.max.apply( null, heights ); //cache largest value
			items.css( 'min-height', tallest + 'px' );
		}
		normalizeHeights();

		$( window ).on( 'resize orientationchange', function () {
			tallest = 0, heights.length = 0; //reset vars
			items.css( 'min-height', '0' ); //reset min-height
			normalizeHeights(); //run it again
		} );
	}

	/* Modal */
	if ( $( '#siteModal' ).hasClass( 'site-modal-open' ) ) {
		$('#siteModal').modal('show');
	}

	$( '.open-modal' ).click( function() {
		$('#siteModal').modal('show');
	} );

    /* Smooth scroll navigation */
    $(document).ready(function(){
        'use strict';
        $('#site-navigation a[href*="#"]:not([href="#"]), a.post-comments[href*="#"]:not([href="#"])').bind('click',function () {
            var headerHeight;
            var hash    = this.hash;
            var idName  = hash.substring(1);    // get id name
            var alink   = this;                 // this button pressed
            // check if there is a section that had same id as the button pressed
            if ( $('section[id*=' + idName + ']').length > 0 && $(window).innerWidth() >= 767 ){
                $('.current').removeClass('current');
                $(alink).parent('li').addClass('current');
            }else{
                $('.current').removeClass('current');
            }
            if ( $(window).innerWidth() >= 767 ) {
                headerHeight = $('.sticky-navigation').outerHeight();
            } else {
                headerHeight = 0;
            }
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - headerHeight + 10
                    }, 1200);
                    return false;
                }
            }
        });
    });


    /* Top navigation menu selected items */
    function scrolled() {
        'use strict';
        if ( jQuery(window).width() >= 751 ) {
            var prallax_one_scrollTop = jQuery(window).scrollTop();       // cursor position
            var headerHeight = jQuery('.sticky-navigation').outerHeight();   // header height
            var isInOneSection = false;                              // used for checking if the cursor is in one section or not
            // for all sections check if the cursor is inside a section
            jQuery('section').each( function() {
                var thisID = '#' + jQuery(this).attr('id');           // section id
                var parallax_one_offset = jQuery(this).offset().top;         // distance between top and our section
                var thisHeight  = jQuery(this).outerHeight();         // section height
                var thisBegin   = parallax_one_offset - headerHeight;                      // where the section begins
                var thisEnd     = parallax_one_offset + thisHeight - headerHeight;         // where the section ends
                // if position of the cursor is inside of the this section
                if ( prallax_one_scrollTop >= thisBegin && prallax_one_scrollTop <= thisEnd ) {
                    isInOneSection = true;
                    jQuery('.current').removeClass('current');
                    jQuery('#site-navigation a[href*="' + thisID + '"]').parent('li').addClass('current');    // find the menu button with the same ID section
                    return false;
                }
                if (isInOneSection === false) {
                    jQuery('.current').removeClass('current');
                }
            });
        }
    }

} )(jQuery,window);