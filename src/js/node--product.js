jQuery(document).ready(function(){

	if (jQuery(".section.product").length) {
		var ticking = false;
		var stage = jQuery(".section.product .stage");
		var wh = 0;
		var h1 = 0;
		var h2 = 0;
		var y1 = 0;
		var y2 = 0;
		var y3 = 0;
		var s = 0;

		function init() {
			stage.removeAttr("style");
			h1 = jQuery(".section.product").height();
			h2 = stage.outerHeight();
			y2 = jQuery(".section.product").offset().top;
			y3 = stage.offset().top;
			wh = jQuery(window).height();
			s = (y2+h1-y3-h2)/(y2+h1-y3);

			handleScroll();
		}
		init();

		var requestAnimationFrame =
			window.requestAnimationFrame  	||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback, element){
				window.setTimeout(callback, 1000 / 60);
			};

		jQuery(window).scroll(function(){
			y1 = (window.scrollY + wh);
			requestTick();
		});

		function requestTick() {
			if(!ticking) {
				requestAnimationFrame(handleScroll);
			}
			ticking = true;
		}

		function handleScroll() {
			ticking = false;
			var y = Math.min(Math.max(0, y1 - y3) * s, (y2 + h1 - h2)-y3);
			var cssTransform = "translate3d(0px, " + y + "px, 0px);";
			stage.attr("style", "transform:" + cssTransform + "-webkit-transform:" + cssTransform);
		}

		jQuery(window).resize(function() {
			if (this.resizeTO) clearTimeout(this.resizeTO);
			this.resizeTO = setTimeout(function() {
				jQuery(this).trigger('resizeEnd');
			}, 500);
		});
		jQuery(window).bind('resizeEnd', function() {
			init();
		});
		jQuery(window).bind('orientationchange', function() {
			init();
		});
	}
});
