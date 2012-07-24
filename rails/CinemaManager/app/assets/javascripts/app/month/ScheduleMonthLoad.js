$(function(){
  ScheduleMonth.cards =
    new Schedule.Cards(
      data_month.cards
    );

  ScheduleMonth.movies =
    new ScheduleMonth.Movies();

  var moviesTitles = ScheduleMonth.cards.pluck( "title" );
  moviesTitles = _.uniq( moviesTitles );

  _.each( moviesTitles, function( title ){
    ScheduleMonth.movies.add({ title: title });
  });

  ScheduleMonth.moviesView =
    new ScheduleMonth.MoviesView({
      el:         "#movies-list",
      collection: ScheduleMonth.movies
    });

  ScheduleMonth.moviesView.render();

  ScheduleMonth.daysView =
    new ScheduleMonth.DaysView({
      el:     "ul#days",
      month:  0,
      year:   2012,
      cards:  ScheduleMonth.cards
    });

  ScheduleMonth.daysView.render();

});