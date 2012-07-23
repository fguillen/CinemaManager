var Maths = {};

Maths.calculateCardInfo = function( gridElement, mins ){
  var dateObj     = new Date( Date.parse( "2012-07-20 " + gridElement.attr( "data-time" ), "MM/dd/yyyy HH:MM" ) );
  var newDateObj  = new Date( dateObj.getTime() + ( mins * 60000 ) );

  var time_ini  = gridElement.attr( "data-time" );
  var time_end  = sprintf( "%02d:%02d", newDateObj.getHours(), newDateObj.getMinutes() );
  var room      = gridElement.parents(".schedule").attr( "data-room" );

  var result = {
    "time_ini": time_ini,
    "time_end": time_end,
    "room":     room
  }

  return result;
}