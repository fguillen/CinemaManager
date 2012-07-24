ActiveRecord::Base.transaction do
  puts "Creating Performances"

  30.times.map do |index|
    puts "Creating Performance #{index + 1}"
    Performance.create!({
      :title => Faker::Lorem.words( 6 ).join( " " )
    })
  end
end