$(document).ready(function(){
  $("form").submit(function( event ) {
    console.log("hi")
    if ($("#fullname").val()=="") {
      event.preventDefault();
      $("#nameerrormsg").css("display", "block");
    }
    else {
      $("#nameerrormsg").css("display", "none");
    }
    if ($("#streetaddr").val()=="") {
      event.preventDefault();
      $("#addrerrormsg").css("display", "block");
    }
    else {
      $("#addrerrormsg").css("display", "none");
    }
  });
});