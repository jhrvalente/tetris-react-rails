class AddHeightBelowHeightBelowMaxHeightBelowMinMovedLeftMovedRightInHoleToPieces < ActiveRecord::Migration[6.0]
  def change
  	add_column :pieces, :heightBelow, :integer
  	add_column :pieces, :heightBelowMax, :integer
  	add_column :pieces, :heightBelowMin, :integer
  	add_column :pieces, :MovedLeft, :boolean
  	add_column :pieces, :MovedRight, :boolean
  	add_column :pieces, :inHole, :boolean
  end
end
