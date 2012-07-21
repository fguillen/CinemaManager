$(function(){
  ScheduleApp.ScheduleCardView = Backbone.View.extend({
    template: _.template( $("#template-card").html() ),

    initialize: function(){
      this.calculatePosition();
    },

    calculatePosition: function(){
      var timeElement = $( ".schedule-grid li[data-room='" + this.model.get( "room" ) + "'][data-time='" + this.model.get( "time_ini" ) + "']" );

      console.log( "searching", ".schedule-grid li[data-room=" + this.model.get( "room" ) + "][data-time=" + this.model.get( "time_ini" ) + "]" );
      console.log( "timeElement [" + this.model.id + "]: ", timeElement );

      this.x = timeElement.offset().left - $( "#schedules" ).offset().left;
      this.y = timeElement.offset().top - $( "#schedules" ).offset().top;;

      console.log( "left", this.x );
      console.log( "top", this.y );
    },

    render: function(){
      this.$el.html( this.template( this.model.toJSON() ) );
      this.setElement( this.$el.find( ".card" ) );

      this.$el.css({
        "left": this.x,
        "top": this.y,
      });

      return this;
    }
  });
});