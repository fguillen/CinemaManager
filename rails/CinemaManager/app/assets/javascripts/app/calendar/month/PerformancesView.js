$(function(){
  App.Calendar.Month.PerformancesView = Backbone.View.extend({
    initialize: function(){
      console.log( "PerformancesView.initialize.size", this.collection.size() );
    },

    render: function(){
      this.collection.each( function( model ){
        var performanceView = new App.Calendar.Month.PerformanceView({ model: model });
        this.$el.find( ".results ul" ).append( performanceView.render().el );
      }, this);
    }
  });
});