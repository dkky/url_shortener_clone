enable :sessions

get '/' do
  @all = Url.all
  @errors = session[:error]
  session[:error] = nil
  erb :"static/index"
end

post '/urls' do
	# byebug
	@url = Url.new(params[:url])
	# byebug
	@url.short_url = @url.shorten 
	# byebug
	if @url.save
		redirect '/'
	else
		session[:error] = @url.errors.messages[:long_url][0]
		redirect '/'
	end
end

get '/:short_url' do
	@select = Url.find_by(short_url: params[:short_url])
	redirect @select.long_url
end 