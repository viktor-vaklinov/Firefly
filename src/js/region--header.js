function Header(){
	Header.topHeight = 0;

	jQuery(document).ready(function(){

		var scrollY = 0;
		var ticking = false;
		var prev = 0;
		var top = 0;
		var locked = false;

		var requestAnimationFrame =
			window.requestAnimationFrame  	||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback, element){
				window.setTimeout(callback, 1000 / 60);
			};

		jQuery(window).scroll(function() {
			scrollY = jQuery(window).scrollTop();
			if (!locked)
			requestTick();
		});
		jQuery(".region-header .burger").unbind().click(function(e) {
			jQuery(".region-header .menu").slideToggle(function(){
				Header.initHeader();
				if (!jQuery(".region-header .menu").is(":visible")) {
					jQuery(".region-header .menu").removeAttr("style");
				}
			});
		});
		/* *********************************************** */
		/* **** Window resize and  orientationchange ***** */
		/* *********************************************** */
		jQuery(window).resize(function() {
			if (this.resizeTO) clearTimeout(this.resizeTO);
			this.resizeTO = setTimeout(function() {
				jQuery(this).trigger('resizeEnd');
			}, 500);
		});
		jQuery(window).bind('resizeEnd', function() {
			Header.initHeader();
		});
		jQuery(window).bind('orientationchange', function() {
			Header.initHeader();
		});
		Header.initHeader();
		Header.initSmoothScroll();


		function requestTick() {
			if(!ticking) {
				requestAnimationFrame(handleScroll);
			}
			ticking = true;
		}
		function handleScroll() {
			console.log(scrollY);
			ticking = false;
			var cur = scrollY / 4;
			var diff = prev - cur;
			top = Math.min(Math.max(0, -cur), Math.max(-Header.topHeight, top + diff));
			jQuery(".region-header").css("top", top + "px");
			prev = cur;

			if (scrollY > 100) {
				jQuery(".scrollTop").show();
			} else {
				jQuery(".scrollTop").hide();
			}
		}
	});
};
Header.initSmoothScroll = function (){
	jQuery("a.smooth, .link.smooth").unbind().click(function(e) {
		e.preventDefault();
		Header.scrollTo(this.hash);
	});
};
Header.initHeader = function() {
	Header.topHeight = jQuery(".region-header").height() +
	(jQuery(".region-header .menu").is(":visible") ? + jQuery(".region-header .menu").height() : 0);
	prev = window.scrollY / 4;
	top = 0;
};
Header.scrollTo = function (hash, callback) {
	var target = jQuery(hash);
	target = target.length ? target : jQuery("[name='" + hash.slice(1) + "']");
	if (target.length) {
		locked = true;
		jQuery('html,body').animate({
			scrollTop: Math.max(0, target.offset().top)
		}, 1000, function(){
			locked = false;
			Header.initHeader();
			if (callback) {
				callback();
			}
		});
	}
};
Header();
