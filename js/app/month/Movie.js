$(function(){
  ScheduleMonth.Movie = Backbone.Model.extend({
    initialize: function(){
      console.log( "Movie.initialize", this.get( "title" ) );
    }

  });
});