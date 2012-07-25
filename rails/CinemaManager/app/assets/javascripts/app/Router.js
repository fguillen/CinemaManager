console.log( "init router 1" );

$(function(){
  console.log( "init router 2" );
  App.Router = Backbone.Router.extend({

    routes: {
      "calendar/day/:date":     "calendarDay",
      "calendar/month/:date":   "calendarMonth"
    },

    calendarDay: function( date ) {
      console.log( "Router.calendarDay", date );

      drawRulers();

      App.Common.showings = new App.Common.Showings();


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

      App.Common.showings.fetch({ data: { day: "2012-01-02" } });

      console.log( "Router.calendarDay END" );
    },

    calendarMonth: function(){
      console.log( "Router.calendarMonth" );

      App.Common.showings =
        new App.Common.Showings(
          data.showings
        );

      App.Common.performances =
        new App.Common.Performances();

      var performanceTitles = App.Common.showings.pluck( "title" );
      performanceTitles = _.uniq( performanceTitles );

      _.each( performanceTitles, function( title ){
        App.Common.performances.add({ title: title });
      });

      App.Calendar.Month.performancesView =
        new App.Calendar.Month.PerformancesView({
          el:         "#performances-list",
          collection: App.Common.performances
        });

      App.Calendar.Month.performancesView.render();

      App.Calendar.Month.daysView =
        new App.Calendar.Month.DaysView({
          el:     "ul#days",
          month:  0,
          year:   2012,
          cards:  App.Common.showings
        });

      App.Calendar.Month.daysView.render();

      console.log( "Router.calendarMonth END" );
    }

  });
});