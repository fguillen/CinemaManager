$(function(){
  Schedule.Cards = Backbone.Collection.extend({
    url: "/cards",

    model: Schedule.Card,

    initialize: function(){
      this.on( "schedule:has_been_selected", this.unmarkOtherSelected );
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