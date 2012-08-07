$(function(){
  App.Calendar.Day.SearchResultView = Backbone.View.extend({
    tagName: "li",

    template: _.template( $("#template-search-result").html() ),

    initialize: function(){
      _.bindAll( this, "revertConfiguration" );

      var _self = this;
      this.$el.draggable({
        helper: 'clone',
        snap:     ".schedule-grid li",
        snapMode: "outter",
        opacity:  0.75,
        zIndex:   1000,
        revert:   _self.revertConfiguration ,

        start: function( event, ui ){
          console.log( "---start---", event, ui, this );
          console.log( "XXX1", _self.model );

          ui.helper.find(".box").css({
            "width": "100px",
            "height": _self.model.get( "duration" ) * 1
          });
        },

        stop: function(event, ui) {
          console.log( "---stop----" );
          $(this).draggable( 'option', 'revert', _self.revertConfiguration );
        }
      });

    },

    revertConfiguration: function( droppableObj ){
      if( droppableObj === false ) {
        return true;
      } else {
        var showingInfo = Maths.calculateCardInfo( droppableObj, this.model.get( "duration" ) );
        var showing =
          App.Common.showings.create(
            {
              performance_id: this.model.get( "id" ),
              price: "6,50",
              room_id: showingInfo.room.id,
              time_ini: showingInfo.time_ini,
              time_end: showingInfo.time_end,
              date: showingInfo.date
            },
            { wait: true }
          );

        console.log( "revertConfiguration.showing", showing );

        showing.set({ "selected": true });

        this.model.trigger( "app:dropped", this.model );
        return false;
      }
    },

    render: function(){
      this.$el.append( this.template( this.model.toJSON() ) );
      return this;
    }
  })
})