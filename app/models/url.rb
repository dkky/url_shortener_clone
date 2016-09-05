# require 'securerandom'
class Url < ActiveRecord::Base
	# This is Sinatra! Remember to create a migration!
	validates_format_of :long_url, :with => %r{\A(https?|ftp)://.+}i, :message => "The URL must start with http://, https://, or ftp:// ."
	before_create :shorten
	# so that it wouldn't get run when update

	def shorten
		string = 6.times.map { [*'0'..'9', *'a'..'z'].sample }.join
		#SecureRandom.hex(3)
		self.short_url = string
	end

	def click_count
		new_count = self.count + 1
		self.update(count: new_count)
		# self.count += 1
	end
end
