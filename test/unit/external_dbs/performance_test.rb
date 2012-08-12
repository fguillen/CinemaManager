require 'test_helper'

class ExternalDbs::PerformanceTest < ActiveSupport::TestCase
  def test_search
    result = ExternalDbs::Performance.search({ :title => "pepe" })

    puts "XXX: result: #{result}"
  end
end
