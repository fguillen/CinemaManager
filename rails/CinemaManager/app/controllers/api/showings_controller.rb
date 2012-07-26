class Api::ShowingsController < ApplicationController
  layout false

  def index
    @showings = Showing.where( :date => params[:day] ).all
    render :json => @showings.map( &:to_hash )
  end

  def create
    @showing = Showing.new(params[:showing])
    if @showing.save
      redirect_to @showing, :notice => "Successfully created showing."
    else
      render :action => 'new'
    end
  end

  def update
    showing = Showing.find(params[:id])

    valid_params = params.slice( *Showing.accessible_attributes.to_a )
    valid_params[ :room_id ] = Room.find_by_name( params[:room][:name] ).id

    if showing.update_attributes( valid_params )
      render :json => showing.to_hash
    else
      render :status => 500
    end
  end

  def destroy
    @showing = Showing.find(params[:id])
    @showing.destroy
    redirect_to showings_url, :notice => "Successfully destroyed showing."
  end
end
