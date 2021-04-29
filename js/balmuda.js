$(document).ready(function(){

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


  var x = $("#bg_text")
  var y = x.children().outerWidth();

  setInterval(slide , 1);
  function slide(){
    $(".bg_text").animate({left : "-3324px"},13000,'linear',function(){
      $(this).append(  $(".bg_text img").eq(0) );
      $(this).css("left",0);
    });
  }


// NOTE: model moves with scrolling

  $(window).scroll(
      function(){
          //스크롤의 위치가 상단에서 450보다 크면
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






// NOTE: tech 3 section click - img switch













}); //end
