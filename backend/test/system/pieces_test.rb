require "application_system_test_case"

class PiecesTest < ApplicationSystemTestCase
  setup do
    @piece = pieces(:one)
  end

  test "visiting the index" do
    visit pieces_url
    assert_selector "h1", text: "Pieces"
  end

  test "creating a Piece" do
    visit pieces_url
    click_on "New Piece"

    fill_in "Col", with: @piece.col
    fill_in "Height", with: @piece.height
    check "Movealloweddir" if @piece.moveAllowedDir
    check "Movealloweddown" if @piece.moveAllowedDown
    check "Moveallowedesq" if @piece.moveAllowedEsq
    check "Stopped" if @piece.stopped
    fill_in "Type", with: @piece.type
    fill_in "Width", with: @piece.width
    fill_in "X", with: @piece.x
    fill_in "Y", with: @piece.y
    click_on "Create Piece"

    assert_text "Piece was successfully created"
    click_on "Back"
  end

  test "updating a Piece" do
    visit pieces_url
    click_on "Edit", match: :first

    fill_in "Col", with: @piece.col
    fill_in "Height", with: @piece.height
    check "Movealloweddir" if @piece.moveAllowedDir
    check "Movealloweddown" if @piece.moveAllowedDown
    check "Moveallowedesq" if @piece.moveAllowedEsq
    check "Stopped" if @piece.stopped
    fill_in "Type", with: @piece.type
    fill_in "Width", with: @piece.width
    fill_in "X", with: @piece.x
    fill_in "Y", with: @piece.y
    click_on "Update Piece"

    assert_text "Piece was successfully updated"
    click_on "Back"
  end

  test "destroying a Piece" do
    visit pieces_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Piece was successfully destroyed"
  end
end
