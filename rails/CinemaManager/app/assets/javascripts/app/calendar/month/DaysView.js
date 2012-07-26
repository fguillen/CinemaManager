$(function(){
  App.Calendar.Month.DaysView = Backbone.View.extend({
    initialize: function(){
      console.log( "DaysView.initialize", this.options );
    },

    render: function(){
      console.log( "DaysView.render this.options", this.options );

      var monthInfo = Maths.monthInfo( this.options.date.split("-")[0], this.options.date.split("-")[1] );

      console.log( "monthInfo", monthInfo );

      for( var day = 0; day < monthInfo.startWeekDay; day++ ){
        console.log( "adding empty days ini" );
        this.$el.append( "<li class=\"empty\"></li>" );
      }

      for( var day = 1; day <= monthInfo.numDays; day++ ){
        var date = this.options.date + "-" + sprintf( "%02d", day );

        var dayView =
          new App.Calendar.Month.DayView({
            date:     date,
            showings: this.options.showings.filterByDate( date )
          });

        this.$el.append( dayView.render().el );
      }

      for( var day = monthInfo.endWeekDay; day < 6; day++ ){
        console.log( "adding empty days end" );
        this.$el.append( "<li class=\"empty\"></li>" );
      }
    }
  });
});