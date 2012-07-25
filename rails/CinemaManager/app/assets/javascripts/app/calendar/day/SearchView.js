$(function(){
  App.Calendar.Day.SearchView = Backbone.View.extend({
    events: {
      "keypress #performances-query": "keypress"
    },

    initialize: function( opts ){
      this.collection.on( 'reset', this.addAll, this );
      this.collection.on( 'add', this.addOne, this );
    },

    addOne: function( model ){
      var view = new App.Calendar.Day.SearchResultView({ model: model });
      this.$el.find( ".results ul" ).append( view.render().el );
    },

    addAll: function(){
      this.$el.find( ".results ul" ).empty();
      this.collection.each( $.proxy( this.addOne, this ) );
    },

    keypress: function( event ){
      console.log( "SearchView.keypress.event", event );
      console.log( "SearchView.keypress.val", this.$el.find( "#performances-query" ).val() );
      this.collection.fetch({ data: { q: this.$el.find( "#performances-query" ).val() } });
    }


  });
});