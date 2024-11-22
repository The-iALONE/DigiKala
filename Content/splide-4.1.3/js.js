
function splides() {
    function splide1() {
        let splide = new Splide('#splideDJslider', {
            direction: 'rtl',
            type: 'noloop',
            perPage: 1,
            autoplay: true,
            classes: {
                arrows: 'splide__arrows sliderarrows-config',
                arrow: 'splide__arrow storySlider-arrow slider-arrow-right-config',
                prev: 'splide__arrow--prev storySlider-arrow-prev slider-arrow-left-config',
                next: 'splide__arrow--next storySlider-arrow-next',
            },
        });
        splide.mount();
    }
    splide1();

    function splide2() {
        let splide = new Splide('#splide-shegeft', {
            direction: 'rtl',
            perMove: 1,
            perPage: 3,
            updateOnMove: true,
            pagination: false,
            omitEnd: true,
            trimSpace: true,
            classes: {
                arrow: 'splide__arrow ',
                prev: 'splide__arrow--prev storySlider-arrow-pre splide-shegeft-arrow-right-config',
                next: 'splide__arrow--next storySlider-arrow-next splide-shegeft-arrow-left-config',
            },
            breakpoints: {
                1024: {
                    perPage: 3,

                },
                767: {
                    perPage: 2,

                },
                640: {
                    perPage: 1,

                },
            },
        });
        splide.mount();
    }
    splide2();

    function splide3() {
        let splide = new Splide('#mostPopularBrandsSlider', {
            direction: 'rtl',
            perMove: 1,
            perPage: 1,
            omitEnd: true,
            trimSpace: true,
            classes: {
                arrow: 'splide__arrow storySlider-arrow',
                prev: 'splide__arrow--prev storySlider-arrow-prev mostPopularBrandsSlider-arrow-right-config',
                next: 'splide__arrow--next storySlider-arrow-next mostPopularBrandsSlider-arrow-left-config',
            },
        });
        splide.mount();
    }
    splide3();


    function splide4() {
        let splide = new Splide('#mostSaleAndHot', {
            direction: 'rtl',
            perMove: 1,
            perPage: 1,
            omitEnd: true,
            trimSpace: true,
            classes: {
                arrow: 'splide__arrow storySlider-arrow',
                prev: 'splide__arrow--prev storySlider-arrow-prev mostSaleAndHotSlider-arrow-right-config',
                next: 'splide__arrow--next storySlider-arrow-next mostSaleAndHotSlider-arrow-left-config',
            },
        });
        splide.mount();
    }
    splide4();


    function splide5() {
        let splide = new Splide('#Hottt', {
            direction: 'rtl',
            perMove: 1,
            perPage: 1,
            omitEnd: true,
            trimSpace: true,
            classes: {
                arrow: 'splide__arrow storySlider-arrow',
                prev: 'splide__arrow--prev storySlider-arrow-prev mostSaleAndHotSlider-arrow-right-config',
                next: 'splide__arrow--next storySlider-arrow-next mostSaleAndHotSlider-arrow-left-config',
            },
        });
        splide.mount();
    }
    splide5();
}
    
splides();

let splide = new Splide('#splide-storySlider', {
    direction: 'rtl',
    perMove: 1,
    perPage: 3,
    omitEnd: true,
    trimSpace: true,
    classes: {
        arrow: 'splide__arrow storySlider-arrow',
        prev: 'splide__arrow--prev storySlider-arrow-prev',
        next: 'splide__arrow--next storySlider-arrow-next',
    },
});
splide.mount();


		
