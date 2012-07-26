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

  def test_update
    showing = FactoryGirl.create( :showing )
    room = FactoryGirl.create( :room )

    puts "XXX: showing: #{showing.inspect}"
    puts "XXX: showing.room: #{showing.room.inspect}"

    params = JSON.load( File.read( fixture( "api/showing_update.json" ) ) );
    params["id"] = showing.id
    params["room"]["name"] = room.name

    put(
      :update,
      params
    )

    assert_equal( "application/json", response.content_type )
    assert_equal( showing.id, JSON.load( response.body )["id"] )

    showing.reload

    assert_equal( room.id, showing.room.id )
    assert_equal( "18:30", showing.time_ini )
    assert_equal( "20:34", showing.time_end )
  end
end