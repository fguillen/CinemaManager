$(function(){
  App.Rooms.FormView = Backbone.View.extend({

    initialize: function(){
      this.rows = parseInt( this.$el.find( "#room-rows" ).val() );
      this.cols = parseInt( this.$el.find( "#room-cols" ).val() );
      this.cellsNum = this.rows * this.cols;
      this.cells = this.createCellsCollection();

      this.cellsView = new App.Rooms.CellsView({ collection: this.cells, cols: this.cols });

      this.render();

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
    }

  });
});