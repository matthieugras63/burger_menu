$(function() {
    if ($('button').hasClass("inactive")) {
        $('button').bind('mouseenter', translateToMiddle);
    }
    if ($('button').hasClass("inactive")) {
        $('button').bind('mouseleave', translateToOrigin);
    }
});

$(function() {
    $('#menu_open>div:first-child>div>ul li').mouseover(function() {
        $(this).css('transform', 'translateX(15px)').css('transition-duration', '500ms');
        $(this).siblings().css('opacity','0.4');
    });
    $('#menu_open>div:first-child>div>ul li').mouseout(function() {
        $(this).css('transform', 'translateX(0px)').css('transition-duration', '500ms');
        $(this).siblings().css('opacity','1');
    });
});



$(function() {
    $('#burger_menu button').click(function() {
        if ($('button').hasClass("active")) {
            crossToBars();
            textDisappear('menu_first_item');
            textDisappear('menu_second_item');
            textDisappear('menu_third_item');
            textDisappear('menu_fourth_item');
            textDisappear('madeBy')
            textDisappear('simplon')
            setTimeout(function() {
                $('#menu_open>div+div>div').hide();
            }, 220);
            setTimeout(function() {
                $('#menu_open>div:first-child>div, #menu_open>div:first-child span').hide();
            }, 120);
            $("hr").css('opacity', '0').css('transform', 'translateY(10px').css('transition-duration', '500ms');
            $('button').bind('mouseenter', translateToMiddle);
            $('button').bind('mouseleave', translateToOrigin);
        } else {
            createCross();
            setTimeout(function() {
                $('#menu_open>div+div>div').show();
            }, 300);
            setTimeout(function() {
                $('#menu_open>div:first-child>div, #menu_open>div:first-child span').show();
            }, 500);
            setTimeout(textAppear, 550, 'menu_first_item');
            setTimeout(function() {
                $('hr').css('opacity', '1').css('transform', 'translateY(-10px').css('transition-duration', '500ms');
            }, 600);
            setTimeout(textAppear, 650, 'menu_second_item');
            setTimeout(textAppear, 700, 'menu_third_item');
            setTimeout(textAppear, 750, 'menu_fourth_item');
            setTimeout(textAppear, 800, 'madeBy');
            setTimeout(textAppear, 800, 'simplon');
        };
    });
});



function translateToMiddle() {
    $('#burger_menu div:first-child').css('transform', 'translateY(7px)').css('transition-duration', '200ms');
    $('#burger_menu div:last-child').css('transform', 'translateY(-7px)').css('transition-duration', '200ms');
}

function translateToOrigin() {
    $('#burger_menu div:first-child').css('transform', 'translateY(0px)').css('transition-duration', '200ms');
    $('#burger_menu div:last-child').css('transform', 'translateY(0px)').css('transition-duration', '200ms');
}

function createCross() {
    $('#burger_menu div:first-child').width('100%').css('transform', 'rotate(45deg) translateY(10px)').css('transition-duration', '100ms').css('transform-origin', 'center').css('background-color', 'red');
    $('#burger_menu div:last-child').css('transform', 'rotate(-45deg) translateY(-10px)').css('transition-duration', '100ms').css('transform-origin', 'center').css('background-color', 'red');
    $('#burger_menu button').removeClass("inactive").addClass("active");
    $('#menu_open').css('transition-property', 'width').css('transition-duration', '500ms').width('100vw').css('transition-timing-function', 'ease-in');
    // $('#menu_open>div+div>div').show();
    $('button').css('transform', 'translateX(5px)').css('transition-duration', '200ms');
    $('button').unbind('mouseleave').unbind('mouseenter');
}

function crossToBars() {
    $('#burger_menu div:first-child').width('70%').css('transform', 'rotate(0deg) translateY(7px)').css('transition-duration', '200ms').css('transform-origin', 'center');
    $('#burger_menu div:last-child').css('transform', 'rotate(0deg) translateY(-7px)').css('transition-duration', '200ms').css('transform-origin', 'center');
    $('button').css('transform', 'translateX(0px)').css('transition-duration', '200ms');
    $('#menu_open').css('transition-property', 'width').css('transition-duration', '300ms').width('0px');
    // $('#menu_open>div+div>div').hide();
    setTimeout(function() {
        $('#burger_menu div:first-child, #burger_menu div:last-child').css('background-color', 'black');
    }, 450);
    $('#burger_menu button').removeClass("active").addClass("inactive");
}


function textAppear(name) {
    $('.' + name).css('opacity', '1').css('transform', 'translateY(-10px').css('transition-duration', '500ms');
}

function textDisappear(name) {
    $('.' + name).css('opacity', '0').css('transform', 'translateY(10px').css('transition-duration', '200ms');
}


// keycode escape: 27
