$(function(){
  Schedule.Card = Backbone.Model.extend({
    initialize: function(){
      this.set({ "selected": false });
      this.set({ "movie-selected": false });

      this.on( "change:selected", this.changeSelected );
      this.on( "change:movie_selected", this.changeMovieSelected );
    },

    changeSelected: function( model, val ){
      if( val ) {
        this.trigger( "app:has_been_selected", this );
      } else {
        this.trigger( "app:has_been_unselected", this );
      }
    },

    changeMovieSelected: function( model, val ){
      if( val ) {
        this.trigger( "app:has_been_movie_selected", this );
      } else {
        this.trigger( "app:has_been_movie_unselected", this );
      }
    }
  });
});
