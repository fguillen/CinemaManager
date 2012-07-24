$(function(){
  ScheduleMonth.Movies = Backbone.Collection.extend({
    model: ScheduleMonth.Movie,

    initialize: function(){
      this.on( "app:has_been_selected", this.hasBeenSelected );
      this.on( "app:has_been_unselected", this.hasBeenUnselected );
    },

    hasBeenSelected: function( model ){
      this.unmarkOtherSelected( model );
      ScheduleMonth.cards.unmarkMovieSelected();
      ScheduleMonth.cards.markMovieSelected( model.get( "title" ) );
    },

    hasBeenUnselected: function( model ){
      ScheduleMonth.cards.unmarkMovieSelected();
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