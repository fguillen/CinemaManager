class PerformancesController < ApplicationController
  def index
    @performances = Performance.all

    puts "XXX performances: #{@performances}"
  end

  def show
    @performance = Performance.find(params[:id])
  end

  def new
    @performance = Performance.new
  end

  def create
    @performance = Performance.new(params[:performance])
    if @performance.save
      redirect_to @performance, :notice => "Successfully created performance."
    else
      render :action => 'new'
    end
  end

  def edit
    @performance = Performance.find(params[:id])
  end

  def update
    @performance = Performance.find(params[:id])
    if @performance.update_attributes(params[:performance])
      redirect_to @performance, :notice  => "Successfully updated performance."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @performance = Performance.find(params[:id])
    @performance.destroy
    redirect_to performances_url, :notice => "Successfully destroyed performance."
  end

end
