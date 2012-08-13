puts "XXX: loading external_dbs::performance"

class ExternalDbs::Performance
  def self.search( query )
    # performances = TmdbMovie.find( :title => "query" )
    # puts "XXX: performances: #{performances}"


    5.times.map do |index|
      Performance.new({
        title: "Performance #{index}",
        director: "Director #{index}",
        year: 2010,
        duration: 180,
        synopsis: "This is the synopsis"
      })
    end
  end
end