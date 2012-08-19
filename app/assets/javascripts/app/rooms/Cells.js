$(function(){
  App.Rooms.Cells = Backbone.Collection.extend({
    model: App.Rooms.Cell,

    removeRows: function( num ){
      console.log( "XXX: removeRows", num );

      for( var row = this.rows; row > ( this.rows - num ); row -- ){
        var models = this.filter( function( model ){ return model.get( "row" ) == row } );
        console.log( "XXX: remove models", models );
        this.remove( models );
      }

      this.rows = this.rows - num;
    },

    addRows: function( num ){
      console.log( "XXX: addRows", num );

      for( var row = this.rows; row <= ( this.rows + num ); row ++ ){
        for( var col = 1; col <= this.cols; col ++ ){
          var cell = new App.Rooms.Cell({ row: row, col: col });
          this.add( cell );
        }
      }

      this.rows = this.rows + num;
    },

    removeCols: function( num ){
      console.log( "XXX: removeCols", num );

      for( var col = this.cols; col > ( this.cols - num ); col -- ){
        var models = this.filter( function( model ){ return model.get( "col" ) == col } );
        console.log( "XXX: remove models", models );
        this.remove( models );
      }

      this.cols = this.cols - num;
    },

    addCols: function( num ){
      console.log( "XXX: addCols", num );

      for( var col = this.cols; col <= ( this.cols + num ); col ++ ){
        for( var row = 1; row <= this.rows; row ++ ){
          var cell = new App.Rooms.Cell({ row: row, col: col });
          this.add( cell );
        }
      }

      this.cols = this.cols + num;
    }
  });
});