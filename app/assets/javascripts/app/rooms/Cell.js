$(function(){
  App.Rooms.Cell = Backbone.Model.extend({
    initialize: function(){
      this.set( "selected", false );
      this.set( "id", this.get( "row" ) + "-" + this.get( "col" ) );
    },

    toogleSelected: function(){
      var result = this.get( "selected" ) ? false : true;
      this.set( "selected", result );
    }
  });
});