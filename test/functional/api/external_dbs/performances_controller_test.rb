require 'test_helper'

class Api::ExternalDbs::PerformancesControllerTest < ActionController::TestCase
  def test_index
    get(
      :index,
      :q => "title"
    )

    assert_equal( "application/json", response.content_type )

    puts "XXX: response: #{response.body}"
  end
end