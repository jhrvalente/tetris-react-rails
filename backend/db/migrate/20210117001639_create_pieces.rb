class CreatePieces < ActiveRecord::Migration[6.0]
  def change
    create_table :pieces do |t|
      t.integer :type
      t.integer :x
      t.integer :y
      t.boolean :stopped
      t.boolean :moveAllowedEsq
      t.boolean :moveAllowedDir
      t.boolean :moveAllowedDown
      t.integer :col
      t.integer :width
      t.integer :height
    end
  end
end
