$(function(){
  Schedule.Cards = Backbone.Collection.extend({
    url: "/cards",

    model: Schedule.Card,

    initialize: function(){
      this.on( "app:has_been_selected", this.unmarkOtherSelected );
    },

    filterByDate: function( date ){
      var result =
        this.filter( function( model ){
          return ( moment( date ).format( "YYYY-MM-DD" ) == model.get( "date" ) );
        });

      var resultCollection = new Schedule.Cards( result );

      return resultCollection;
    },

    unmarkOtherSelected: function( model ){
      this.each( function( currentModel ){
        if( currentModel != model ) {
          currentModel.set({ "selected": false });
        }
      });
    },

    markMovieSelected: function( title ){
      this.each( function( currentModel ){
        if( currentModel.get( "title" ) == title ) {
          currentModel.set({ "movie_selected": true });
        }
      });
    },

    unmarkMovieSelected: function(){
      this.each( function( currentModel ){
        currentModel.set({ "movie_selected": false });
      });
    }
  });
});