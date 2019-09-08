$(function(){
  if($('button').hasClass("inactive")){
    $('button').bind('mouseenter',function(){
      $('#burger_menu div:first-child').css('transform', 'translateY(7px)').css('transition-duration','100ms');
      $('#burger_menu div:last-child').css('transform', 'translateY(-7px)').css('transition-duration','100ms');
    });
  }
  if($('button').hasClass("inactive")){
    $('button').bind('mouseleave',function(){
      $('#burger_menu div:first-child').css('transform', 'translateY(0px)').css('transition-duration','100ms');
      $('#burger_menu div:last-child').css('transform', 'translateY(0px)').css('transition-duration','100ms');
    });
  }
});



$(function(){
  $('#burger_menu button').click(function(){
    if ($('button').hasClass("active")){
      $('#burger_menu div:first-child').width('70%').css('transform', 'rotate(0deg) translateY(7px)').css('transition-duration','100ms').css('transform-origin','center').css('background-color','black');
      $('#burger_menu div:last-child').css('transform', 'rotate(0deg) translateY(-7px)').css('transition-duration','100ms').css('transform-origin','center').css('background-color','black');
      $('button').css('transform','translateX(0px)').css('transition-duration', '100ms');
      $('#burger_menu button').removeClass("active").addClass("inactive");
      $('button').bind('mouseenter',function(){
        $('#burger_menu div:first-child').css('transform', 'translateY(7px)').css('transition-duration','100ms');
        $('#burger_menu div:last-child').css('transform', 'translateY(-7px)').css('transition-duration','100ms');
      });
      $('button').bind('mouseleave',function(){
        $('#burger_menu div:first-child').css('transform', 'translateY(0px)').css('transition-duration','100ms');
        $('#burger_menu div:last-child').css('transform', 'translateY(0px)').css('transition-duration','100ms');
      });
    }else{
      $('#burger_menu div:first-child').width('100%').css('transform', 'rotate(45deg) translateY(10px)').css('transition-duration','100ms').css('transform-origin','center').css('background-color','red');
      $('#burger_menu div:last-child').css('transform', 'rotate(-45deg) translateY(-10px)').css('transition-duration','100ms').css('transform-origin','center').css('background-color','red');
      $('#burger_menu button').removeClass("inactive").addClass("active");
      $('button').css('transform','translateX(5px)').css('transition-duration', '100ms');
      $('button').unbind('mouseleave').unbind('mouseenter');
    }
  });
});
