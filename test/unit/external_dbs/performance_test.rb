require 'test_helper'

class ExternalDbs::PerformanceTest < ActiveSupport::TestCase
  def test_search
    TmdbMovie.
      expects(:find).
      with({ :title => "pepe", :expand_results => false, :limit => 10 })
      .returns( YAML::load( read_fixture( "tmdb_result_king.yaml" ) ) )

    result = ExternalDbs::Performance.search( "pepe" )

    assert_equal( 10, result.length )
    assert_equal( "King", result.first.title )
    assert_equal( 2008, result.first.year )
    assert_equal( "King", result.second.title )
    assert_equal( 2002, result.second.year )
  end
end
