require 'test_helper'

class ShowingTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Showing.new.valid?
  end

  def test_to_hash
    showing = FactoryGirl.create( :showing )

    result = showing.to_hash

    assert_equal( showing.id, result[:id] )
    assert_equal( showing.price, result[:price] )
    assert_equal( showing.room_id, result[:room_id] )
    assert_equal( showing.time_ini, result[:time_ini] )
    assert_equal( showing.time_end, result[:time_end] )
    assert_equal( showing.date, result[:date] )
    assert_equal( showing.performance.title, result[:performance][:title] )
  end
end
