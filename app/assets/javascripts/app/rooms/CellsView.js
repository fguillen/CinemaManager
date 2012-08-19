$(function(){
  App.Rooms.CellsView = Backbone.View.extend({

    render: function(){
      console.log( "XXX: CellsView.render.collection", this.collection );

      this.$el.empty();

      for( var row = 1; row <= this.collection.rows; row ++ ) {
        var rowElement = $("<div class=\"room-seats-row\" data-row=\"" + row + "\"></div>").appendTo( this.$el );

        var models = this.collection.filter( function( model ){ return model.get( "row" ) == row } );

        _.each( models, function( model ){
          var view = new App.Rooms.CellView({ model: model });
          rowElement.append( view.render().el );
        }, this);
      }

      return this;
    }
  });
});