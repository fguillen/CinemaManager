$(function(){
  ScheduleMonth.MoviesView = Backbone.View.extend({
    render: function(){
      this.collection.each( function( model ){
        var movieView = new ScheduleMonth.MovieView({ model: model });
        this.$el.find( ".results ul" ).append( movieView.render().el );
      }, this);
    }
  });
});