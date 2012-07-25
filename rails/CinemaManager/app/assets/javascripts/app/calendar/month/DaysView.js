$(function(){
  ScheduleMonth.DaysView = Backbone.View.extend({
    render: function(){
      console.log( "DaysView this.options", this.options );

      var monthInfo = Maths.monthInfo( this.options.month, this.options.year );

      console.log( "monthInfo", monthInfo );

      for( var day = 0; day < monthInfo.startWeekDay; day++ ){
        console.log( "adding empty days ini" );
        this.$el.append( "<li class=\"empty\"></li>" );
      }

      for( var day = 1; day <= monthInfo.numDays; day++ ){
        var date = new Date( this.options.year, this.options.month, day );

        var dayView =
          new ScheduleMonth.DayView({
            month:  this.options.month,
            year:   this.options.year,
            day:    day,
            cards:  this.options.cards.filterByDate( date )
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