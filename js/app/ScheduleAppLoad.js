$(function(){
  scheduleCards = new ScheduleApp.ScheduleCards( data1.schedule_cards );

  scheduleCardsView =
    new ScheduleApp.ScheduleCardsView({
      el: "#schedules",
      collection: scheduleCards
    });
});