class FixSpeed < ActiveRecord::Migration[6.0]
  def change
    remove_column :games, :speed, :integer
  end
end
