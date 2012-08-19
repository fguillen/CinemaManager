$(function(){
  App.Rooms.FormView = Backbone.View.extend({
    events: {
      "change .room-dimension": "updateDimensions"
    },

    initialize: function(){
      var rows = parseInt( this.$el.find( "#room-rows" ).val() );
      var cols = parseInt( this.$el.find( "#room-cols" ).val() );

      this.cells = this.createCellsCollection( rows, cols );

      this.render();
    },

    updateDimensions: function(){
      var newRows = parseInt( this.$el.find( "#room-rows" ).val() );
      var newCols = parseInt( this.$el.find( "#room-cols" ).val() );

      if( newRows < this.cells.rows ){
        this.cells.removeRows( this.cells.rows - newRows );
      }

      if( newRows > this.cells.rows ){
        this.cells.addRows( newRows - this.cells.rows );
      }

      if( newCols < this.cells.cols ){
        this.cells.removeCols( this.cells.cols - newCols );
      }

      if( newCols > this.cells.cols ){
        this.cells.addCols( newCols - this.cells.cols );
      }

      this.render();
    },

    updateCellsCollection: function( data ){
      _.each( data.seats, function( coordinates ){
        var index = ((coordinates.row - 1) * this.cells.cols) + (coordinates.col - 1);
        var cell = this.cells.at( index );

        console.log( "XXX: cells", this.cells );
        console.log( "XXX: row, col", coordinates.row, coordinates.col );
        console.log( "XXX: index, cell", index, cell );

        cell.set( "selected", true );
      }, this);
    },

    createCellsCollection: function( rows, cols ){
      var cells = new App.Rooms.Cells();

      for( var row = 1; row <= rows; row ++ ){
        for( var col = 1; col <= cols; col ++ ){
          var cell = new App.Rooms.Cell({ row: row, col: col });
          cells.add( cell );
        }
      }

      cells.rows = rows;
      cells.cols = cols;

      return cells;
    },

    render: function(){
      console.log( "XXX: FormView.render" );
      var cellsView = new App.Rooms.CellsView({ collection: this.cells });
      this.$el.find( "#room-map .room-seats" ).html( cellsView.render().el );
      this.$el.find( "#room-map" ).css({ "width": this.cells.cols * 27 });
    }

  });
});