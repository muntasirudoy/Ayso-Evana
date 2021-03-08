//navbar sticky start

$(window).scroll(function(){
    $scrollamout = $(window).scrollTop();
    
    if($scrollamout > 700){
      $(".menu").addClass("sticky")
    }else{
      $(".menu").removeClass("sticky")
    }
  
  
  });

//navbar sticky end


// $(function() {
//   $(document).click(function (event) {
//     $('.navbar-collapse').collapse('hide');
//   });
// });
