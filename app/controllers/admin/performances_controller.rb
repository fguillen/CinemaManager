class Admin::PerformancesController < ApplicationController
  def index
  end

  def new
    @performance = Performance.new({ :year => Time.now.year })
  end

  def create
    @performance = Performance.new(params[:performance])
    if @performance.save
      redirect_to edit_admin_performance_url( @performance ), :notice => "Successfully created performance."
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
      redirect_to edit_admin_performance_url( @performance ), :notice  => "Successfully updated performance."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @performance = Performance.find(params[:id])
    @performance.destroy
    redirect_to admin_performances_url, :notice => "Successfully destroyed performance."
  end

end
