$(function(){
  App.Rooms.FormView = Backbone.View.extend({

    initialize: function(){
      this.rows = parseInt( this.$el.find( "#room-rows" ).val() );
      this.cols = parseInt( this.$el.find( "#room-cols" ).val() );
      this.cellsNum = this.rows * this.cols;
      this.cells = this.createCellsCollection();
      this.cells.rows = this.rows;

      this.cellsView = new App.Rooms.CellsView({ collection: this.cells, cols: this.cols });

      this.render();
    },

    updateCellsCollection: function( data ){
      _.each( data.seats, function( coordinates ){
        var index = ((coordinates.row - 1) * this.cols) + (coordinates.col - 1);
        var cell = this.cells.at( index );

        console.log( "XXX: row, col", coordinates.row, coordinates.col );
        console.log( "XXX: index, cell", index, cell );

        cell.set( "selected", true );
      }, this);
    },

    createCellsCollection: function(){
      var cells = new App.Rooms.Cells();

      for( var row = 1; row <= this.rows; row ++ ){
        for( var col = 1; col <= this.cols; col ++ ){
          var cell = new App.Rooms.Cell({ row: row, col: col });
          cells.add( cell );
        }
      }

      return cells;
    },

    render: function(){
      this.$el.find( "#room-map .room-seats" ).html( this.cellsView.render().el );
      this.$el.find( "#room-map" ).css({ "width": this.cols * 27 });
    }

  });
});