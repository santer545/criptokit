$(function() {
    carousels('#js-reviews');
    carousels('#js-news');
    selectpicker();
    mobileMenuShow();

    $("#js-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

function mobileMenuShow() {
    $('.js-gamburger').on('click', function() {
        $(this).siblings('ul').toggleClass('active');
        $('.header-nav').toggleClass('active');
    });

    $('.js-settings').on('click', function() {
        $(this).siblings('ul').toggleClass('active');
        $('.settings').toggleClass('active');
    });

    $('.js-mail-box').on('click', function() {
        $(this).siblings('ul').toggleClass('active');
        $('.mail-box').toggleClass('active');
    });
}

function carousels(element) {
    var swiper = new Swiper(element, {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function selectpicker() {
    $('select').selectric({
        optionsItemBuilder: function(itemData, element, index) {
            return element.val().length ? '<img src="images/' + itemData.value + '.jpg"><span>' + itemData.text + '</span>' : itemData.text;
        }
    });

    // $('select').on('selectric-change', function(event, element, selectric) {
    //     console.log(selectric);
    //     console.log('change')
    // });

    $('.js-lang').selectric({
        optionsItemBuilder: function(itemData, element, index) {
            return element.val().length ? '<img src="images/' + itemData.value + '.jpg"><span>' + itemData.text + '</span>' : itemData.text;
        }
    });

    $('.selectric-items li').on('click', function() {
        if($(this).closest('.selectric-wrapper').find('.selectric img').length) {
            $(this).closest('.selectric-wrapper').find('.selectric img').remove();
        }
        
        var img = $(this).find('img');

        var container = $(this).closest('.selectric-wrapper').find('.label');
        img.clone().insertBefore(container);
    })

    // $('js-lang').selectric({
    //     optionsItemBuilder: function(itemData, element, index) {
    //         return element.val().length ? '<img src="' + element.val() + '.jpg">' : itemData.text;
    //     }
    // });
}



window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("js-to-top").style.display = "block";
    } else {
        document.getElementById("js-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}