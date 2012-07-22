$(function(){
  Schedule.Card = Backbone.Model.extend({
    initialize: function(){
      this.set({ "selected": false });
      this.on( "change:selected", this.changeSelected );
    },

    changeSelected: function( model, val ){
      console.log( "Card.changeSelected", model.id, val );
      if( val ) {
        this.trigger( "schedule:has_been_selected", this );
      } else {
        this.trigger( "schedule:has_been_unselected", this );
      }
    }
  });
});
