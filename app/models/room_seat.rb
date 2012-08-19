class RoomSeat < ActiveRecord::Base
  attr_accessible :row, :col
  belongs_to :room

  def to_hash
    {
      row: row,
      col: col
    }
  end
end
