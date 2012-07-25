$(function(){
  App.Common.Performances = Backbone.Collection.extend({
    model: App.Common.Performance,

    initialize: function(){
      this.on( "app:has_been_selected", this.hasBeenSelected );
      this.on( "app:has_been_unselected", this.hasBeenUnselected );
    },

    hasBeenSelected: function( model ){
      this.unmarkOtherSelected( model );
      App.Common.showings.unmarkMovieSelected();
      App.Common.showings.markMovieSelected( model.get( "title" ) );
    },

    hasBeenUnselected: function( model ){
      App.Common.showings.unmarkMovieSelected();
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