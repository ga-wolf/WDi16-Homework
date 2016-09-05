# Include appropriate gems
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  "Search page"
  erb(:search)
end

get '/about' do
  erb(:about)
end

get '/results' do
  @movie_name = params[:movie_name]
  url = HTTParty.get "http://www.omdbapi.com/?s=#{@movie_name}"
  @results = url["Search"] || "error"
  if @results == "error"
    @error_message = "No results for '#{@movie_name}'. Please try again"
    erb(:search)
  elsif @results.length > 1
    erb(:results)
  elsif @results.length == 1
    redirect to("/result_show/#{@results[0]['Title']}") # Legendary Badger code. My older code below
    # @name = @results[0]["Title"]
    # @result_show = HTTParty.get "http://www.omdbapi.com/?t=#{@name}"
    # erb(:result_show)
  end
end

get '/result_show/:name' do
  @name = params[:name]
  @result_show = HTTParty.get "http://www.omdbapi.com/?t=#{@name}"
  erb(:result_show)
end

# HM Note: practice
# index = @results.index{|el| el["Title"]=="Jaws"}
# @result_show = @results[index]
