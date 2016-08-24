require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'Httparty'

#Home page
get '/'do
  "You have reached the home page"
  erb( :input )
end

  get '/result' do
    "You have reached the result page"
     @user_input = params[:user_input]

    # url = HTTParty.get"http://omdbapi.com?t=#{movie_name}"
    # @user_input = params[:movie_name]
  @result = HTTParty.get"http://omdbapi.com?t=#{@user_input}"
  # t=#{@user_input}"
  # @actors = result["actors"]esult
  erb :output
end
  # @second_number = params[:second_number].to_i
  # @result = @first_number + @second_number
#   HTTParty.get "http://www.omdbapi.com/?t=Satantango
#   "Title"=>"Satantango",
#  "Year"=>"1994",
#  "Rated"=>"N/A",
#  "Released"=>"28 Apr 1994",
#  "Runtime"=>"450 min",
# result["Title"]
 # "Satantango"
 # result["Poster"]
#
#
# end
