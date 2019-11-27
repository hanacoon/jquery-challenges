$(document).ready(function(){
  $("form").submit(function( event ) {
    if (!$('input[name="fruit"]:checked').is(":checked") 
          || !$('input[name="standing"]:checked').is(":checked")) {
      event.preventDefault();
    }
  });
});