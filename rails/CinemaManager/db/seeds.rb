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
          room: Room.first,
          price: 10.20,
          time_ini: "17:00",
          time_end: "18:00",
          date: Date.parse( "2012-01-02" )
        })
    end
  end
end