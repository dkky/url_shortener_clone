
get '/' do
  # @all = Url.all.order(created_at: :desc)
  @all= Url.paginate(:page => params[:page], :per_page => 10)
  @last = Url.last(2)
  @errors = session[:error]
  session[:error] = nil
  erb :"static/index"
end

post '/urls' do
	# byebug
	@url = Url.new(params[:url])
	# byebug
	# @url.short_url = @url.shorten 
	# before_save will kick in here!!
	# byebug
	if @url.save
		@url.to_json(except: [:id,:created_at,:updated_at])
		# redirect '/'
	else
		# session[:error] = @url.errors.messages[:long_url][0]
		# redirect '/'
		status 400
		error = @url.errors.messages[:long_url][0]
		error.to_json
	end
end

get '/:short_url' do
	@select = Url.find_by(short_url: params[:short_url])
	@select.click_count
	redirect @select.long_url
end 