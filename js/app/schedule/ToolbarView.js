$(function(){
  Schedule.ToolbarView = Backbone.View.extend({
    template: _.template( $("#template-toolbar").html() ),

    initialize: function( opts ){
      this.collection.on( "schedule:has_been_selected", this.updateSelected, this );
    },

    updateSelected: function( model ){
      console.log( "ToolbarView.updateSelected", model );
      console.log( "ToolbarView.updateSelected this", this );

      this.model = model;
      this.model.on( "schedule:has_been_unselected", this.unlink, this );
      this.model.on( "schedule:dropped", this.render, this );

      this.render();
    },

    render: function( model ){
      this.$el.html( this.template( this.model.toJSON() ) );
    },

    unlink: function(){
      this.model.off( null, null, this );
      this.$el.empty();
    },
  });

});