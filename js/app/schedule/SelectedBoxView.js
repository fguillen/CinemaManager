$(function(){
  Schedule.SelectedBoxView = Backbone.View.extend({
    template: _.template( $("#template-selected-info").html() ),

    events: {
      "click #buttons .remove": "remove"
    },

    initialize: function( opts ){
      this.collection.on( "schedule:has_been_selected", this.updateSelected, this );
    },

    updateSelected: function( model ){
      this.model = model;
      this.model.on( "schedule:has_been_unselected", this.unlink, this );
      this.model.on( "destroy", this.unlink, this );
      this.model.on( "schedule:dropped", this.render, this );

      this.render();
    },

    render: function( model ){
      this.$el.html( this.template( this.model.toJSON() ) );
    },

    remove: function(){
      console.log( "SelectedBoxView.remove", this.model.id );
      this.model.destroy();
    },

    unlink: function(){
      this.model.off( null, null, this );
      this.$el.empty();
    },
  });

});