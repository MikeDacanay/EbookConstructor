/**
 * Created by ekerrigan on 9/21/16.
 * Updated by Code Rodeo on 7/16/16.
*/

var context='large';
var $window = $(window);
var isTouchDevice = 'ontouchstart' in document.documentElement;
var chapter0=2;
var chapter1=3;
var chapter2=8;
var chapter3=11;
var chapter4=25;
var chapter5=32;
var sub1=13;
var sub2=19;
var sub3=22;
var sub4=26;
var sub5=27;
var sub6=28;
var sub7=29;
var sub8=30;
// run this right away to set context
if ( $window.width() <= 1024) {
    context = 'medium';
    var chapter2=4;
    var chapter3=5;
    var chapter4=6;
    var chapter5=7;

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

var toggle_icon = false

function slider_l_toggle(slide){
    $('#slide-l-'+ slide).toggleClass('hoverish_pop-l');
    // $('#slide-l-'+ slide).css('')    
}

function slide_toggle(slide){
    $('#slide'+slide).toggleClass('slide_trig'); 
    $('.footer').toggle();
}

function hov_in(x){
    $("#hov-desc" + x).addClass('hov-trig');
}

function hov_out(y){
    $("#hov-desc" + y).removeClass('hov-trig');    
}

function pop(x){
    if(x===2){
        $('#pop'+x).toggleClass('show1');
       $('.footer').toggle();        
    }else{
        $('#pop'+x).toggleClass('show');
    }
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
            toggle_icon = false;
        }
    });



    if ($('body').width() < 1025 ) {
        var st = $(this).scrollTop();
        var lastScrollTop = 0;
        var delta = 5;
        var didScroll;
        var navbarHeight=$('.footer-phone').outerHeight();
        $( window ).on( "swipe", function( event ) {
            $('.page').animate({ scrollTop: 0 }, 'fast');
            $(".footer-phone").removeClass('up');
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
            } else {
                // Scroll Up
                if(st <150) {
                    $(".footer-phone").removeClass('up');
                }
            }

            lastScrollTop = st;

        });

        $('body').css('height', window.innerHeight);
        $('.book-slider').slick('unslick');

        $("#mobile-page-1").detach().appendTo('#p4 .container');
        $("#mobile-page-2").detach().appendTo('#p4 .container');
        $("#mobile-page-3").detach().appendTo('#p4 .container');
        $("#mobile-page-4").detach().appendTo('#p4 .container');

        $("#mobile-page-5").detach().appendTo('#p9 .container');
        $("#mobile-page-6").detach().appendTo('#p9 .container');

        $("#mobile-page-7").detach().appendTo('#p12 .container');
        $("#mobile-page-8").detach().appendTo('#p12 .container');
        $("#mobile-page-9").detach().appendTo('#p12 .container');
        $("#mobile-page-10").detach().appendTo('#p12 .container');
        $("#mobile-page-11").detach().appendTo('#p12 .container');
        $("#mobile-page-12").detach().appendTo('#p12 .container');
        $("#mobile-page-13").detach().appendTo('#p12 .container');
        $("#mobile-page-14").detach().appendTo('#p12 .container');        
        $("#mobile-page-15").detach().appendTo('#p12 .container');
        $("#mobile-page-16").detach().appendTo('#p12 .container');
        $("#mobile-page-17").detach().appendTo('#p12 .container');
        $("#mobile-page-18").detach().appendTo('#p12 .container');
        $("#mobile-page-19").detach().appendTo('#p12 .container');

        $("#mobile-page-20").detach().appendTo('#p26 .container');
        $("#mobile-page-21").detach().appendTo('#p26 .container');
        $("#mobile-page-22").detach().appendTo('#p26 .container');        
        $("#mobile-page-23").detach().appendTo('#p26 .container');
        $("#mobile-page-24").detach().appendTo('#p26 .container');
        $("#mobile-page-25").detach().appendTo('#p26 .container');

        $("#mobile-page-26").detach().appendTo('#p33 .container');

        $("#p5").remove();
        $("#p6").remove();
        $("#p7").remove();
        $("#p8").remove();

        $("#p10").remove();
        $("#p11").remove();        

        $("#p13").remove();
        $("#p14").remove();
        $("#p15").remove();     
        $("#p16").remove();
        $("#p17").remove();
        $("#p18").remove();
        $("#p19").remove();
        $("#p20").remove();
        $("#p21").remove();
        $("#p22").remove();
        $("#p23").remove();
        $("#p24").remove();
        $("#p25").remove();

        $("#p27").remove();
        $("#p28").remove();
        $("#p29").remove();
        $("#p30").remove();
        $("#p31").remove();
        $("#p32").remove();                                

        $("#p34").remove();









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
            var fix1 = $('.TOC-left').height() + 75 + $('.TOC-right').height();

            $('.tab-container-fix2').css('height',fix1);

            $( window ).load(function() {       
                var fix2 = $('#wrap_p1').height() + 73;
                var fix3 = $('#wrap_p2').height() + 120;
                var fix4 = $('#wrap_p3').height() + 85;

                $('#p4 .wrap-introchap').css('height',fix2);
                $('#p9 .wrap-introchap').css('height',fix3);
                $('#p12 .wrap-introchap').css('height',fix4);

                for(var i = 1; i < 35; i++){
                    $('#arrow' + i).css('margin-bottom', $('#content' + i).height() - 16)
                }

                for(var j = 1; j < 4; j++){
                    $('.number' + j).css('margin-bottom', $('#num_cont' + j).height() - 22)
                }

                for(var k = 1; k < 4; k++){
                    $('.div-anaytics-' + k).css('height', $('#auto-content' + k).height() + 55)
                }
            });
        }

    }



    $('.scrollbar-inner').scrollbar();

    $('h1, h2, h3, h4, h5, h6, li, p, .quote, .cover-title, .widow').widowFix();
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
var previousSlide;

$('.book-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {

    $('html, body').animate({ scrollTop: 0}, 200);
    var lastSlide = $('section.slick-slide:not(.slick-cloned)').length - 1;

	//set URL bar
    if(flag==false){
    	flag=true;
    }else{
        window.location.hash = '/page/' + currentSlide;
    }

    $('.nav-bar').addClass('flex-show');
    // $('.nav-right').show();
    $('.footer').fadeIn();

	//controls nav display
    // switch(currentSlide) {
    //     case 0:
    //         $('.footer').hide();
    //         $('.footer-phone').hide();
    //         $('.nav-bar').hide();
    //         break;
    //     case lastSlide:
            // $('.nav-bar').hide();
            // $('.footer').hide();
            // $('.footer-phone').hide();
    //         break;
    //     default:

    // }

	//arrow display
	$('.slick-arrow').show();
    if (currentSlide === 0 ) { 
        $('.slick-prev.slick-arrow').hide();
        $('.nav-bar').removeClass('flex-show');
    }  
    if (currentSlide === lastSlide ) { 
        $('.slick-next.slick-arrow').hide();
        $('.nav-bar').removeClass('flex-show');
    }  
     
    //display footer text & visibility

    var footerText = [
    	[ [0] , ""],
    	[ [1] , "Table of Contents"],
    	[ [2] , "Welcome and Introduction"],
    	[ [3,4,5,6,7] , "Chapter 1: Vision and Strategy"],
    	[ [8,9,10] , "Chapter 2: Customer Success"],
        [ [11,12,13,14,15,16,17,18,19,20,21,22,23,24] , "Chapter 3: Innovation Plans"],
        [ [25,26,27,28,29,30,31] , "Chapter 4: Plotting Your Journey to the Cloud"],
        [ [32] , "Chapter 5: Engaging with Oracle"],
    ];


    var footer = $('.footer');
    var slideNum=('0' + currentSlide).slice(-2);
    var pageNum =(slideNum/1)+1;
    $('#footNum').text(pageNum);


    if(currentSlide !== previousSlide){
        $( ".chap-intro-trig" ).removeClass( "chap-intro-trig" );

        for(var i=0; i < 5; i++){
            $( ".trig"+i ).removeClass( "trig"+i);   
            $( ".trig_y"+i ).removeClass( "trig_y"+i );     
        }

        $('.footer-chap-title').removeClass('txt-blue-dk');
        $( ".show" ).removeClass( "show" );
        $( ".show1" ).removeClass( "show1" );
        previousSlide = currentSlide;
    }

if(context=='large'){
        $.each(footerText, function( i, arr2 ){
            $.each( arr2[0], function( i, v ){
                if(currentSlide == v ) {                    
                    $('.footer-chap-title').text(arr2[1]);
                }
            });
        });    

    }


    if(currentSlide === lastSlide || currentSlide < 2){
        $('.footer').hide();
        $('.footer-phone').hide();           
    }    

    if(context==='medium' || context==='small'){
        // $('.nav-right').show();
        if(currentSlide === lastSlide){
            // $('.nav-bar').show();
            $('#next-chap').hide();   
        }else{
            // $('.nav-bar').show();
            $('#next-chap').show();
        }         
        if(currentSlide === 0){
            $('.nav-right').hide();
            $('.footer-phone').hide();   
            $('.nav-bar').removeClass('nav-color');
        }else{
            $('.footer-phone').show();
            $('.nav-right').show();
            $('.nav-bar').addClass('nav-color');
        }         
    }

    });

//mobile page height fix for ios/chrome/ff madness
$(window).on('resize orientationchange', function() {
    var curr_context;
    if ( $window.width() <= 1024) {
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

