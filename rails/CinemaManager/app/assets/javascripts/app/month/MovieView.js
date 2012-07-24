$(function(){
  ScheduleMonth.MovieView = Backbone.View.extend({
    tagName: "li",

    attributes: {
      "class": "box"
    },

    events: {
      "click": "toggleSelect"
    },

    template: _.template( $("#template-movie").html() ),

    initialize: function(){
      this.model.on( "app:has_been_selected", this.markAsSelected, this );
      this.model.on( "app:has_been_unselected", this.unmarkAsSelected, this );
    },

    render: function(){
      console.log( "MovieView.render" );

      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    },

    markAsSelected: function() {
      this.$el.addClass( "selected" );
    },

    unmarkAsSelected: function() {
      this.$el.removeClass( "selected" );
    },

    toggleSelect: function(){
      if( this.model.get( "selected" ) ) {
        this.model.set({ "selected": false });
      } else {
        this.model.set({ "selected": true });
      }
    },
  });
});