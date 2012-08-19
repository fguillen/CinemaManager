puts "XXX: loading external_dbs::performance"

class ExternalDbs::Performance
  def self.search( query )
    results = TmdbMovie.find( :title => query, :expand_results => false, :limit => 10 )

    results.map do |result|
      Performance.new({
        title: result.title,
        year: result.release_date.split("-").first
      })
    end
  end
end