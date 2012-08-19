class Admin::RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end

  def new
    @room = Room.new({ :rows => 15, :cols => 20 })
  end

  def create
    @room = Room.new(params[:room])
    if @room.save
      redirect_to edit_admin_room_url( @room ), :notice => "Successfully created room."
    else
      render :action => 'new'
    end
  end

  def edit
    @room = Room.find(params[:id])
  end

  def update
    @room = Room.find(params[:id])
    @room.seats.destroy_all

    if @room.update_attributes(params[:room])
      redirect_to edit_admin_room_url( @room ), :notice  => "Successfully updated room."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    redirect_to admin_rooms_url, :notice => "Successfully destroyed room."
  end

end
