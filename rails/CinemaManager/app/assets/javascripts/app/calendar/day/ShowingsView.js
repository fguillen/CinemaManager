$(function(){
  App.Calendar.Day.ShowingsView = Backbone.View.extend({
    initialize: function( opts ){
      this.collection.on( 'reset', this.addAll, this );
      this.collection.on( 'add', this.addOne, this );
    },

    addOne: function( model ){
      var view = new App.Calendar.Day.ShowingView({ model: model });
      this.$el.append( view.render().el );
    },

    addAll: function(){
      this.collection.each( $.proxy( this.addOne, this ) );
    },
  });
});