class CreatePerformances < ActiveRecord::Migration
  def self.up
    create_table :performances do |t|
      t.string :title
      t.text :synopsis
      t.string :title_original
      t.integer :year
      t.integer :duration
      t.string :card
      t.timestamps
    end
  end

  def self.down
    drop_table :performances
  end
end
