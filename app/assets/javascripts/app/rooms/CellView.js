$(function(){
  App.Rooms.CellView = Backbone.View.extend({
    tagName: "div",

    attributes: {
      class: "room-seat unselected"
    },

    template: _.template( $("#template-room-cell").html() ),

    events: {
      "click": "toogleSelected"
    },

    initialize: function(){
      this.model.on( "change:selected", this.render, this );
    },

    toogleSelected: function(){
      this.model.toogleSelected();
    },

    render: function(){
      console.log( "XXX: CellView.render", this.model.id );

      var content = "";

      if( this.model.get( "selected" ) ) content = this.template( this.model.toJSON() );

      this.$el.html( content );

      return this;
    }
  });
});