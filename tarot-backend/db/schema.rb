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

ActiveRecord::Schema.define(version: 2020_10_23_022143) do

  create_table "card_readings", force: :cascade do |t|
    t.integer "card_id"
    t.integer "reading_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "number"
    t.string "arcana"
    t.string "suit"
    t.string "img"
    t.string "archetype"
    t.string "hebrew_alphabet"
    t.string "numerology"
    t.string "elemental"
    t.string "mythical_spiritual"
    t.string "astrology"
    t.string "affirmation"
  end

  create_table "fortune_tellings", force: :cascade do |t|
    t.integer "card_id"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "keywords", force: :cascade do |t|
    t.integer "card_id"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "meanings", force: :cascade do |t|
    t.integer "card_id"
    t.string "light_shadow"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "questions_to_asks", force: :cascade do |t|
    t.integer "card_id"
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "readings", force: :cascade do |t|
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "card1"
    t.string "card2"
    t.string "card3"
  end

end
