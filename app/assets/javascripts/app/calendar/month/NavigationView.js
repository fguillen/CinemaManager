$(function(){
  App.Calendar.Month.NavigationView = Backbone.View.extend({
    events: {
      "click a.month-less": "monthLess",
      "click a.month-more": "monthMore"
    },

    render: function(){
      console.log( "NavigationView.render", this.options.date );
      var dateFormatted = moment( this.options.date ).format('MMMM YYYY');
      this.$el.find( ".date-formatted" ).html( dateFormatted );
    },

    monthLess: function( event ){
      console.log( "NavigationView.monthLess" );
      event.preventDefault();
      var newDate = moment( this.options.date ).subtract('months', 1)
      this.changeDate( newDate );
    },

    monthMore: function( event ){
      console.log( "NavigationView.monthMore" );
      event.preventDefault();
      var newDate = moment( this.options.date ).add('months', 1)
      this.changeDate( newDate );
    },

    changeDate: function( date ){
      var dateFormatted = date.format('YYYY-MM');
      this.options.date = dateFormatted;
      this.render();
      App.router.navigate("/calendar/month/" + dateFormatted, {trigger: true});
    }
  });
});