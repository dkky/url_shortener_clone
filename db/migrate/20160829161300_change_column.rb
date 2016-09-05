class ChangeColumn < ActiveRecord::Migration
	def change
		change_column(:urls, :long_url, :string)
		change_column(:urls, :short_url, :string)
	end
end
