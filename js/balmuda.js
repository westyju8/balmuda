$(document).ready(function(){


// NOTE: scrolltop alert box
  let dft = $("#scrolltop p").text();
  let scrollH = $(window).scrollTop();
  $("#scrolltop p").text(scrollH);

// NOTE: menu click

  $("#menu_button").click(function(){
    $("#menu").width('790px');
    $("#main_page").addClass('blur');
  });
  $("#menu> button").click(function(){
    $("#menu").width('0');
    $("#main_page").removeClass('blur');
  });

// NOTE: bg text animation


  // var x = $("#bg_text")
  // var y = x.children().outerWidth();
  //
  // setInterval(slide1 , 1);
  // function slide1(){
  //   $(".bg_text").animate({left : "-3324px"},13000,'linear',function(){
  //     $(this).append(  $(".bg_text img").eq(0) );
  //     $(this).css("left",0);
  //   });
  // }

  setInterval(slide1 , 1);
  function slide1(){
    $("#bg_text").load();
    let aa = $("#bg_text").outerWidth();
    let bb = eval(aa + 100);
    console.log(bb);

    $(".bg_text").animate({left: - bb + "px"},13000,'linear',function(){
      $(this).append(  $(".bg_text img").eq(0) );
      $(this).css("left",0);
    });
  }

// NOTE: model moves with scrolling

  $(window).scroll(
      function(){
          //스크롤의 위치가 상단에서 1300보다 크면
          if($(window).scrollTop() > 1300){
          /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
              $('#model01').addClass("fix");
              //위의 if문에 대한 조건 만족시 fix라는 class를 부여함
          }
          else{
              $('#model01').removeClass("fix");
              //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함
          }
      }
  );
  $(window).scroll(
      function(){
          //스크롤의 위치가 상단에서 2400보다 크면
          if($(window).scrollTop() > 2400){
          /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
              $('#model01').addClass("absolute").removeClass("fix");
              //위의 if문에 대한 조건 만족시 fix라는 class를 부여함
          }
          else{
              $('#model01').removeClass("absolute");
              //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함
          }
      }
  );
  $(window).scroll(
      function(){
          //스크롤의 위치가 상단에서 2500보다 크면
          if($(window).scrollTop() > 2500){
          /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
              $('#model02').addClass("fix");
              //위의 if문에 대한 조건 만족시 fix라는 class를 부여함
          }
          else{
              $('#model02').removeClass("fix");
              //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함
          }
      }
  );
  $(window).scroll(
      function(){
          //스크롤의 위치가 상단에서 3700보다 크면
          if($(window).scrollTop() > 3700){
          /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
              $('#model02').addClass("absolute").removeClass("fix");
              //위의 if문에 대한 조건 만족시 fix라는 class를 부여함
          }
          else{
              $('#model02').removeClass("absolute");
              //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함
          }
      }
  );





// NOTE: tech 3 section click - img switch


// NOTE: detail img effect

$("#group1").addClass("scale");

// $(window).scroll(
//     function(){
//         //스크롤의 위치가 상단에서 3700보다 크면
//         if($(window).scrollTop() > 3700){
//         /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
//             $('#group1').width(200%);
//             //위의 if문에 대한 조건 만족시 fix라는 class를 부여함
//         }
//         else{
//             $('#model02').removeClass("absolute");
//             //위의 if문에 대한 조건 아닌경우 fix라는 class를 삭제함
//         }
//     }
// );

// NOTE: video autoplay

$(window).scroll(
  function autoplay() {
    if (  $(window).scrollTop() > 7700  ) {
      $("#video01").get(0).play();
    }
  }

)


// NOTE: footer bg_text


  setInterval(slide2 , 1);
  function slide2(){
    $("#bgText1").load();
    var xx = $("#bgText1").outerWidth();
    var yy = eval(xx + 100);

    $(".footer_bgtext").animate({left: - yy + "px"},13000,'linear',function(){
      $(this).append(  $(".footer_bgtext img").eq(0) );
      $(this).css("left",0);
    });
  }









}); //end
