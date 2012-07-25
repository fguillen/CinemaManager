FactoryGirl.define do
  factory :room do
  end

  factory :performance do
    sequence(:title) { |n| "Title #{n}" }
  end

  factory :showing do
    association(:room)
    association(:performance)
    price 10.20
    time_ini "17:00"
    time_end "18:00"
    date Date.new(2012,01,02)
  end
end