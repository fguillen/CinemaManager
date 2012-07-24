$(function(){
  ScheduleMonth.BoxView = Backbone.View.extend({
    attributes: {
      "class": "card-box"
    },

    events: {
      "click": "selectMovie",
    },

    initialize: function(){
      this.model.on( "app:has_been_movie_selected", this.markAsSelected, this );
      this.model.on( "app:has_been_movie_unselected", this.unmarkAsSelected, this );
    },

    render: function(){
      var hour17 = moment( "17:00", "HH:mm" ).toDate();
      var hour03 = moment( "03:00", "HH:mm" ).toDate();
      var hourIniModel = moment( this.model.get( "time_ini" ), "HH:mm" ).toDate();

      var minPixels = 100 / Maths.diffMins( hour17, hour03 );
      var minIni    = Maths.diffMins( hour17, hourIniModel );

      this.$el.attr({
        "data-time": this.model.get( "time_ini" ),
        "data-mins": this.model.get( "mins" ),
        "data-card-id": this.model.get( "id" ),
      })

      this.$el.css({
        "width": 20,
        "left": minIni * minPixels,
        "width": this.model.get( "mins" ) * minPixels
      });

      return this;
    },

    selectMovie: function(){
      console.log( "BoxView.selectMovie", this.model.get( "title" ) );

      var movie =
        ScheduleMonth.movies.find( function( model ){
          return model.get( "title" ) == this.model.get( "title" );
        }, this);

      movie.set( "selected", true );
    },

    markAsSelected: function() {
      this.$el.addClass( "selected" );
    },

    unmarkAsSelected: function() {
      this.$el.removeClass( "selected" );
    },
  });
});