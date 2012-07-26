$(function(){
  App.Calendar.Day.NavigationView = Backbone.View.extend({
    render: function(){
      console.log( "NavigationView.render", this.options.date );
      var date_formated = moment( this.options.date ).format('dddd, MMMM Do YYYY');
      this.$el.find( ".date-formatted" ).html( date_formated );
    }
  });
});