require 'test_helper'

class PiecesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @piece = pieces(:one)
  end

  test "should get index" do
    get pieces_url
    assert_response :success
  end

  test "should get new" do
    get new_piece_url
    assert_response :success
  end

  test "should create piece" do
    assert_difference('Piece.count') do
      post pieces_url, params: { piece: { col: @piece.col, height: @piece.height, moveAllowedDir: @piece.moveAllowedDir, moveAllowedDown: @piece.moveAllowedDown, moveAllowedEsq: @piece.moveAllowedEsq, stopped: @piece.stopped, type: @piece.type, width: @piece.width, x: @piece.x, y: @piece.y } }
    end

    assert_redirected_to piece_url(Piece.last)
  end

  test "should show piece" do
    get piece_url(@piece)
    assert_response :success
  end

  test "should get edit" do
    get edit_piece_url(@piece)
    assert_response :success
  end

  test "should update piece" do
    patch piece_url(@piece), params: { piece: { col: @piece.col, height: @piece.height, moveAllowedDir: @piece.moveAllowedDir, moveAllowedDown: @piece.moveAllowedDown, moveAllowedEsq: @piece.moveAllowedEsq, stopped: @piece.stopped, type: @piece.type, width: @piece.width, x: @piece.x, y: @piece.y } }
    assert_redirected_to piece_url(@piece)
  end

  test "should destroy piece" do
    assert_difference('Piece.count', -1) do
      delete piece_url(@piece)
    end

    assert_redirected_to pieces_url
  end
end
