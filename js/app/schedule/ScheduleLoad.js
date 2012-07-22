$(function(){
  drawRulers();

  Schedule.scheduleCards = new Schedule.Cards( data1.schedule_cards );

  Schedule.scheduleCardsView =
    new Schedule.CardsView({
      el:           "#schedules",
      collection:   Schedule.scheduleCards
    });
});