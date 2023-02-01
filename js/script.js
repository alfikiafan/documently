$(document).ready(function(){

    $(".menu img").click(function() {
        $('.menu').toggleClass('opened');
    });

    var header = $('.inicio');
    var range = 80;

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