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

      this.model.on( "app:has_been_selected", this.markAsSelected, this );
      this.model.on( "app:has_been_unselected", this.unmarkAsSelected, this );
      this.model.on( "destroy", this.unlink, this );


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

      this.$el.droppable({
        greedy: true,
        tolerance: 'touch',
        drop: function(event,ui){
          $(this).effect("highlight", {}, 1000);
          ui.draggable.draggable( "option", "revert", true );
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
        this.model.trigger( "app:dropped", this.model );
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
      var cardInfo = Maths.calculateCardInfo( gridElement, this.model.get( "mins" ) );

      this.model.set( cardInfo );

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
    },

    unlink: function(){
      this.model.off( null, null, this );
      this.$el.remove();
    },
  });
});