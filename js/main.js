window.addEventListener('DOMContentLoaded', function () {


    /* menu Click -> move */

    let scrollValue = 0;


    const sectionTop = [
        document.querySelector('#section02').getBoundingClientRect().top,
        document.querySelector('.page04').getBoundingClientRect().top,
        document.querySelector('#section10').getBoundingClientRect().top,
        document.querySelector('#section11').getBoundingClientRect().top,
        document.querySelector('#section12').getBoundingClientRect().top,
        document.querySelector('#section15').getBoundingClientRect().top,
    ]



    $('.main_menu > div').click(function () {


        let idx = $('.main_menu > div').index(this);


        $('.menu').removeClass('on');



        if(idx === 0) scrollValue = 1300
        if(idx === 1) scrollValue = sectionTop[1]
        if(idx === 2) scrollValue = sectionTop[2]
        if(idx === 3) scrollValue = sectionTop[3]
        if(idx === 4) scrollValue = sectionTop[4] +200
        if(idx === 5) scrollValue = sectionTop[5]



        container.scrollTo(0, scrollValue, 500, {easing: easing.easeInOutCirc});



    });





    function intro(){

        let tl = gsap.timeline();

        tl.to('.visual .frame01',5,{delay:1, opacity:1});
        tl.to('.visual .frame02',5,{delay:-5, opacity:1});
        tl.to('.visual .frame03',5,{delay:-4.1, opacity:1});
        tl.to('.visual .frame04',5,{delay:-4.4, opacity:1});
        tl.to('.visual .frame05',0.1,{delay:-5, opacity:1});
        tl.to('.visual .frame06',5,{delay:-4.4, opacity:1});
        tl.to('.visual .frame07',5,{delay:-4.7, opacity:1});

        tl.to('.visual .txt > div',3,{delay:-3, x:0, ease: Power3.easeInOut});

        tl.to('.visual .intro_txt',2.5,{delay:-2,opacity:1});
        tl.to('#intro',0.1,{delay: -1, background:'rgba(0,0,0,0)'});
        tl.to('#intro',1.5,{delay:-1, scale:0.3,x:-(innerWidth *0.447),y:-(innerHeight * 0.451)});
        tl.to('.screen',1.5,{delay: -1.5, background:'rgba(0,0,0,0)'});
        // tl.to('#intro',1,{delay:-0.6, background:'rgba(0,0,0,0)'});
        // tl.to('#intro',1.2,{delay:-0.2, scale:0.31,x:-(innerWidth *0.447),y:-(innerHeight * 0.451)});
        tl.to('#section01 .txt_container',1,{delay:-1, opacity:1});

    }


    intro();

    /* startpoint */

    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if ( scrollTop >= 0 && scrollTop <= 500){
            $('#intro').css('margin-top',`-${scrollTop}px`);
        }

    });

    gsap.to('.startPoint', {
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
            onUpdate: self => {
                // console.log("progress:", self.progress)
                // v = Math.floor(self.progress * 5);

                if( self.progress > 0.03){
                    $('.startPoint').addClass('on');


                }else{
                    $('.startPoint').removeClass('on');

                }

                // console.log(v)

            }
        }
    });



    // page 01


    gsap.to('.fix-this-1', {
        scrollTrigger: {
            trigger: ".trigger-this-1",
            start: "350 top",
            // end: '+=11800',
            end: () => "+=" + innerHeight * 11.5,
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('.Sec02_model', {
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
            onUpdate: self => {
                // console.log("progress:", self.progress)
                // v = Math.floor(self.progress * 5);

                if( self.progress > 0.55){
                    $('.Sec02_model').addClass('on');


                }else{
                    $('.Sec02_model').removeClass('on');

                }

                // console.log(v)

            }
        }
    });

    $('.pop01_discover').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('color','white')

        $('.pop01_discover').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('color','black')
        });

    });


 // page 02


    gsap.to('.fix-this-2', {
        scrollTrigger: {
            trigger: ".trigger-this-2",
            start: "top top",
            end: 'bottom bottom',
            // end: () => "+=" + innerHeight,
            pin: true,
            pinSpacing: false,
            scrub: true,
            onEnter: ()=>{
                TweenMax.set('#section02 > .pin-spacer',{
                    zIndex:2,
                })
            },
            onLeaveBack: ()=>{
                TweenMax.set('#section02 > .pin-spacer',{
                    zIndex:50,
                })
            }

        }
    });


    gsap.to('.page02_tech > div', {
        height: 828,
        scrollTrigger: {
            trigger: ".page02",
            start: "top -400",
            end: 'bottom bottom',
            scrub: true,
        }
    });

    $('.pop02_learnmore').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('color','white')

        $('.pop02_learnmore').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('color','black')
        });

    });

    /* tech img */

    let tech_img = gsap.timeline();
    ScrollTrigger.create({
        animation: tech_img,
        trigger: ".trigger-this-2",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        anticipatePin: 1
    });






// page 03

    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            end: 'bottom bottom',
            // end: () => "+=" + innerHeight,
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    $('.selbtn> div').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('filter','brightness(100)')

        $('.selbtn> div').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('filter','brightness(0)')
        });

    });

    /*  selBox */

    let selBox = gsap.timeline();
    ScrollTrigger.create({
        animation: selBox,
        trigger: ".page03",
        start: "top top",
        end: () => "+=" + 300,
        scrub: 1,
    });

    selBox.to(".selBox",{y:-100,opacity:1},0);

    $('.pop03_learnmore').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('color','white')

        $('.pop03_learnmore').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('color','black')
        });

    });


// page 04

    gsap.to('.fix-this-4', {
        scrollTrigger: {
            trigger: ".trigger-this-4",
            start: "25px top",
            end: '+=4800',
            // end: () => "+=" + innerHeight,
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('.Sec02_model', {
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
            onUpdate: self => {
                // console.log("progress:", self.progress)
                // v = Math.floor(self.progress * 5);

                if( self.progress > 0.52){
                    $('#section02').addClass('on');
                }else{
                    $('#section02').removeClass('on');
                }
                // console.log(v)

            }
        }
    });


    /* page05 detail images */

    let obj_1 = gsap.timeline();
    ScrollTrigger.create({
        animation: obj_1,
        trigger: ".page04",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });

    // obj_1.to(".page04", {backgroundColor: "#212225"},0)
    obj_1.to(".obj-1",{x:524,y:372,},0.1);
    obj_1.to(".obj-2",{x:972,y:424, },0.1);
    obj_1.to(".obj-3",{x:-676,y:185, },0.1);  /* x:-376,y:85 */
    obj_1.to(".obj-4",{x:-321,y:358, },0.1);  /* x:-121,y:158 */
    obj_1.to(".obj-5",{x:411,y:-162, },0.1);  /* x:111,y:-62 */
    obj_1.to(".obj-6",{x:774,y:-335, },0.1);  /* x:374,y:-135 */
    obj_1.to(".obj-7",{x:-875,y:-472, },0.1);  /* x:-375,y:-172 */
    obj_1.to(".obj-8",{x:-322,y:-262, },0.1);  /* x:-122,y:-62 */
    obj_1.to(".bg_text",{x:-2250,y:0 },0.3);


    /* parallax */

    // section06

    let parallax = gsap.timeline();
    ScrollTrigger.create({
        animation: parallax,
        trigger: "#section06",
        scrub: 1,
        start: "top 60%",
        end: "bottom bottom",
    });

    parallax.to(".Sec06_txt_container",{y:-80, opacity: 1},0);
    parallax.to(".awards",{y:-80, opacity: 1},0.2);


    // section08

    let parallax2 = gsap.timeline();
    ScrollTrigger.create({
        animation: parallax2,
        trigger: "#section08",
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    });

    parallax2.to(".Sec08_txt_container",{y:-100, opacity: 1},0);


    // section10

    let parallax10 = gsap.timeline();
    ScrollTrigger.create({
        animation: parallax10,
        trigger: "#section10",
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    });

    parallax10.to(".aboutus_img_container",{y:50},0);
    parallax10.to(".Sec10_txt_container",{y:-100},0);



    // section11
    $('.Sec11_btn').mouseenter(function (){
        $(this).css('background','white');
        $(this).children().css('filter','brightness(0)')

        $('.Sec11_btn').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('filter','brightness(100)')
        });

    });


    // section12

    $('.pop04_learnmore').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('color','white')

        $('.pop04_learnmore').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('color','black')
        });

    });

    $('.pop05_learnmore').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('color','white')

        $('.pop05_learnmore').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('color','black')
        });

    });


    $('.watchmovie_icon').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('filter','brightness(100)')

        $('.watchmovie_icon').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('filter','brightness(0)')
        });

    });

    // section13


    // section16

    let parallax16 = gsap.timeline();
    ScrollTrigger.create({
        animation: parallax16,
        trigger: "#section16",
        scrub: 1,
        start: "top 70%",
        end: "bottom bottom",
    });

    parallax16.to(".Sec16_title",{y:-50, opacity: 1},0);


    // section15

    let parallax15 = gsap.timeline();
    ScrollTrigger.create({
        animation: parallax15,
        trigger: "#section15",
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    });

    parallax15.to(".Recruit_img",{y:-100, opacity: 1},0);
    parallax15.to(".Sec15_txt_container",{y:-200, opacity: 1},0);


    $('.recruit_btn').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('color','white')

        $('.recruit_btn').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('color','black')
        });

    });

    /* swipe */


    var swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto',
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: false,
        speed: 1000,
        parallax: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        // watchSlidesVisibility: true,
        navigation: {
            nextEl: '.Sec11_btn_next',
            prevEl: '.Sec11_btn_prev',
        },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     draggable: true,
        // },
        on : {
            slideChangeTransitionStart : function (e) {


                $('.swiper-slide').removeClass('on');

            },
            slideChangeTransitionEnd : function (e) {

                // var currentSlide = $(e.);
                console.log(this.activeIndex);

                $('.swiper-slide-active').addClass('on');
            }
        }
    });



    /* Scene */

    let circleValue = 0;

    gsap.to('.fix-this-9', {
        scrollTrigger: {
            trigger: ".trigger-this-9",
            start: "-25 top",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onEnter: ()=>{
                console.log('enter');
            },
            onUpdate: self => {


                circleValue = Math.floor(self.progress * 3);

                // console.log(self.progress);

                if(self.getVelocity() < 0){  //up

                    $('.scene > div').eq(circleValue +1).removeClass('on');
                    $('.Sec09_txt_container> div').eq(circleValue +1).removeClass('on');


                }else{
                    $('.scene > div').eq(circleValue).addClass('on');
                    $('.Sec09_txt_container> div').eq(circleValue).addClass('on');


                }


            }

        }
    });

/*


    let circleValue = 0;
    gsap.to('.scene > div', {
        scrollTrigger: {
            trigger: ".trigger-this-9",
            start: "top top",
            end: () => "+=" + innerHeight * 6,
            scrub: 1,
            onUpdate: self => {


                circleValue = Math.floor(self.progress * 2);

                console.log(circleValue);


            }
        }
    });
*/


    /* POPUP */

    // popup0

    $(".main_menu_btn").click(function(){
        $(".menu").addClass("on");
    });
    $(".pop00 .close_btn").click(function(){
        $(".menu").removeClass("on");
    });

    // popup1

    $(".pop01_discover").click(function(){
        $(".pop01").addClass("on");
    });
    $(".close_btn").click(function(){
        $(".pop01").removeClass("on");
    });

    $('.popup01_btn> div').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('filter','brightness(100)')

        $('.popup01_btn> div').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('filter','brightness(0)')
        });

    });


    // popup2

    $(".pop02_learnmore").click(function(){
        $(".pop02").addClass("on");
    });
    $(".pop02 .close_btn").click(function(){
        $(".pop02").removeClass("on");
    });

    // popup3

    $(".pop03_learnmore").click(function(){
        $(".pop03").addClass("on");
    });
    $(".pop03 .close_btn").click(function(){
        $(".pop03").removeClass("on");
    });

    // popup4

    $(".pop04_learnmore").click(function(){
        $(".pop04").addClass("on");
    });
    $(".pop04 .close_btn").click(function(){
        $(".pop04").removeClass("on");
    });

    $('.pop04_btn> div').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('filter','brightness(100)')

        $('.pop04_btn> div').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('filter','brightness(0)')
        });

    });

    // popup5

    $(".pop05_learnmore").click(function(){
        $(".pop05").addClass("on");
    });
    $(".pop05 .close_btn").click(function(){
        $(".pop05").removeClass("on");
    });

    $('.pop05_btn> div').mouseenter(function (){
        $(this).css('background','black');
        $(this).children().css('filter','brightness(100)')

        $('.pop05_btn> div').mouseleave(function (){
            $(this).css('background','transparent');
            $(this).children().css('filter','brightness(0)')
        });

    });

    // mouse cursor

    var $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0,
        $flag =  $("#flag");



    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
    });

    var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 32);
        $yp += (($mouseY - $yp) / 32);
        $flag.css({left: ($xp-$flag.width()*0.5) + 'px', top: ($yp -$flag.height()*0.5) + 'px'});
    }, 1);




    $('.mouse_effect').mouseenter(function () {

        $flag.addClass('on');
    }).mouseleave(function () {
        $flag.removeClass('on');
    })

    /* page01 */

    $("#pop01_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.pop01_btn_left'), //prev
        nextArrow: $('.pop01_btn_right'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 0, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'linear', //css transition∑
        variableWidth: false,

    });

    /* page03 */

    $("#fan_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.page03_btn.left'), //prev
        nextArrow: $('.page03_btn.right'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 500, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'linear', //css transition∑
        variableWidth: false,

    });


    /* pop04 */

    $("#pop04_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.pop04_btn_left'), //prev
        nextArrow: $('.pop04_btn_right'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 0, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'linear', //css transition∑
        variableWidth: false,

    });

})


