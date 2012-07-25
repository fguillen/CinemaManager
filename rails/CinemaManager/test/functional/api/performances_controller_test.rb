require 'test_helper'

class Api::PerformancesControllerTest < ActionController::TestCase
  def test_index
    performance_1 = FactoryGirl.create( :performance, :title => "title1 dog fish" )
    performance_1 = FactoryGirl.create( :performance, :title => "title2 dog cat" )
    performance_1 = FactoryGirl.create( :performance, :title => "title3 dragon" )

    get(
      :index,
      :q => "dog"
    )

    assert_equal( "application/json", response.content_type )
    assert_equal( 2, JSON.load( response.body ).size )
  end
end