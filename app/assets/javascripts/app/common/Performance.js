$(function(){
  App.Common.Performance = Backbone.Model.extend({
    initialize: function(){
      this.set({ "selected": false });
      this.on( "change:selected", this.changeSelected );
      this.on( "app:has_been_selected", this.hasBeenSelected, this );
    },

    changeSelected: function( model, val ){
      if( val ) {
        this.trigger( "app:has_been_selected", this );
      } else {
        this.trigger( "app:has_been_unselected", this );
      }
    }

  });
});