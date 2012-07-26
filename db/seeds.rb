ActiveRecord::Base.transaction do

  puts "Creating Rooms"
  4.times.map do |index|
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
        duration: (60..240).to_a.sample
      })

    puts "Creating Showings"
    10.times.map do |index|
      puts "Creating Showing #{index + 1}"
      time_ini = "#{(17..23).to_a.sample}:#{[10, 20, 30, 40, 50].sample}"
      time_end = Time.parse( time_ini ) + ( performance.duration * 60 )

      showing =
        Showing.create!({
          performance_id: performance.id,
          room_id: Room.all.sample.id,
          price: 10.20,
          time_ini: time_ini,
          time_end: time_end.strftime( "%H:%M" ),
          date: Date.parse( "2012-01-#{(1..30).to_a.sample}" )
        })
    end
  end
end