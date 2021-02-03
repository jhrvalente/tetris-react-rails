class AddCurrentPieceAndNextPieceToGames < ActiveRecord::Migration[6.0]
  def change
  	add_column :games, :current_piece, :piece 
  	add_column :games, :next_piece, :piece 
  end
end
