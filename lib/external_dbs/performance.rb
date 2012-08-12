puts "XXX: loading external_dbs::performance"

class ExternalDbs::Performance
  def self.search( query )
    5.times.map do |index|
      Performance.new({
        title: "Performance #{index}"
      })
    end
  end
end