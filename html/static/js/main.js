$(window).on("load",function(){
  $('html, body').animate({ scrollTop: 0 }, 'normal');

    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function(){

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });
});
