require 'test_helper'

class ShowingsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => Showing.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    Showing.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    Showing.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to showing_url(assigns(:showing))
  end

  def test_edit
    get :edit, :id => Showing.first
    assert_template 'edit'
  end

  def test_update_invalid
    Showing.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Showing.first
    assert_template 'edit'
  end

  def test_update_valid
    Showing.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Showing.first
    assert_redirected_to showing_url(assigns(:showing))
  end

  def test_destroy
    showing = Showing.first
    delete :destroy, :id => showing
    assert_redirected_to showings_url
    assert !Showing.exists?(showing.id)
  end
end
