class AddRowToPieces < ActiveRecord::Migration[6.0]
  def change
    add_column :pieces, :row, :integer
  end
end
