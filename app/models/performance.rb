puts "XXX: loading performance"

class Performance < ActiveRecord::Base
  attr_accessible(
    :title,
    :synopsis,
    :title_original,
    :year,
    :duration,
    :card,
    :director,
    :tmdb_id
  )

  has_many :showings

  def to_hash
    return {
      id:               id,
      title:            title,
      synopsis:         synopsis,
      title_original:   title_original,
      director:         director,
      year:             year,
      duration:         duration,
      card:             card,
      tmdb_id:          tmdb_id
    }
  end
end
