class AddGameReferenceToPieces < ActiveRecord::Migration[6.0]
  def change
  	add_reference :pieces, :game_id
  end
end
