require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/results' do
  @movie_name = params[:movie_name]
  response = HTTParty.get("http://www.omdbapi.com/?t=#{@movie_name}")
  @title = response["Title"]
  @poster = response["Poster"]
  @year = response["Year"]
  @runtime = response["Runtime"]
  @country = response["Country"]
  @plot = response["Plot"]
  erb :results
end
