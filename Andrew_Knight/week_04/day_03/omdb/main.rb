require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/search' do
  erb :search
end

get '/result' do
  @title = params[:movie_name]
  url = "http://www.omdbapi.com?s=#{@title}"
  res = HTTParty.get ( url )
  if res["totalResults"] == 1
    @actors = res["Actors"]
    @poster = res["Poster"]
    @rating = res["imdbRating"]

    erb :result
  else
    erb :matches
  end
end

get '/matches' do
  @search = params[:movie_name]
  url = "http://omdbapi.com/?s=#{ @search }"
  @choices = HTTParty.get(url)

  erb :matches
end
