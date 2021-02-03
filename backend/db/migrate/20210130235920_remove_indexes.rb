class RemoveIndexes < ActiveRecord::Migration[6.0]
  def change
    remove_index :games, name: "index_games_on_current_piece_id"
    remove_index :games, name: "index_games_on_next_piece_id"
    remove_index :pieces, name: "index_pieces_on_game_id"
  end
end
