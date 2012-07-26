console.log( "init router 1" );

$(function(){
  console.log( "init router 2" );
  App.Router = Backbone.Router.extend({

    routes: {
      "calendar/day/:date":     "calendarDay",
      "calendar/month/:date":   "calendarMonth"
    },

    initDayPage: function( date ){
      drawRulers();

      App.Common.showings =
        new App.Common.Showings();

      App.Calendar.Day.navigationView =
        new App.Calendar.Day.NavigationView({
          el: "#navigation",
          date: date
        });
      App.Calendar.Day.navigationView.render();

      App.Calendar.Day.showingsView =
        new App.Calendar.Day.ShowingsView({
          el:           "#showings-store",
          collection:   App.Common.showings
        });

      App.Calendar.Day.selectedBoxView =
        new App.Calendar.Day.SelectedBoxView({
          el:           "#selected-box .info",
          collection:   App.Common.showings
        });

      App.Calendar.Day.searchResults =
        new App.Calendar.Day.SearchResults();

      App.Calendar.Day.searchResultsView =
        new App.Calendar.Day.SearchView({
          el:           "#search-box",
          collection:   App.Calendar.Day.searchResults
        });

    },

    calendarDay: function( date ) {
      console.log( "Router.calendarDay", date );

      if( !App.Common.showings ) this.initDayPage( date );
      App.Common.showings.fetch({ data: { day: date } });

      console.log( "Router.calendarDay END" );
    },

    calendarMonth: function( date ){
      console.log( "Router.calendarMonth", date );

      App.Common.showings =
        new App.Common.Showings(
        );

      App.Common.performances =
        new App.Common.Performances();

      App.Calendar.Month.performancesView =
        new App.Calendar.Month.PerformancesView({
          el:         "#performances-list",
          collection: App.Common.performances
        });

      App.Calendar.Month.daysView =
        new App.Calendar.Month.DaysView({
          el:       "ul#days",
          date:      date,
          showings:  App.Common.showings
        });


      App.Common.showings.fetch({
        data: { month: date },
        success: function(){
          var performanceTitles =
            App.Common.showings.map( function( model ){
              return model.get( "performance" ).title;
            });

          performanceTitles = _.uniq( performanceTitles );

          console.log( "performances titles" );
          _.each( performanceTitles, function( title ){
            console.log( "performance.title", title );
            App.Common.performances.add({ title: title });
          });

          App.Calendar.Month.daysView.render();
          App.Calendar.Month.performancesView.render();

        }
      });




      console.log( "Router.calendarMonth END" );
    }

  });
});