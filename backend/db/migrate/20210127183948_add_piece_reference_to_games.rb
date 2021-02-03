class AddPieceReferenceToGames < ActiveRecord::Migration[6.0]
  def change
    add_reference :games, :piece, null: false, foreign_key: true
  end
end
