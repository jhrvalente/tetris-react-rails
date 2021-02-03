class AddCompletedLinesAndScoreToGames < ActiveRecord::Migration[6.0]
  def change
  	add_column :games, :completed_lines, :integer
  	add_column :games, :score, :integer
  end
end
