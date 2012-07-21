$(function(){
  ScheduleApp.ScheduleCardView = Backbone.View.extend({
    template: _.template( $("#template-card").html() ),

    initialize: function(){

      this.$el.html( this.template( this.model.toJSON() ) );
      this.setElement( this.$el.find( ".card" ) );


      _self = this;
      this.$el.draggable({
        snap:     ".schedule-grid li",
        snapMode: "outter",
        opacity:  0.75,
        zIndex:   1000,
        revert:   $.proxy( _self.revertConfiguration, _self ) ,

        stop: function(event, ui) {
          console.log( "---stop----" );
          $(this).draggable( 'option', 'revert', $.proxy( _self.revertConfiguration, _self ) );
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
        return false;
      }
    },

    calculatePosition: function(){
      var selector = "#schedule-room-" + this.model.get( "room" ) + " .schedule-grid ul li[data-time='" + this.model.get( "time_ini" ) + "']";
      console.log( "selector", selector );
      var timeElement = $( selector );
      console.log( "timeElement [" + this.model.id + "]: ", timeElement );

      this.left     = timeElement.offset().left - $( "#schedules" ).offset().left;
      this.top      = timeElement.offset().top - $( "#schedules" ).offset().top;;
      this.height   = this.model.get( "mins" ) * 1;

      console.log( "left", this.left );
      console.log( "top", this.top );
      console.log( "height", this.height );
    },

    calculateTimes: function( gridElement ){
      console.log( "calculateTimes" );
      console.log( "gridElement", gridElement );
      this.model.set( "time_ini", gridElement.attr( "data-time" ) );

      console.log( this.model.get( "time_ini" ) )
      this.$el.find( ".time-ini" ).html( this.model.get( "time_ini" ) );
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