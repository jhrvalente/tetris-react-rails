class FixGameId < ActiveRecord::Migration[6.0]
  def change
    remove_reference :pieces, :game_id
    add_reference :pieces, :game
  end
end
