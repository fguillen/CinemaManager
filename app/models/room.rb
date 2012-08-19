class Room < ActiveRecord::Base
  attr_accessible :name, :rows, :cols, :seats_attributes


  has_many :showings
  has_many :seats, :class_name => "RoomSeat"

  accepts_nested_attributes_for :seats

  def to_hash
    {
      id:   id,
      name: name,
      rows: rows,
      cols: cols,
      seats: seats.map(&:to_hash)
    }
  end
end
