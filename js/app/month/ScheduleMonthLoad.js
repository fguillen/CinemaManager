$(function(){
  // ScheduleMonth.cards =
  //   new Schedule.Cards(
  //     data_month.cards
  //   );

  ScheduleMonth.daysView =
    new ScheduleMonth.DaysView({
      el: "ul#days",
      month: 4,
      year: 2012
    });

  ScheduleMonth.daysView.render();

});