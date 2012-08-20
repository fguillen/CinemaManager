require 'test_helper'

class ExternalDbs::PerformanceTest < ActiveSupport::TestCase
  def test_search
    TmdbMovie
      .expects(:find)
      .with({ :title => "pepe", :expand_results => false, :limit => 10, :language => "en" })
      .returns( YAML::load( read_fixture( "tmdb_search_result.yaml" ) ) )

    result = ExternalDbs::Performance.search( "pepe" )

    assert_equal( 10, result.length )
    assert_equal( "Iron Man", result.first.title )
    assert_equal( 1726, result.first.tmdb_id )
    assert_equal( 2008, result.first.year )
    assert_equal( "Iron Man", result.second.title )
    assert_equal( 1951, result.second.year )
    assert_equal( 69592, result.second.tmdb_id )
  end

  def test_info
    TmdbMovie
      .expects(:find)
      .with({ :id => 1, :expand_results => true, :language => "en" })
      .returns( YAML::load( read_fixture( "tmdb_info_result.yaml" ) ) )

    result = ExternalDbs::Performance.info( 1 )

    assert_equal( "Iron Man", result.title )
    assert_equal( "After esca", result.synopsis[0,10] )
    assert_equal( 2008, result.year )
    assert_equal( 126, result.duration )
    assert_equal( "Jon Favreau", result.director )
  end
end
