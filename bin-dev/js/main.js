/**
 * Created by ekerrigan on 9/21/16.
 * Updated by Rafael Gomes on 05/05/2020.
*/

var context='large';
var $window = $(window);
var isTouchDevice = 'ontouchstart' in document.documentElement;
var overview=2;
var chapter1=4;
var chapter2=6;
var chapter3=8;
var chapter4=11;
var chapter5=12;
var summary=13;


// run this right away to set context
if ( $window.width() <= 1053) {
    context = 'medium';
    var overview=2;
    var chapter1=3;
    var chapter2=4;
    var chapter3=5;
    var chapter4=6;
    var chapter5=7;
    var summary=8;

    if ($window.width() <= 767) {
        context = 'small';
    }
}

// var isMac = navigator.platform.toUpperCase().indexOf('MACINTEL')>=0;

// if(isMac){
//     $('body').addClass('mac')
// }

//fix the textarea layout
[].forEach.call(document.querySelectorAll('textarea'), function($pre) {
    var lines = $pre.textContent.split('\n');
    var matches;
    var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
    if (!!indentation) {
        lines = lines.map(function(line) {
            return line.replace(indentation, '');
        });
        return $pre.textContent = lines.join('\n').trim();
    }
});

var toggle_icon = false;

function slide_toggle(x){
    $('#slide_pg'+ x).toggleClass('hoverish_div');    
}

$(document).ready(function() {
    var slider = $('.book-slider').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    speed: 300,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    accessibility:false,
                    appendArrows: $(".footer-phone")
                }
            }
        ]
    });
    
    $('.icon-wrap').click(function(){
        $('.icon-wrap').toggleClass('hoverish');
        if(toggle_icon === false){
            toggle_icon = true;
        }else{
            toggle_icon = false;
        }
    });

    $('.page, .nav-left, .footer, .slick-next, .slick-prev').click(function(){
        if(toggle_icon === true){
            $('.icon-wrap').toggleClass('hoverish');
            $('.footer-phone').removeClass('up'); 
            $('.footer__badge').removeClass('up'); 
            toggle_icon = false;
        }
    });

    if($window.width() >=1054){
        $('h1, h2, h3, h4, h5, h6, li, p, .quote, .cover-title, .txt-19').widowFix();
    }

    if ($('body').width() < 1054 ) {
        var st = $(this).scrollTop();
        var lastScrollTop = 0;
        var delta = 5;
        var didScroll;
        var navbarHeight=$('.footer-phone').outerHeight();
        $( window ).on( "swipe", function( event ) {
            $('.page').animate({ scrollTop: 0 }, 'fast');
            $(".footer-phone").removeClass('up');
            $(".footer__badge").removeClass('up');
        } );

        setInterval(function() {
            if (didScroll) {
                didScroll = false;
            }
        }, 250);

        $('.page').scroll(function() {
            didScroll = true;
            var st = $(this).scrollTop();
            console.log('st: ' + st)

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $(".footer-phone").addClass('up');
                $(".footer__badge").addClass('up');
            } else {
                // Scroll Up
                if(st <150) {
                    $(".footer-phone").removeClass('up');
                    $(".footer__badge").removeClass('up');
                }
            }

            lastScrollTop = st;

        });

        $('body').css('height', window.innerHeight);
        // $('.main_container').css('height', window.innerHeight);
        $('.book-slider').slick('unslick');

        // Move footnotes at bottom of page  
        for(let i=1; i<12; i++){
            $(".footnote__"+i).detach().appendTo('.footnote-container__t'+i);
        }

        // Replace superscripts on footnotes
        for(let i=2; i<5; i++){
            $(".sup__change-1--"+i).text(i);
        }
        for(let i=2; i<5; i++){
            $(".sup__change-2--"+i).text(i);
        }
        $(".sup__change-3--1").text(5);
        $(".sup__change-3--2").text(6);

        // REARRANGING PAGES 
            // Stacking Chapter 3 together

        $(".page--4 .content-holder").detach().appendTo('.page--3 .content-holder');
        $(".page--6 .content-holder").detach().appendTo('.page--5 .content-holder');
        $(".page--8 .content-holder").detach().appendTo('.page--7 .content-holder');
        $(".page--11 .content-holder").detach().appendTo('.page--10 .content-holder');
        $(".page--10 .content-holder").detach().appendTo('.page--9 .content-holder');
        // $(".page--12 .content-holder").detach().appendTo('.page--11 .content-holder');
        // $(".page--9 .content-holder").detach().appendTo('.page--8 .content-holder');
        // $(".page--8 .content-holder").detach().appendTo('.page--7 .content-holder');
        // $(".page--7 .content-holder").detach().appendTo('.page--6 .content-holder');

        $(".page--4").remove();
        $(".page--6").remove();
        $(".page--8").remove();
        $(".page--10").remove();
        $(".page--11").remove();
        // $(".page--12").remove();
        // $(".page--13").remove();
        // $(".page--14").remove();
        // $(".page--15").remove();
        
        // Stacking Chapter 5 together
        // $(".page--18 .content-holder").detach().appendTo('.page--17 .content-holder');
        // $(".page--18").remove();
        
        // CHANGING PAGE IDENTATION IN THE NAV-BAR AND MENU
        $('.menu-dd__item--pag--2').text("page 04");
        $('.menu-dd__item--pag--3').text("page 05");
        $('.menu-dd__item--pag--4').text("page 06");
        $('.menu-dd__item--pag--5').text("page 07");
        $('.menu-dd__item--pag--6').text("page 08");
        $('.menu-dd__item--pag--7').text("page 09");
        $('.toc__page--1').html("page&nbsp;04");
        $('.toc__page--2').html("page&nbsp;05");
        $('.toc__page--3').html("page&nbsp;06");
        $('.toc__page--4').html("page&nbsp;07");
        $('.toc__page--5').html("page&nbsp;08");
        $('.toc__page--6').html("page&nbsp;09");


        $('.book-slider').slick({
            infinite: false,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        speed: 300,
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        mobileFirst: true,
                        accessibility:false,
                        infinite:false,
                        swipeToSlide:true
                    }
                }
            ]
        });


        if($('body').width() <768) {

            for(let i=1; i<12; i++){
                $(".footnote__"+i).detach().appendTo('.footnote-container__'+i);
            }
        }

    }



    $('.scrollbar-inner').scrollbar();

    $('.rewidow').each(function(){
        $(this).html($(this).html().replace(/&nbsp;/gi,' '));
    });      
    var hash = window.location.hash.split('/');
    var hashVal = hash[2];
    $('.book-slider').slick('slickGoTo', hashVal);

	    $('#preloader').fadeOut('fast');
        if(window.location.hash) {
            var hash = window.location.hash.split('/');
            var hashVal = hash[2];
            $('.book-slider').slick('slickGoTo', hashVal);
            // hash found
        } else {
            // No hash found
            $('.book-slider').slick('slickGoTo', 0);
        }


    $('.toc h1').find('a').on('click', function(e){
        e.preventDefault();
        var $slide = $(this).data('slide');
        $('.book-slider').slick('slickGoTo', $slide);
    }); 
    
    //stop video when closing     
    $('.modal__close').on('click',function(){		
    	var iframe = $(this).next().find('iframe');
    	iframe.attr('src', iframe.attr('src'));
    });

    
   $('.slick-arrow').on('click',function(){
      var curSlide = $('.slick-current').prev();
      if($(this).hasClass('slick-prev')) {
          $carousel.slick('slickPrev');
          $('.page').animate({ scrollTop: 0 }, 'fast');
      }
       else{
          $carousel.slick('slickNext');
          $('.page').animate({ scrollTop: 0 }, 'fast');
      }
      curSlide.find('.modal-state:checked').each(function(){
	      $('.modal__close[for="' + $(this).attr('id') + '"]').trigger('click');
       });
    });


});


$('.to-top').on('click', function(e){
    $('.page').animate({ scrollTop: 0 }, 'fast');
    e.preventDefault();

});


//fix keyboard controls
var $carousel = $('.book-slider');
$(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
        e.preventDefault();
    }
    if(e.keyCode == 39) {

        $carousel.slick('slickNext');
        e.preventDefault();
    }
});

var flag=false;

$('.book-slider').on('beforeChange', function(event, slick, currentSlide, nextslide) {
    $('.moves').removeClass('animate');


    if ($window.width() >= 1054) {
        $('.subtitle__header').hide();
        $('.subtitle__sub').hide();
        $('.subtitle__container').hide();
        $('.graph__bars > *').removeClass('animate');
        $('.timeline__item').removeClass('animate');
        $('.btn--1').removeClass('animate');
        $('.footer').removeClass('addWhite');
        $('#footNum').removeClass('addWhite');
        setTimeout(() => {    
            $('.subtitle__header').show();    
            $('.subtitle__sub').show();    
        }, 100);
        setTimeout(() => {    
            $('.subtitle__container').show();    
        }, 400);
    };
})


$('.book-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {


    $('html, body').animate({ scrollTop: 0}, 200);
    var lastSlide = $('section.slick-slide:not(.slick-cloned)').length - 1;

	//set URL bar
    if(flag==false){
    	flag=true;
    }else{
        window.location.hash = '/page/' + currentSlide;
    }
    $('.nav-bar').addClass('nav-flex');
    $('.footer').fadeIn();

    // CHANGING COLOR OF THE FOOTER

    // $('.footer').removeClass('addWhite');
    // $('#footNum').removeClass('addWhite');
    // $('.hamburger_icon').removeClass('iconWhite');
    
    // ANIMATIONS 
    // ---------------------------------------------------------------
        // FOR DESKTOP

    if ($window.width() >= 1054) {
        switch(currentSlide) {
            case 1:
                $('.footer').addClass('addWhite');
                $('.hamburger_icon').addClass('iconWhite');
            break;
            case 2:
                $('.footer').removeClass('addWhite');
                $('#footNum').removeClass('addWhite');
                $('.graph__bars > *').addClass('animate');
            break;
            case 3:
                $('.timeline__item').addClass('animate');
            break;
            case 5:
                $('.footer').addClass('addWhite');
                $('.hamburger_icon').addClass('iconWhite');
            break;
            case 7:
                $('.graph__bars > *').addClass('animate');
            break;
            case 9:
                $('#footNum').addClass('addWhite');
                $('.hamburger_icon').addClass('iconWhite');
                $('.icon__container').addClass('animate');
            break;
            case 10:
                $('.footer').addClass('addWhite');
                $('.hamburger_icon').addClass('iconWhite');
            break;
            case 13:
                $('#footNum').addClass('addWhite');
                $('.hamburger_icon').addClass('iconWhite');
                $('.btn--1').addClass('animate');
            break;
            default:
                $('.footer').removeClass('addWhite');
                $('#footNum').removeClass('addWhite');
                $('.hamburger_icon').removeClass('iconWhite');            
                $('.icon__container').removeClass('animate');
                $('.graph__bars > *').removeClass('animate');
                $('.timeline__item').removeClass('animate');
                $('.btn--1').removeClass('animate');
        }   
    }

        // FOR TABLET AND BELOW

    if ($window.width() < 1054) {
        switch(currentSlide){
            case 0:
                $('.sidebar-track').hide()
                break;
            case 1:
                $('.nav-bar').addClass('backBlue');
                $('.hamburger_icon').addClass('iconWhite');
                $('.sidebar-track').attr('src', './assets/backgrounds/Tablet/bg-tablet-strip-blue.png')
                $('.sidebar-track').show()
                break;
            case 2:
            default:
                $('.nav-bar').removeClass('backBlue');
                $('.hamburger_icon').removeClass('iconWhite');            
                $('.sidebar-track').attr('src', './assets/backgrounds/Tablet/bg-tablet-strip.png')
                $('.sidebar-track').show()
        }
    }





    if(currentSlide === 0 ) {
        $('.nav-bar').hide();
    } else {
        $('.nav-bar').show();
    }
	//controls nav display
    switch(currentSlide) {
        case 0:
            $('.footer').hide();
            // $('.footer-phone').hide();
            break;
        case lastSlide:
            $('.nav-bar').hide();
            $('.footer').hide();
            $('.footer-phone').hide();
            $('.sidebar-track').hide()
            break;
        default:
    }

	//arrow display
	$('.slick-arrow').show();
    
    if (currentSlide === 0 ) {
     $('.slick-prev.slick-arrow').hide();
     $('.slick-next.slick-arrow').hide();
     if($('body').width() < 1054){
         $('.footer-phone').hide();   
         $('.footer__badge').hide();   
         $('.nav-bar').hide();
        }     
    }else{
        if($('body').width() < 1054){
            $('.footer-phone').show();
            $('.footer__badge').show();
            $('.slick-prev.slick-arrow').hide();
            $('.slick-next.slick-arrow').hide();
        }                
    };      

    if (currentSlide === lastSlide ) { $('.slick-next.slick-arrow').hide(); }  
     
    //display footer text & visibility

    var footerText = [
        [ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] , "Your complete guide to modern ERP"],
    ];


    var footer = $('.footer');
    var slideNum=('0' + currentSlide).slice(-2);
    var pageNum =(slideNum/1)+1;
    $('#footNum').text(pageNum);


    if(context=='large'){
        $.each(footerText, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {
                    $('.footer-chap-title').html(arr2[1]);
                }
            });
        });
    }

});

//mobile page height fix for ios/chrome/ff madness
$(window).on('resize orientationchange', function() {
    var curr_context;
    if ( $window.width() <= 1053) {
        curr_context = 'medium';
    }
    else{
        curr_context = 'large';
    }

    if(curr_context != context){
        location.reload();
    }
    if (isTouchDevice == true) {
        setTimeout(function(){
            var fix = window.innerHeight;
            $('body').css('height', fix);
            $(".footer-phone").removeClass('up');
            $(".footer__badge").removeClass('up');
        },500)
    }
});

//add the ScrollTo animation
jQuery.fn.extend(
    {
        scrollTo : function(speed, easing)
        {
            return this.each(function()
            {
                var targetOffset = $(this).offset().top - 68;
                $('.page').animate({scrollTop: targetOffset}, speed, easing);
            });
        }
    });


function openPop1(){
    var cwidth=$('#pop1').width;
    var cheight=$('#pop1').height;
    $("#popupContainer").css({'display':'block','width':cwidth+'px','height':cheight+'px'});
    $('#pop1').bPopup({
            follow: [true, true],
            position: ['auto', 'auto'],
            transition: 'zoomIn',
            content:'image',
            modalclose:'true',
            appendTo:'slick-active',
        modalColor:'#003b4d',
        opacity:'0.90',
            closeClass:'b-close'

        },
        function(){
            $('.popup-slider').slick({
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:false,
                prevArrow: '<span class="pop-slider-left"></span>',
                nextArrow: '<span class="pop-slider-right"></span>',

            });

        })
}

function openPop2(){
    var cwidth=$('#pop2').width;
    var cheight=$('#pop2').height;
    $("#popupContainer").css({'display':'block','width':cwidth+'px','height':cheight+'px'});
    $('#pop2').bPopup({
            follow: [true, true],
            position: ['auto', 'auto'],
            transition: 'zoomIn',
            content:'image',
            modalclose:'true',
            appendTo:'html',

        },
        function(){
            $('.popup-slider-2').slick({
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots:true,
                appendArrows: '.popupContainer',
                prevArrow: '<span class="icon-chevron-left"></span>',
                nextArrow: '<span class="icon-chevron-right"></span>'
            });

        })
}

/**event listeners**/

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.book-slider').slick('slickGoTo', slideno - 1);
 });


$( '#basic-modal .basic' ).on( 'click', function( event ) {
  $( '#basic-modal-content' ).closest( "li" ).modal();
  return false;
});


// Function for increasing percentage

function animateValue(id, end = null, start = 0, duration = 1000) {
        
    // assumes integer values from start and end
    
    var obj = document.getElementById(id);

    // save starting text for later (and as a fallback text if JS not running and/or google)
    var textStarting = obj.innerHTML;
    console.log(textStarting);

    // remove non-numeric from starting text if not specified
    end = end || parseInt(textStarting.replace(/\D/g, ""))

    var range = end - start;

    // no timer shorter than 50ms
    // var minTimer = 1;
    
    // calc step time to show all intermediate values
    var stepTime = Math.abs(Math.floor(duration / range));

    // never go below minTimer
    // stepTime = Math.max(stepTime, minTimer);

    // get current time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    console.log(startTime);
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0)
        var value = Math.round(end - (remaining * range));
        // replace numeric digits only
        obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
        if (value === end) {
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
    run();
}

