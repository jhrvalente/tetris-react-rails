class AddReferencesToGames < ActiveRecord::Migration[6.0]
  def change
  	add_reference :games, :current_piece
  	add_reference :games, :next_piece
  end
end
