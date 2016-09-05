class CreateUrls < ActiveRecord::Migration
	def change
	create_table :urls do |t|
      t.text :long_url, :limit => 64
      t.text :short_url, :limit => 64
      t.timestamps
    end
	end
end
