// jQuery.noConflict()(function ($) { // this was missing for me

$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {
        // below code is click event

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
    // below code use to show all images while click the all button
    $('.project-area .button-group #btn1').trigger('click');

    // below code use to develop a carosal by linking magnificpopup paths in index.html
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}

      });
    //   Owl-carousel

    $('.site-main .about-area .owl-carousel').ready(function (){
        $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

// sticky navigation menu
let nav_offset_top = $('.header_place').height() + 50;

    function navbarFixed() {
        if ($('.header_place').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_place .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_place .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();








});
    // $(document).ready(function(){
    //     $(".owl-carousel").owlCarousel();
    //   });


});

// });