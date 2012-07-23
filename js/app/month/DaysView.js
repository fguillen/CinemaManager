$(function(){
  ScheduleMonth.DaysView = Backbone.View.extend({
    render: function(){
      var monthInfo = Maths.monthInfo( this.options.month, this.options.year );

      console.log( "monthInfo", monthInfo );

      for( var day = 0; day < monthInfo.startWeekDay; day++ ){
        console.log( "adding empty days ini" );
        this.$el.append( "<li class=\"empty\"></li>" );
      }

      for( var day = 1; day <= 30; day++ ){
        var dayView =
          new ScheduleMonth.DayView({
            month:  this.options.month,
            year:   this.options.year,
            day:    sprintf( "%02d", day )
          });

        this.$el.append( dayView.render().el );
      }

      for( var day = monthInfo.endsWeekDay; day <= 6; day++ ){
        console.log( "adding empty days end" );
        this.$el.append( "<li class=\"empty\"></li>" );
      }
    }
  });
});