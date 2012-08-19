require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  def test_create_with_nested_seats
    params = {
      :name => "Room Name",
      :rows => 10,
      :cols => 20,
      :seats_attributes => [
        { :row => 1, :col => 1 },
        { :row => 1, :col => 2 },
        { :row => 2, :col => 1 },
        { :row => 2, :col => 2 }
      ]
    }

    room = Room.create!( params )

    assert_equal( "Room Name", room.name )
    assert_equal( 4, room.seats.length )
    assert_equal( 1, room.seats.first.row )
    assert_equal( 1, room.seats.first.col )
  end

  def test_room_to_hash
    params = {
      :name => "Room Name",
      :rows => 10,
      :cols => 20,
      :seats_attributes => [
        { :row => 1, :col => 1 },
        { :row => 1, :col => 2 },
        { :row => 2, :col => 1 },
        { :row => 2, :col => 2 }
      ]
    }

    room = Room.create!( params )
    room_hash = room.to_hash

    assert_equal( "Room Name", room_hash[:name] )
    assert_equal( 10, room_hash[:rows] )
    assert_equal( 20, room_hash[:cols] )
    assert_equal( 4, room_hash[:seats].length )
    assert_equal( 1, room_hash[:seats].first[:row] )
    assert_equal( 1, room_hash[:seats].first[:col] )
  end
end
