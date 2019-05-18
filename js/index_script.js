$(document).ready(function(){
    $(".owl-carousel").owlCarousel();



$(window).scroll(function(){
  if($(window).scrollTop() > 50){
    $(".navbar").addClass('sticky-menu');
    $('.nav-item ').css('cssText', 'padding:13px 0px;');
    
  }else{
    $(".navbar").removeClass('sticky-menu');
    // $(".dropdown").hover( function(){
    //   $(this).find('.dropdown-menu').first().fadeIn(100).animate({top:'80px',opacity:'1'});
    //   $('#navbarDropdown').attr('aria-expanded',true);
    // },function () {
    //   $(this).find('.dropdown-menu').first().fadeOut(10).css('cssText','top:150px');
    //   $('#navbarDropdown').attr('aria-expanded',false);
    // }
    // );
    $(".dropdown").mouseout( function(){
      $(this).find('.dropdown-menu').first().fadeOut(100).animate({top:'120px',opacity:'1'});
      $('#navbarDropdown').attr('aria-expanded',false);
    });
  }
});
$(".dropdown").hover( function(){
  $(this).find('.dropdown-menu').first().fadeIn(100).animate({top:'80px',opacity:'1'});
  $('#navbarDropdown').attr('aria-expanded',true);
},function () {
  $(this).find('.dropdown-menu').first().fadeOut(10).css('cssText','top:150px');
  $('#navbarDropdown').attr('aria-expanded',false);
}
);
// $(window).scroll(function(){
//   if($(this).scrollTop() > 50){
//     $(".navbar").addClass('sticky-menu');
//     $(".nav-item").css('cssText', 'padding:10px; important');
//     $(".dropdown").hover( function(){
//       $(this).find('.dropdown-menu').first().fadeIn(100).animate({top:'120px',opacity:'1'});
//       $('#navbarDropdown').attr('aria-expanded',true);
//     },function () {
//       $(this).find('.dropdown-menu').first().fadeOut(10).css('cssText','top:150px');
//       $('#navbarDropdown').attr('aria-expanded',false);
//     }
//     );
//     }else{
//     $(".navbar").removeClass('sticky-menu');
//     $(".nav-item").css('cssText', 'padding:33px 0px important');

//   }
// })
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {

    $('.btn-top').show();

  } else {
    $('.btn-top').hide();
  }
});
$('.btn-top').click(function () {
  $("html,body").animate({scrollTop: 0},  1000)
});


