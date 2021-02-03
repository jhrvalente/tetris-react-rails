class AddLinesColsAndLevelsToGame < ActiveRecord::Migration[6.0]
  def change
  	add_column :games, :n_lines, :integer
  	add_column :games, :n_cols, :integer
  	add_column :games, :n_levels, :integer
  end
end
