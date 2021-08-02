$(document).on('scroll', function(){
  const scrollY = window.pageYOffset;
  // console.log(scrollY);

  if (scrollY > 800) {
    document.getElementById('mb_nav_wrapper').classList.add('active');
  } else {
    document.getElementById('mb_nav_wrapper').classList.remove('active');
  }
});

$('.hamburger').on('click',function(){
  $('.bar').toggleClass('close');
  $('.mb_menu').toggleClass('visible');
});