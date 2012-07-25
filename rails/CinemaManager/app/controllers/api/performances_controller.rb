class Api::PerformancesController < ApplicationController
  def index
    performances = Performance.search( :title_contains => params["q"] ).all
    render :json => performances.map( &:to_hash )
  end
end
