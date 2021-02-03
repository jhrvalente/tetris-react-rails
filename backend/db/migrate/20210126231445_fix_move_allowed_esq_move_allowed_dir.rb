class FixMoveAllowedEsqMoveAllowedDir < ActiveRecord::Migration[6.0]
  def change
  	rename_column :pieces, :moveAllowedEsq, :moveAllowedLeft
  	rename_column :pieces, :moveAllowedDir, :moveAllowedRight
  end
end
