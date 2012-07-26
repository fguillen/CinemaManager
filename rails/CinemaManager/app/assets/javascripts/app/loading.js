$(function(){
  $('#loading').ajaxStart( function() {
    $(this).animate({ top: "0" }, 200);
  });

  $('#loading').ajaxStop( function() {
    $(this).animate({ top: "-70" }, 100);
  });
});