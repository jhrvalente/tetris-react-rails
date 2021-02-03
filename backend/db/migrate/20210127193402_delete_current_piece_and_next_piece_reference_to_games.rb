class DeleteCurrentPieceAndNextPieceReferenceToGames < ActiveRecord::Migration[6.0]
  def change
  	remove_reference :games, :current_piece
  	remove_reference :games, :next_piece
  end
end
