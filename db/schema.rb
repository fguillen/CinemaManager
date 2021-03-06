# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120820140105) do

  create_table "performances", :force => true do |t|
    t.string   "title"
    t.text     "synopsis"
    t.string   "title_original"
    t.integer  "year"
    t.integer  "duration"
    t.string   "card"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.string   "director"
    t.integer  "tmdb_id"
  end

  create_table "room_seats", :force => true do |t|
    t.integer  "room_id"
    t.integer  "row",        :null => false
    t.integer  "col",        :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "rooms", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "rows"
    t.integer  "cols"
  end

  create_table "showings", :force => true do |t|
    t.integer  "performance_id"
    t.integer  "room_id"
    t.decimal  "price"
    t.string   "time_ini"
    t.string   "time_end"
    t.date     "date"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

end
