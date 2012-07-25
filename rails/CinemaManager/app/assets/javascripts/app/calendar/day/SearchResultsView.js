$(function(){
  App.Calendar.Day.SearchResultsView = Backbone.View.extend({
    initialize: function( opts ){
      this.collection.on( 'reset', this.addAll, this );
      this.collection.on( 'add', this.addOne, this );

      this.addAll();
    },

    addOne: function( model ){
      var view = new App.Calendar.Day.SearchResultView({ model: model });
      this.$el.append( view.render().el );
    },

    addAll: function(){
      this.collection.each( $.proxy( this.addOne, this ) );
    },



  });
});