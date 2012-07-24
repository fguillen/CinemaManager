$(function(){
  ScheduleMonth.MovieView = Backbone.View.extend({
    tagName: "li",
    attributes: {
      "class": "box"
    },

    template: _.template( $("#template-movie").html() ),

    render: function(){
      console.log( "MovieView.render" );

      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  });
});