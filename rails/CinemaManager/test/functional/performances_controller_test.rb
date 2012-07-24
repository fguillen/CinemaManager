require 'test_helper'

class PerformancesControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => Performance.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    Performance.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    Performance.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to performance_url(assigns(:performance))
  end

  def test_edit
    get :edit, :id => Performance.first
    assert_template 'edit'
  end

  def test_update_invalid
    Performance.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Performance.first
    assert_template 'edit'
  end

  def test_update_valid
    Performance.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Performance.first
    assert_redirected_to performance_url(assigns(:performance))
  end

  def test_destroy
    performance = Performance.first
    delete :destroy, :id => performance
    assert_redirected_to performances_url
    assert !Performance.exists?(performance.id)
  end

  def test_search_1
    performance_1 = FactoryGirl.create( :performance, :title => "title1 cat dog" )
    performance_2 = FactoryGirl.create( :performance, :title => "title1 fish rinoceronte" )

    get(
      :search,
      :q => "title1"
    )

    assert_equal( "application/json", response.content_type )
    assert_equal( 2, JSON.load( response.body ).size )
  end

  def test_search_2
    performance_1 = FactoryGirl.create( :performance, :title => "title1 cat dog" )
    performance_2 = FactoryGirl.create( :performance, :title => "title1 fish rinoceronte" )

    get(
      :search,
      :q => "cat"
    )

    assert_equal( "application/json", response.content_type )
    assert_equal( 1, JSON.load( response.body ).size )
  end

  def test_search_3
    performance_1 = FactoryGirl.create( :performance, :title => "title1 cat dog fish" )
    performance_2 = FactoryGirl.create( :performance, :title => "title1 fish rinoceronte" )

    get(
      :search,
      :q => "fish"
    )

    assert_equal( "application/json", response.content_type )
    assert_equal( 2, JSON.load( response.body ).size )
  end
end
