console.log( "init router 1" );

$(function(){
  console.log( "init router 2" );
  App.Router = Backbone.Router.extend({

    routes: {
      "calendar/day/:date":  "calendarDay",
      "calendar/month/:date":  "calendarMonth"
    },

    calendarDay: function( date ) {
      console.log( "Router.calendarDay", date );

      drawRulers();

      App.Common.showings =
        new App.Common.Showings(
          data.showings
        );

      console.log( "App.Common.showings.lenght()", App.Common.showings.size() );

      App.Calendar.Day.showingsView =
        new App.Calendar.Day.ShowingsView({
          el:           "#schedules",
          collection:   App.Common.showings
        });

      App.Calendar.Day.selectedBoxView =
        new App.Calendar.Day.SelectedBoxView({
          el:           "#selected-box .info",
          collection:   App.Common.showings
        });

      App.Calendar.Day.searchResults =
        new App.Calendar.Day.SearchResults(
          data.search_results
        );

      App.Calendar.Day.searchResultsView =
        new App.Calendar.Day.SearchResultsView({
          el:           "#search-box .results ul",
          collection:   App.Calendar.Day.searchResults
        });

      console.log( "Router.calendarDay END" );
    },

    calendarMonth: function(){
      console.log( "Router.calendarMonth" );
      console.log( "Router.calendarMonth END" );
    }

  });
});