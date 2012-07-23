$(function(){
  drawRulers();

  Schedule.cards =
    new Schedule.Cards(
      data.cards
    );

  Schedule.cardsView =
    new Schedule.CardsView({
      el:           "#schedules",
      collection:   Schedule.cards
    });

  Schedule.toolbar =
    new Schedule.ToolbarView({
      el:           "#toolbar",
      collection:   Schedule.cards
    });

  Schedule.searchResults =
    new Schedule.SearchResults(
      data.search_results
    );

  Schedule.searchResultsView =
    new Schedule.SearchResultsView({
      el:           "#search-box .results ul",
      collection:   Schedule.searchResults
    })


});