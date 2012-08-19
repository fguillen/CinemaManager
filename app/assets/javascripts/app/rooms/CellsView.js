$(function(){
  App.Rooms.CellsView = Backbone.View.extend({

    render: function(){
      this.$el.empty();

      this.collection.each( function( model ){
        var view = new App.Rooms.CellView({ model: model });
        this.$el.append( view.render().el );
      }, this);

      return this;
    }
  });
});