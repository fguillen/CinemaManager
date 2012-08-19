$(function(){
  App.Calendar.Day.NavigationView = Backbone.View.extend({
    events: {
      "click a.day-less": "dayLess",
      "click a.day-more": "dayMore",
      "click a.month-view": "monthView"
    },

    render: function(){
      console.log( "NavigationView.render", this.options.date );
      var dateFormatted = moment( this.options.date ).format('dddd, MMMM Do YYYY');
      this.$el.find( ".date-formatted" ).html( dateFormatted );
    },

    dayLess: function( event ){
      console.log( "NavigationView.dayLess" );
      event.preventDefault();
      var newDate = moment( this.options.date ).subtract('days', 1)
      this.changeDate( newDate );
    },

    dayMore: function( event ){
      console.log( "NavigationView.dayMore" );
      event.preventDefault();
      var newDate = moment( this.options.date ).add('days', 1)
      this.changeDate( newDate );
    },

    changeDate: function( date ){
      var dateFormatted = date.format('YYYY-MM-DD');
      this.options.date = dateFormatted;
      this.render();
      App.router.navigate("/admin/calendar/day/" + dateFormatted, {trigger: true});
    },

    monthView: function( event ){
      console.log( "NavigationView.monthView" );
      event.preventDefault();
      var dateMonthFormatted = moment( this.options.date ).format('YYYY-MM');
      window.location.href = "/admin/calendar/month/" + dateMonthFormatted;
    }
  });
});