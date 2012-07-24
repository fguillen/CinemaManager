$(function(){
  Schedule.Cards = Backbone.Collection.extend({
    url: "/cards",

    model: Schedule.Card,

    initialize: function(){
      this.on( "schedule:has_been_selected", this.unmarkOtherSelected );
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
    }
  });
});