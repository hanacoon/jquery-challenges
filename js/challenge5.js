$(document).ready(function(){
  $(".preview").mouseover(function( event ) {
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');
    console.log(src);
    console.log(alt);
    $("#image").css("backgroundImage", 'url(' + src +')');
    $("#image").text(alt);
  });

  $(".preview").mouseout(function( event ) {
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');
    console.log(src);
    console.log(alt);
    $("#image").css("backgroundImage", 'url()');
    $("#image").text("Hover over an image below.");
  });

  $(".preview").focus(function( event ) {
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');
    console.log(src);
    console.log(alt);
    $("#image").css("backgroundImage", 'url(' + src +')');
    $("#image").text(alt);
  });

  $(".preview").focusout(function( event ) {
    var src = $(this).attr('src');
    var alt = $(this).attr('alt');
    console.log(src);
    console.log(alt);
    $("#image").css("backgroundImage", 'url()');
    $("#image").text("Hover over an image below.");
  });

});