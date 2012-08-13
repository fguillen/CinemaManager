class Api::PerformancesController < ApplicationController
  def index
    puts "XXX: params: #{params}"

    performances = params[:q].blank? ? Performance.all : Performance.search( :title_contains => params[:q] ).all
    render :json => performances.map( &:to_hash )
  end
end
