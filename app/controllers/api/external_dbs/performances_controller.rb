class Api::ExternalDbs::PerformancesController < ApplicationController
  def index
    performances = ::ExternalDbs::Performance.search( :title => params["q"] )
    render :json => performances.map( &:to_hash )
  end
end