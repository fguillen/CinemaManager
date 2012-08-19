class Api::ExternalDbs::PerformancesController < ApplicationController
  def index
    performances = ::ExternalDbs::Performance.search( params["q"] )
    puts "XXX: performances: #{performances}"
    render :json => performances.map( &:to_hash )
  end
end