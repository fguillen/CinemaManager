$(function(){
  ScheduleMonth.BoxView = Backbone.View.extend({
    attributes: {
      "class": "card-box"
    },

    events: {
      "click": "toggleSelect",
    },

    initialize: function(){
      this.model.on( "schedule:has_been_selected", this.markAsSelected, this );
      this.model.on( "schedule:has_been_unselected", this.unmarkAsSelected, this );
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

    toggleSelect: function(){
      if( this.model.get( "selected" ) ) {
        this.model.set({ "selected": false });
      } else {
        this.model.set({ "selected": true });
      }
    },

    markAsSelected: function() {
      this.$el.addClass( "selected" );
    },

    unmarkAsSelected: function() {
      this.$el.removeClass( "selected" );
    },
  });
});