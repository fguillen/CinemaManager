class UpdateRooms < ActiveRecord::Migration
  def change
    add_column :rooms, :rows, :integer
    add_column :rooms, :cols, :integer
  end
end
