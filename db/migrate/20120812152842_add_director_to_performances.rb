class AddDirectorToPerformances < ActiveRecord::Migration
  def change
    add_column :performances, :director, :string
  end
end
