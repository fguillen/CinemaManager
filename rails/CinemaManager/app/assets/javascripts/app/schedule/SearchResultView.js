$(function(){
  Schedule.SearchResultView = Backbone.View.extend({
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
            "height": _self.model.get( "mins" ) * 1
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
        var cardInfo = Maths.calculateCardInfo( droppableObj, this.model.get( "mins" ) );
        cardInfo.title = this.model.get( "title" );
        cardInfo.mins = this.model.get( "mins" );
        cardInfo.id = Math.random(1000);
        cardInfo.price = "6,50";

        var card = new Schedule.Card( cardInfo )
        Schedule.cards.add( card );


        card.set({ "selected": true });

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