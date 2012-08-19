class CreateRoomSeats < ActiveRecord::Migration
  def self.up
    create_table :room_seats do |t|
      t.references :room
      t.integer :row, :null => false
      t.integer :col, :null => false
      t.timestamps
    end
  end

  def self.down
    drop_table :room_seats
  end
end
