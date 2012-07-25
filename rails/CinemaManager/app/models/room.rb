class Room < ActiveRecord::Base
  attr_accessible :name

  has_many :showings

  def to_hash
    {
      id:   id,
      name: name
    }
  end
end
