class AddTmdbIdToPerformances < ActiveRecord::Migration
  def change
    add_column :performances, :tmdb_id, :integer
  end
end
