class AddCurrentPieceReferenceToGames < ActiveRecord::Migration[6.0]
  def change
  	add_reference :games, :current_piece
  	add_reference :games, :next_piece
  	remove_column :games, :current_piece, :piece 
  	remove_column :games, :next_piece, :piece 
  	remove_reference :games, :piece, null: false, foreign_key: true
  end
end
