require 'test_helper'

class Api::ShowingsControllerTest < ActionController::TestCase
  def test_index
    showing_1 = FactoryGirl.create( :showing, :date => "2012-01-02" )
    showing_2 = FactoryGirl.create( :showing, :date => "2012-01-02" )
    showing_1 = FactoryGirl.create( :showing, :date => "2012-01-03" )

    get(
      :index,
      :day => "2012-01-02"
    )

    assert_equal( "application/json", response.content_type )
    assert_equal( 2, JSON.load( response.body ).size )
  end
end