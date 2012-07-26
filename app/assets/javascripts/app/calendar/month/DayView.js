$(function(){
  App.Calendar.Month.DayView = Backbone.View.extend({
    tagName: "li",

    template: _.template( $("#template-day").html() ),

    initialize: function(){
      console.log( "DayView.initialize", this.options.date );
      console.log( "DayView.initialize.performances", this.options.showings.size() );
      this.$el.attr( "data-month", this.options.date.split("-")[0] );
      this.$el.attr( "data-day", this.options.date.split("-")[1] );
    },

    render: function(){
      this.$el.html(
        this.template({
          day:  this.options.date.split("-")[2],
          date: this.options.date
        })
      );

      this.options.showings.each( function( showing ){
        var boxView = new App.Calendar.Month.ShowingView({ model: showing });
        var selector = ".rail[data-room-name='" + showing.get( "room" ).name + "']";
        console.log( "DayView.render.selector", selector );
        this.$el.find( selector ).append( boxView.render().el );
      }, this);

      return this;
    }
  });
});