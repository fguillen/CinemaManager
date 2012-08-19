class Api::RoomsController < ApplicationController
  layout false

  def create
    showing = Room.new(params[:room])

    if showing.save
      render :json => room.to_hash
    else
      render :status => 500
    end
  end

end
