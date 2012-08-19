ENV["RAILS_ENV"] = "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "mocha"
require_relative "factories"

class ActiveSupport::TestCase
  FIXTURES_PATH = "#{File.dirname(__FILE__)}/fixtures"

  def fixture( file_name )
    File.expand_path "#{FIXTURES_PATH}/#{file_name}"
  end

  def read_fixture( file_name )
    File.read( fixture( file_name ) )
  end
end
