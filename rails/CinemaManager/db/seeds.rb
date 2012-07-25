ActiveRecord::Base.transaction do

  puts "Creating Rooms"
  3.times.map do |index|
    puts "Creating Room #{index + 1}"
    room =
      Room.create!({
        name: index + 1
      })
  end

  puts "Creating Performances"
  30.times.map do |index|
    puts "Creating Performance #{index + 1}"
    performance =
      Performance.create!({
        title:     Faker::Lorem.words( 6 ).join( " " ),
        duration:  120
      })

    puts "Creating Showings"
    10.times.map do |index|
      puts "Creating Showing #{index + 1}"
      showing =
        Showing.create!({
          performance: performance,
          room: Room.all.sample,
          price: 10.20,
          time_ini: "#{(17..23).to_a.sample}:#{[10, 20, 30, 40, 50].sample}",
          time_end: "#{(19..23).to_a.sample}:#{[10, 20, 30, 40, 50].sample}",
          date: Date.parse( "2012-01-#{(1..30).to_a.sample}" )
        })
    end
  end
end