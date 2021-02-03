# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_31_004441) do

  create_table "games", force: :cascade do |t|
    t.integer "status"
    t.integer "level"
    t.boolean "levelUp"
    t.integer "lines_lvl_ant"
    t.boolean "paused"
    t.integer "n_lines"
    t.integer "n_cols"
    t.integer "n_levels"
    t.integer "completed_lines"
    t.integer "score"
    t.integer "current_piece_id"
    t.integer "next_piece_id"
    t.integer "speed"
  end

  create_table "pieces", force: :cascade do |t|
    t.integer "type"
    t.integer "x"
    t.integer "y"
    t.boolean "stopped"
    t.boolean "moveAllowedLeft"
    t.boolean "moveAllowedRight"
    t.boolean "moveAllowedDown"
    t.integer "col"
    t.integer "width"
    t.integer "height"
    t.integer "row"
    t.integer "heightBelow"
    t.integer "heightBelowMax"
    t.integer "heightBelowMin"
    t.boolean "MovedLeft"
    t.boolean "MovedRight"
    t.boolean "inHole"
    t.integer "game_id"
  end

end
