$(function(){
  App.Calendar.Month.DayView = Backbone.View.extend({
    tagName: "li",

    template: _.template( $("#template-day").html() ),

    initialize: function(){
      console.log( "DayView.initialize", this.options.day );
      console.log( "DayView.initialize.movies", this.options.cards.size() );
      this.$el.attr( "data-month", this.options.month );
      this.$el.attr( "data-day", this.options.day );
    },

    render: function(){
      this.$el.html( this.template({ day: sprintf( "%02d", this.options.day ), }) );

      this.options.cards.each( function( card ){
        var boxView = new App.Calendar.Month.ShowingView({ model: card });
        this.$el.find( ".rail[data-room='" + card.get( "room" ) + "']").append( boxView.render().el );
      }, this);

      return this;
    }
  });
});