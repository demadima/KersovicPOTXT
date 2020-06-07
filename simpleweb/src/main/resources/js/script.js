$(document).ready(function () {

    //Header fixed
    window.onscroll = function () {
        if ($(window).scrollTop() > 50) {
            $('body').addClass('collapse_header');
        } else {
            $('body').removeClass('collapse_header');
        }
    };

    //Humburger active / mobile menu open / close
    $('.header-mobile__menu ').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('header__nav--active');
        $('body').toggleClass('body-active');
    });

    //Modal search open / close
    // $('.header__search').on('click', function () {
    //     $('.modal-search__wrapper').addClass('modal-search__wrapper--active');
    //     setTimeout(function () {
    //         $('#search').focus();
    //     }, 300);
    // });

    // $('.modal-search__wrapper').on('click', function (e) {
    //     if (e.target.className === 'modal-search__wrapper modal-search__wrapper--active') {
    //         $('.modal-search__wrapper').removeClass('modal-search__wrapper--active');
    //     }
    // });

    // Banner Slider
    $('.banner__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.banner > .container'),
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });

    // Info slider
    $('.info__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        variableWidth: true,
        nextArrow: '<span class="info-slider__right icon-right-open-big"></span>',
        prevArrow: '<span class="info-slider__left icon-left-open-big"></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    variableWidth: true,
                    nextArrow: '<span class="info-slider__right icon-right-open-big"></span>',
                    prevArrow: '<span class="info-slider__left icon-left-open-big"></span>',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    variableWidth: true,
                    nextArrow: '<span class="info-slider__right icon-right-open-big"></span>',
                    prevArrow: '<span class="info-slider__left icon-left-open-big"></span>',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    centerMode: true,
                    variableWidth: true,
                    nextArrow: '<span class="info-slider__right icon-right-open-big"></span>',
                    prevArrow: '<span class="info-slider__left icon-left-open-big"></span>',
                }
            },
        ]
    });

    //add color for single pages
    // if ($('#single_color').length) {
    //     let color = $('#single_color').data('color');
    //     $('#single_form_id').css('color', color);
    // }

    //Page main load slider info
    $("#front_slider").removeAttr('style');
    $("#form__checkbox").removeAttr('style');

    // Popover for info and blog
    $('.share-item').popover({
        trigger: 'focus',
        container: 'body',
        template: '<div class="share__hover popover"><div class="arrow"></div><span class="popover__title">Jetzt teilen</span><ul class="popover__social"><li><a href="" class="icon-facebook"></a></li><li><a href="" class="icon-pinterest"></a></li><li><a href="" class="icon-whatsapp"></a></li><li><a href="" class="icon-mail" target="_blank"></a></li></ul></div>',
    });

    $('.share-item').on('shown.bs.popover', function () {
        $('.share__hover .icon-facebook').attr('href', $(this).attr('data-facebook'));
        $('.share__hover .icon-pinterest').attr('href', $(this).attr('data-pinterest'));
        $('.share__hover .icon-whatsapp').attr('href', $(this).attr('data-whatsapp'));
        $('.share__hover .icon-mail').attr('href', $(this).attr('data-mail'));
    });

    var Share = {
        facebook: function (purl) {
            var url = 'https://www.facebook.com/sharer/sharer.php?=';
            url += '&u=' + encodeURIComponent(purl);
            Share.popup(url);
        },
        instagram: function (purl, ptitle) {
            var url = ''; // https://twitter.com/intent/tweet?
            url += 'text=' + encodeURIComponent(ptitle);
            url += '&url=' + encodeURIComponent(purl);
            url += '&counturl=' + encodeURIComponent(purl);
            Share.popup(url);
        },
        pinterest: function (link) {
            var url = 'https://pinterest.com/pin/create/button/?url=http://win4win.zen.cheitgrou.com/win4win/product-card.php&media=&description=';
            url += '&url=' + encodeURIComponent(link);
            Share.popup(url);
        },
        whatsup: function (link) {
            var url = 'whatsapp://send?text=http://win4win.zen.cheitgroup.com/win4win/product-card.php';
            url += '&url=' + encodeURIComponent(link);
            Share.popup(url);
        },
        popup: function (url) {
            window.open(url, '', 'toolbar=0, status=0, width=626, height=436');
            event.preventDefault();
        },
    };

    // Footer change languages
    // $('.footer-copywrite__lang-toggle').on('click', function () {
    //     $('.footer-copywrite__lang-toggle').toggleClass('rotate');
    // });

    // $('.footer-copywrite__lang').on("click", function () {
    //     $('.footer-copywrite__img').attr("src", $(this).data('flag'));
    //     $('.footer-copywrite__lang-active').html($(this).data('lang'));
    //     $('.footer-copywrite__lang-toggle').removeClass('rotate');
    // });

    // Popup thanks
    // var screenWidth = $(window).width();

    // $('.modal-send__close').on('click', function () {
    //     $('.modal-send__wrapper').removeClass('modal-send__wrapper--active');
    //     $('body').removeClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '0');
    //     }
    // });

    // $('.modal-send__wrapper ').on('click', function (e) {
    //     if (e.target.className === 'modal-send__wrapper modal-send__wrapper--active') {
    //         $('.modal-send__wrapper ').removeClass('modal-send__wrapper--active');
    //         $('body').removeClass('body-active');
    //         if (screenWidth > 1199) {
    //             $('body').css('padding-right', '0');
    //         }
    //     }
    // });

    // Popup coupon
    // $('.js-coupon-open').on('click', function () {
    //     let id = $(this).data('id'),
    //         code = $('#' + id).data('code'),
    //         desc = $('#' + id).data('desc'),
    //         link = $('#' + id).data('link'),
    //         image = $('#' + id).data('image'),
    //         logo = $('#' + id).data('logo');

    //     $('.modal-coupon__wrapper').addClass('modal-coupon__wrapper--active');
    //     $('body').addClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '17px');
    //     }
    //     $("#coupon-id").val(code);
    //     $("#coupon_modal_desc").text(desc);
    //     $("#coupon_modal_link").attr("href", link);
    //     $("#modal_logo_href").attr("href", link);
    //     if (image) {
    //         $("#modal_image").attr("src", image);
    //     } else {
    //         $("#modal_image").attr("src", "");
    //     }
    //     if (logo) {
    //         $("#modal_logo_href").css("visibility", "visible");
    //         $("#modal_logo").attr("src", logo);
    //     } else {
    //         $("#modal_logo_href").css("visibility", "hidden");
    //     }
    // });

    // $('.modal-coupon__close').on('click', function () {
    //     $('.modal-coupon__wrapper').removeClass('modal-coupon__wrapper--active');
    //     $('body').removeClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '0');
    //     }
    // });

    // $('.modal-coupon__wrapper ').on('click', function (e) {
    //     if (e.target.className === 'modal-coupon__wrapper modal-coupon__wrapper--active') {
    //         setTimeout(function () {
    //             $('.modal-coupon__wrapper ').removeClass('modal-coupon__wrapper--active');
    //             $('body').removeClass('body-active');
    //             if (screenWidth > 1199) {
    //                 $('body').css('padding-right', '0');
    //             }
    //         }, 10000);
    //     }
    // });

    // $('.js-code__copied').on("click", function () {
    //     new ClipboardJS('.js-code__copied');

    //     $('.modal-copied__wrapper').addClass('modal-copied__wrapper--active');
    //     setTimeout(function () {
    //         $('.modal-copied__wrapper').removeClass('modal-copied__wrapper--active');
    //     }, 1500);
    // });

    // $('.modal-copied__wrapper').on("click", function (e) {
    //     if (e.target.className === 'modal-copied__wrapper modal-copied__wrapper--active') {
    //         $('.modal-copied__wrapper ').removeClass('modal-copied__wrapper--active');
    //     }
    // });

    // Page product
    // Product-form change dropdown
    // if ($('.product-form__select').length > 0) {
    //     $('.product-form__select').selectpicker();
    // }

    // Product-partners-slider
    $('.product-partners__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: '<span class="product-partners__right icon-right-open-big"></span>',
        prevArrow: '<span class="product-partners__left icon-left-open-big"></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    variableWidth: true,
                    nextArrow: '<span class="product-partners__right icon-right-open-big"></span>',
                    prevArrow: '<span class="product-partners__left icon-left-open-big"></span>',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    variableWidth: true,
                    nextArrow: '<span class="product-partners__right icon-right-open-big"></span>',
                    prevArrow: '<span class="product-partners__left icon-left-open-big"></span>',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    centerMode: true,
                    variableWidth: true,
                    nextArrow: '<span class="product-partners__right icon-right-open-big"></span>',
                    prevArrow: '<span class="product-partners__left icon-left-open-big"></span>',
                }
            },
        ]
    });

    // var sendForm = true;
    // $('[data-ajax="true"]').on('submit', function (e) {
    //     e.preventDefault();

    //     var dataMessage = $(this).serialize();
    //     var linkAction = $(this).attr('action');

    //     $('.modal-send__wrapper').addClass('modal-send__wrapper--active');
    //     $('body').addClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '17px');
    //     }

    //     $.ajax({
    //         url: '/wp-admin/admin-ajax.php',
    //         type: 'POST',
    //         data: dataMessage + '&action=sendThemeMail',
    //         success: function (data) {
    //             window.location = linkAction;
    //         }
    //     });
    // });

    // let current_page = 1;
    // $('.comments__more').on('click', function (e) {
    //     e.preventDefault();
    //     let count_pages = $(this).data('count_page');
    //     let post_id = $(this).data('post_id');
    //     let amount_comments = $(this).data('amount_comments');
    //     current_page = current_page + 1;
    //     if (count_pages == current_page) {
    //         $('.comments__more').css("display", "none");
    //     }
    //     $.ajax({
    //         url: '/wp-admin/admin-ajax.php',
    //         type: 'POST',
    //         data: 'action=getComments&pid=${post_id}&page=${current_page}&comments=${amount_comments}',
    //         success: function (data) {
    //             $('.comments-list').append(data);
    //         }
    //     });
    // });

    $('.banner__btn').on('click', function () {
        if ($(".banner__btn[href = '#']")) {
            $('html,body').animate({
                scrollTop: $(".scroll").offset().top
            }, 1000);
        }
    });

    // Page product-card button-share mobile
    // $('.product-mobile__share').on('click', function () {
    //     $('.product-mobile__share').toggleClass('icon-share');
    //     $('.product-mobile__share').toggleClass('icon-cancel');
    //     $('.product-mobile__share-wrapper').toggleClass('product-mobile__share-wrapper--active')
    // });

    //Modal end wettbewerbe open / close
    // if ($('.end-wettbewerbe').length > 0) {
    //     setTimeout(function () {
    //         $('.end-wettbewerbe__wrapper').addClass('active');
    //         $('body').addClass('body-active');
    //         if (screenWidth > 1199) {
    //             $('body').css('padding-right', '17px');
    //         }
    //     }, 3000)
    // }


    // $('.end-wettbewerbe__close').on('click', function () {
    //     $('.end-wettbewerbe__wrapper').removeClass('active');
    //     $('body').removeClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '0');
    //     }
    // });

    // $('.end-wettbewerbe__wrapper').on('click', function (e) {
    //     if (e.target.className === 'end-wettbewerbe__wrapper active') {
    //         $('.end-wettbewerbe__wrapper').removeClass('active');
    //         $('body').removeClass('body-active');
    //         if (screenWidth > 1199) {
    //             $('body').css('padding-right', '0');
    //         }
    //     }
    // });

    // Add height for img.gif in blog-item
    // if (screenWidth < 992) {
    //     $('.blog-item img[src$=".gif"]').css("height", "281.28px");
    // } else if (screenWidth < 768) {
    //     $('.blog-item img[src$=".gif"]').css("height", "294.97px");
    // } else {
    //     $('.blog-item img[src$=".gif"]').css("height", "342px");
    // }

    // Load image uploadPreview
    // $.uploadPreview({
    //     input_field: "#background",   // Default: .image-upload
    //     preview_box: ".background-image",  // Default: .image-preview
    //     label_field: "#label-background",    // Default: .image-label
    //     label_default: "Upload",   // Default: Choose File
    //     label_selected: "Change File",  // Default: Change File
    //     no_label: false                 // Default: false
    // });

    // $.uploadPreview({
    //     input_field: "#logo", // Default: .image-upload
    //     preview_box: ".logo-image",  // Default: .image-preview
    //     label_field: "#label-logo",    // Default: .image-label
    //     label_default: "Upload",   // Default: Choose File
    //     label_selected: "Change File",  // Default: Change File
    //     no_label: false                 // Default: false
    // });

    // $.uploadPreview({
    //     input_field: "#featured",// Default: .image-upload
    //     preview_box: ".featured-image",  // Default: .image-preview
    //     label_field: "#label-featured",    // Default: .image-label
    //     label_default: "Upload",   // Default: Choose File
    //     label_selected: "Change File",  // Default: Change File
    //     no_label: false                 // Default: false
    // });

    // $.uploadPreview({
    //     input_field: "#main-page",// Default: .image-upload
    //     preview_box: ".main-page-image",  // Default: .image-preview
    //     label_field: "#label-main-page",    // Default: .image-label
    //     label_default: "Upload",   // Default: Choose File
    //     label_selected: "Change File",  // Default: Change File
    //     no_label: false                 // Default: false
    // });

    // $.uploadPreview({
    //     input_field: "#brand-logo",// Default: .image-upload
    //     preview_box: ".brand-logo-image",  // Default: .image-preview
    //     label_field: "#label-brand-logo",    // Default: .image-label
    //     label_default: "Upload",   // Default: Choose File
    //     label_selected: "Change File",  // Default: Change File
    //     no_label: false                 // Default: false
    // });

    // Form for coupon show / hide
    // $('.partner-form-hide').slideUp();

    // $('.partner-form__checkbox input').on('click', function () {
    //     $('.partner-form-hide').toggleClass('show');

    //     if ($('.partner-form-hide').hasClass('show')) {
    //         $('.partner-form-hide').slideDown();
    //     } else {
    //         $('.partner-form-hide').slideUp();
    //     }
    // });

    // $('.partner-form__info').on('click', function () {
    //     let partner_id = $(this).attr('id');
    //     var content = $('#' + partner_id + '-div').clone();

    //     $('.partner-modal-info__content').html(content.addClass('show'));

    //     $('.partner-modal-wrapper').addClass('active');
    //     $('body').addClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '17px');
    //     }
    // });

    // $('.partner-modal-close').on('click', function () {
    //     $('.partner-modal-wrapper').removeClass('active');
    //     $('body').removeClass('body-active');
    //     if (screenWidth > 1199) {
    //         $('body').css('padding-right', '0');
    //     }
    // });

    // $('.partner-modal-wrapper').on('click', function (e) {
    //     if (e.target.className === 'partner-modal-wrapper active') {
    //         $('.partner-modal-wrapper').removeClass('active');
    //         $('body').removeClass('body-active');
    //         if (screenWidth > 1199) {
    //             $('body').css('padding-right', '0');
    //         }
    //     }
    // });

    /*
    window.onSubmit = onSubmit;

    function onSubmit(token) {
        let form = document.getElementById("form-inv");
        if($('.product-form__option:selected').val() == '') {
            let select = $('.product-form__select .dropdown-toggle');
            select.css('background-color', '#ff7f7f');
            select.css('border', '1px double #ff3232');
        } else {
            let isValidForm = form.checkValidity();
            console.log(isValidForm);
            if (isValidForm) {
                form.submit();
            }
        }

        return false;
    }*/

    // var thForm = false;
    // var thFormBtn = false;
    // if($('[data-validate="true"]').length > 0){
    //
    //     thForm = $('[data-validate="true"]');
    //     thFormBtn = $('[data-validate="true"] button[type="submit"]')[0];
    //
    //     onload();
    //     window.onSubmit = onSubmit;
    //
    // }
    //
    // function validate(e) {
    //     if(!thFormBtn) return;
    //
    //     e.preventDefault();
    //     if (thForm.valid()) {
    //         $(thFormBtn).attr("disabled", true);
    //         grecaptcha.execute();
    //     } else {
    //         $(thFormBtn).attr("disabled", false);
    //     }
    // }
    // function onload() {
    //     if(!thFormBtn) return;
    //     thFormBtn.onclick = validate;
    // }
    // function onSubmit() {
    //     if(!thFormBtn) return;
    //     thForm.submit();
    // }
});

// let clicked = false;

// function ClickLogin() {
//     clicked = true;
// }

// function onSignIn(googleUser) {
//     $('[id^=not_signed_in]').text("Sign in");
//     $('[id^=connected]').text("Sign in");

//     if (clicked) {
//         let profile = googleUser.getBasicProfile();
//         // $("#db_gender value").attr("value", profile.getGivenName());
//         let user_id = profile.getId();
//         console.log(profile.getId());
//         $("#db_first_name").attr("value", profile.getGivenName());
//         $("#db_surname").attr("value", profile.getFamilyName());
//         $("#db_email").attr("value", profile.getEmail());
//     }
// }