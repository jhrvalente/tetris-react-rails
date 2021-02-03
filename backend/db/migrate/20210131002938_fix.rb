class Fix < ActiveRecord::Migration[6.0]
  def change
    remove_column :games, :speed, :integer
    add_column :games, :speed, :integer, array: true
  end
end
