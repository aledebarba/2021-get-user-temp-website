// Flowtype
$('body').flowtype({
    minimum: 300,
    maximum: 3000,
    minFont: 15,
    maxFont: 25,
    fontRatio: 80,
});

// Lazy Load
document.addEventListener("DOMContentLoaded", function() {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;

	const lazyLoad = function() {
		if (active === false) {
			active = true;

			setTimeout(function() {
				lazyImages.forEach(function(lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.src = lazyImage.dataset.src;
						lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function(image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
});

// SmoothScroll
$(function() {
	$('.smooth-scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-0}, 1000);
					return false;
			}
		}
	});
 });

// Parallax
$(document).ready(function () {	
	var rellax = new Rellax('.rellax', {
		breakpoints: [300, 765, 1024],
		center: true
	});
});

// Cookies
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

$(document).ready(function() {
    if (readCookie('acceptcookies') === "true") {$('.cookies-bar').remove();}
    $('.cookies-bar .agree').click(function() {
        $('.cookies-bar').remove();
        var expires = new Date();
        expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = "acceptcookies=true; expires=" + expires + "; path=/";
    });
})

/*
// Fixed
$(document).ready(function() {
    //const body = document.body;
    const scrollExtra = "scroll-extra";
    const scrollExtraMove = "scroll-extra-move";
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    
    const element = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            element.classList.remove(scrollUp);
            element.classList.remove(scrollExtra);
            return;
        }

        if (currentScroll > lastScroll && !element.classList.contains(scrollDown)) {
            // down
            element.classList.remove(scrollUp);
            element.classList.add(scrollDown);
            
            element.classList.add(scrollExtra);
        } else if (currentScroll < lastScroll && element.classList.contains(scrollDown)) {
            // up
            element.classList.remove(scrollDown);
            element.classList.add(scrollUp);
            
            element.classList.add(scrollExtra);
        }

        lastScroll = currentScroll;
    });
})
*/