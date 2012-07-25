class Showing < ActiveRecord::Base
  attr_accessible :performance, :price, :room, :time_ini, :time_end, :date

  belongs_to :performance
  belongs_to :room

  def to_hash
    {
      id:           id,
      price:        price,
      time_ini:     time_ini,
      time_end:     time_end,
      date:         date,
      room:         room.to_hash,
      performance:  performance.to_hash
    }
  end
end
