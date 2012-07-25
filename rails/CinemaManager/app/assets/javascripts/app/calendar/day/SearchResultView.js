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
          ui.helper.find(".box").css({
            "width": "100px",
            "height": _self.model.get( "performance" ).duration * 1
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
        var showingInfo = Maths.calculateCardInfo( droppableObj, this.model.get( "mins" ) );
        showingInfo.performance = {}
        showingInfo.performance.title = this.model.get( "title" );
        showingInfo.performance.duration = this.model.get( "duration" );
        showingInfo.id = Math.random(1000);
        showingInfo.price = "6,50";

        var showing = new App.Common.Showing( showingInfo )
        App.Common.showings.add( showing );


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