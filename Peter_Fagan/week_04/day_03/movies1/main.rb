require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
  erb :home
end
get "/result" do
  movie_name = params[:movie_name]
  url = "http://omdbapi.com?t=#{movie_name}&plot=full"
  @result = HTTParty.get( url )
  @title = @result["Title"]
  @duration = @result["Runtime"]
  @plot = @result["Plot"]
  @actors = @result["Actors"]
  @poster = @result["Poster"]
  erb :result
end
