$(function(){
  ScheduleMonth.DayView = Backbone.View.extend({
    tagName: "li",

    template: _.template( $("#template-day").html() ),

    initialize: function(){
      this.$el.attr( "data-month", this.options.month );
      this.$el.attr( "data-day", this.options.day );
    },

    render: function(){
      this.$el.html( this.template({ day: sprintf( "%02d", this.options.day ), }) );

      this.options.cards.each( function( card ){
        var boxView = new ScheduleMonth.BoxView({ model: card });
        this.$el.find( ".rail[data-room='" + card.get( "room" ) + "']").append( boxView.render().el );
      }, this);
      return this;
    }
  });
});