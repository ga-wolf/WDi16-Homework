require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/choose_movie' do
  erb :choose_movie
end

get '/display_output' do
  @movie = HTTParty.get "http://www.omdbapi.com/?t=#{params[:movie]}"
  @movie_title = @movie["Title"]
  @movie_genre = @movie["Genre"]
  @movie_year = @movie["Year"]
  @movie_poster = @movie["Poster"]
  erb :display_output
end
