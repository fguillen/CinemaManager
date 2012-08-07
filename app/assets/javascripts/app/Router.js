console.log( "init router 1" );

$(function(){
  console.log( "init router 2" );
  App.Router = Backbone.Router.extend({

    routes: {
      "calendar/day/:date":     "calendarDay",
      "calendar/month/:date":   "calendarMonth"
    },

    initDayPage: function( date ){
      drawRulers( date );

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

    initMonthPage: function( date ){
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
          showings:  App.Common.showings
        });

      App.Calendar.Month.navigationView =
        new App.Calendar.Month.NavigationView({
          el: "#navigation"
        });

    },

    updatePerformancesList: function(){
      var performanceTitles =
        App.Common.showings.map( function( model ){
          return model.get( "performance" ).title;
        });

      performanceTitles = _.uniq( performanceTitles );
      var performances = [];

      console.log( "performances titles" );
      _.each( performanceTitles, function( title ){
        console.log( "performance.title", title );
        performances.push({ title: title });
      });

      App.Common.performances.reset( performances );
    },

    calendarDay: function( date ) {
      console.log( "Router.calendarDay", date );

      if( !App.Calendar.Day.navigationView ) this.initDayPage( date );

      App.Common.showings.fetch({ data: { day: date } });

      console.log( "Router.calendarDay END" );
    },

    calendarMonth: function( date ){
      console.log( "Router.calendarMonth", date );

      if( !App.Calendar.Month.navigationView ) this.initMonthPage( date );

      App.Calendar.Month.daysView.options.date = date;
      App.Calendar.Month.navigationView.options.date = date;
      App.Calendar.Month.navigationView.render();

      App.Common.showings.fetch({
        data: { month: date },
        success: this.updatePerformancesList
      });

      console.log( "Router.calendarMonth END" );
    }

  });
});