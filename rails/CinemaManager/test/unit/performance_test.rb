require 'test_helper'

class PerformanceTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Performance.new.valid?
  end
end
