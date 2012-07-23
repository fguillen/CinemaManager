$(function(){
  ScheduleMonth.DayView = Backbone.View.extend({
    tagName: "li",

    template: _.template( $("#template-day").html() ),

    initialize: function(){
      this.$el.attr( "data-month", this.options.month );
      this.$el.attr( "data-day", this.options.day );
    },

    render: function(){
      this.$el.html( this.template({ day: this.options.day }) );
      return this;
    }
  });
});