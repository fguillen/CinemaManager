FactoryGirl.define do
  factory :performance do
    sequence(:title) { |n| "Title #{n}" }
  end
end