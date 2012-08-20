puts "XXX: loading external_dbs::performance"

class ExternalDbs::Performance
  def self.search( query )
    results = TmdbMovie.find( :title => query, :expand_results => false, :limit => 10, :language => Tmdb.default_language )

    results.map do |result|
      performance = Performance.new()
      performance.title   = result.title unless result.title.blank?
      performance.year    = result.release_date.split("-").first unless result.release_date.blank?
      performance.tmdb_id = result.id

      performance
    end
  end

  def self.info( tmdb_id )
    result = TmdbMovie.find( :id => tmdb_id, :expand_results => true, :language => Tmdb.default_language )
    performance = Performance.new()
    performance.title   = result.title unless result.title.blank?
    performance.year    = result.release_date.split("-").first unless result.release_date.blank?
    performance.tmdb_id = result.id
    performance.duration = result.runtime
    performance.synopsis = result.overview
    performance.director = get_director( result )

    performance
  end

  def self.get_director( data )
    data.crew.select{ |element| element.job == "Director" }.first.name
  end
end