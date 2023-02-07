$(document).ready(function(){
    $(".menu img").click(function() {
        $('.menu').toggleClass('opened');
    });

    var header = $('.start');
    var range = 80;

    const counterUp = window.counterUp.default

    const callback = entries => {
	    entries.forEach( entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 1500,
                    delay: 10,
                })
                el.classList.add('is-visible')
            }
	    })
    }

    const IO = new IntersectionObserver( callback, { threshold: 1 } )

    const el = document.querySelector( '.counter' )
    const el2 = document.querySelector( '.counter2' )
    const el3 = document.querySelector( '.counter3' )
    IO.observe(el)
    IO.observe(el2)
    IO.observe(el3)

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop(),
            height = header.outerHeight(),
            offset = height / 1.5,
            calc = 1 - (scrollTop - offset + range) / range;

        header.css({ 'opacity': calc });

        if (calc > '1') {
            header.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            header.css({ 'opacity': 0 });
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    const items = document.querySelectorAll(".accordion button");
    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');
        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }
        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }
    items.forEach(item => item.addEventListener('click', toggleAccordion));
});