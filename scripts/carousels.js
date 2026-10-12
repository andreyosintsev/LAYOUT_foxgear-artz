$(document).ready(function () {
    /* Карусель с товарами и выбором карточки по клику на превью */

    if ($(".hero-single__images").length > 0) {
        const $carousel = $(".hero-single__images");

        $carousel.owlCarousel({
            loop: true,
            autoplay: false,
            nav: false,
            dots: false,
            center: true,
            touchDrag: true,
            pullDrag: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                971: {
                    items: 1,
                    margin: 0,
                },
            },
        });

        $(".hero-single__gallery-image").on("click", function () {
            const index = $(this).data("index");
            $carousel.trigger("to.owl.carousel", [index, 300]);
        });

        $(".form__label").on("click", function () {
            const index = $(this).data("index");
            const model = $(this).data("model");
            const price = $(this).data("price");

            if (index) $carousel.trigger("to.owl.carousel", [index, 300]);
            if (model) $(".panel-single__subtitle").text("Модель: " + model);
            if (price) $(".panel-single__price").text(price);
        });
    }

    $(".features").owlCarousel({
        margin: 18,
        loop: true,
        nav: false,
        dots: true,
        pullDrag: true,
        autoWidth: false,
        autoHeight: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });

    $(".video-slider__videos").owlCarousel({
        items: 5,
        margin: 15,
        loop: false,
        nav: false,
        dots: false,
        pullDrag: true,
        autoWidth: false,
        autoHeight: false,
        responsive: {
            0: {
                items: 3,
            },
            971: {
                items: 5,
            },
        },
    });
});
