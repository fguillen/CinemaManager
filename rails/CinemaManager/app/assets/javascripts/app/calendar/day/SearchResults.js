$(function (){
  App.Calendar.Day.SearchResults = Backbone.Collection.extend({
    url: "/api/performances",

    model: App.Calendar.Day.SearchResult


  })
});