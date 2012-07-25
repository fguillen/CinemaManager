class CreateShowings < ActiveRecord::Migration
  def self.up
    create_table :showings do |t|
      t.references :performance
      t.references :room
      t.decimal :price
      t.string :time_ini
      t.string :time_end
      t.date :date
      t.timestamps
    end
  end

  def self.down
    drop_table :showings
  end
end
