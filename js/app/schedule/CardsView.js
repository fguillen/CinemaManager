$(function(){
  Schedule.CardsView = Backbone.View.extend({
    el: "#wrapper",

    initialize: function(opts){
      this.collection.on( 'reset', this.addAll, this );
      this.collection.on( 'add', this.addOne, this );

      this.addAll();
    },

    addOne: function( model ){
      var view = new Schedule.CardView({ model: model });
      this.$el.append( view.render().el );
    },

    addAll: function(){
      this.collection.each( $.proxy( this.addOne, this ) );
    },

    unlink: function(){
      this.collection.off( null, null, this );
      this.remove();
    }

  });
});