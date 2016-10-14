require 'securerandom'
require_relative '../app/models/url'

inserts = []

File.open('db/urls','r').each do |row|
	inserts << "('#{row[1..-4]}', '#{SecureRandom.hex(6)}')"
end

Url.connection.execute "INSERT INTO urls (long_url, short_url) VALUES #{inserts.join(", ")}"