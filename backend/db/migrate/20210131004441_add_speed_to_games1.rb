class AddSpeedToGames1 < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :speed, :integer
  end
end
