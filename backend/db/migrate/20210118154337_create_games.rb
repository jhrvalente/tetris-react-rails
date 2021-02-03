class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :status
      t.integer :level
      t.boolean :levelUp
      t.integer :lines_lvl_ant
      t.boolean :paused

    end
  end
end
