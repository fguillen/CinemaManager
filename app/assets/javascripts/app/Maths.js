var Maths = {};

Maths.calculateCardInfo = function( gridElement, duration ){
  console.log( "Maths.calculateCardInfo.gridElement", gridElement );
  console.log( "Maths.calculateCardInfo.duration", duration );

  var dateObj     = new Date( Date.parse( "2012-07-20 " + gridElement.attr( "data-time" ), "MM/dd/yyyy HH:MM" ) );
  var newDateObj  = new Date( dateObj.getTime() + ( duration * 60000 ) );

  var date      = gridElement.attr( "data-date" );
  var time_ini  = gridElement.attr( "data-time" );
  var time_end  = sprintf( "%02d:%02d", newDateObj.getHours(), newDateObj.getMinutes() );
  var room_name = gridElement.parents(".schedule").attr( "data-room-name" );
  var room_id   = gridElement.parents(".schedule").attr( "data-room-id" );

  console.log( "Maths.calculateCardInfo.parent", gridElement.parents(".schedule") );
  console.log( "Maths.calculateCardInfo.room_name", room_name );

  var result = {
    "date":     date,
    "time_ini": time_ini,
    "time_end": time_end,
    "room":     { id: room_id, name: room_name }
  }

  return result;
}


Maths.monthInfo = function( month, year ) {
  var numDays       = new Date( year, month + 1, 0).getDate();
  var startWeekDay  = new Date( year, month, 1 ).getDay();
  var endWeekDay   =  new Date( year, month, numDays ).getDay();

  // normalizing week days
  startWeekDay = (startWeekDay + 6) % 7;
  endWeekDay   = (endWeekDay + 6) % 7;

  var result = {
    numDays:      numDays,
    startWeekDay: startWeekDay,
    endWeekDay:  endWeekDay
  }

  return result;
}

Maths.diffMins = function( dateA, dateB ){
  // formalizing dateB if it is night session
  if( dateB.getHours() < 4 ) {
    dateB = moment( dateB ).add( "days", 1 ).toDate();
  }

  var milliseconds = moment( dateB ).diff( moment( dateA ) );
  var minutes = ( milliseconds / 1000 ) / 60;

  return minutes;
}