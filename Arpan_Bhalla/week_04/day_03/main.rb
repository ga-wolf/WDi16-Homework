require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb (:calculate)
end

get '/result' do
  @first_number = params[:first_number].to_i
  @second_number = params[:second_number].to_i
  @result =@first_number+@second_number
  "This should show result :#{@result}"
  erb (:result)
end
