$(function(){
  Schedule.CardView = Backbone.View.extend({
    template: _.template( $("#template-card").html() ),


    events: {
      "click": "toggleSelect",
      "drag": "select",
    },

    initialize: function(){
      _.bindAll( this, "revertConfiguration", "calculatePosition" );

      this.$el.html( this.template( this.model.toJSON() ) );
      this.setElement( this.$el.find( ".card" ) );

      this.model.on( "schedule:has_been_selected", this.markAsSelected, this );
      this.model.on( "schedule:has_been_unselected", this.unmarkAsSelected, this );


      var _self = this;
      this.$el.draggable({
        snap:     ".schedule-grid li",
        snapMode: "outter",
        opacity:  0.75,
        zIndex:   1000,
        revert:   _self.revertConfiguration ,

        stop: function(event, ui) {
          console.log( "---stop----" );
          $(this).draggable( 'option', 'revert', _self.revertConfiguration );
        }
      });
    },

    revertConfiguration: function( droppableObj ){
      console.log( "this x", this );
      if( droppableObj === false ) {
        console.log( "reverted" );
        return true;
      } else {
        console.log( "droppen on", droppableObj );
        this.calculateTimes( droppableObj );
        this.model.trigger( "schedule:dropped", this.model );
        return false;
      }
    },

    calculatePosition: function(){
      var selector = "#schedule-room-" + this.model.get( "room" ) + " .schedule-grid ul li[data-time='" + this.model.get( "time_ini" ) + "']";
      var timeElement = $( selector );

      this.left     = timeElement.offset().left - $( "#schedules" ).offset().left;
      this.top      = timeElement.offset().top - $( "#schedules" ).offset().top;;
      this.height   = this.model.get( "mins" ) * 1;
    },

    calculateTimes: function( gridElement ){
      this.model.set( "time_ini", gridElement.attr( "data-time" ) );
      this.model.set( "room", gridElement.parents(".schedule").attr( "data-room" ) );

      var dateObj     = new Date( Date.parse( "2012-07-20 " + this.model.get( "time_ini" ), "MM/dd/yyyy HH:MM" ) );
      var newDateObj  = new Date( dateObj.getTime() + this.model.get( "mins" ) * 60000 );
      var timeEnd     = sprintf( "%02d:%02d", newDateObj.getHours(), newDateObj.getMinutes() );

      this.model.set( "time_end", timeEnd );

      this.$el.find( ".time-ini" ).html( this.model.get( "time_ini" ) );
      this.$el.find( ".time-end" ).html( this.model.get( "time_end" ) );
    },

    markAsSelected: function() {
      console.log( "CardView.markAsSelected" );
      this.$el.addClass( "selected" );
    },

    unmarkAsSelected: function() {
      console.log( "CardView.unmarkAsSelected" );
      this.$el.removeClass( "selected" );
    },

    toggleSelect: function(){
      if( this.model.get( "selected" ) ) {
        this.model.set({ "selected": false });
      } else {
        this.model.set({ "selected": true });
      }
    },

    select: function(){
      if( !this.model.get( "selected" ) ) this.model.set({ "selected": true });
    },

    render: function(){
      this.calculatePosition();

      this.$el.css({
        "position": "absolute",
        "left":     this.left,
        "top":      this.top,
        "height":   this.height
      });

      return this;
    }
  });
});