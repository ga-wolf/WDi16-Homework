Rails.application.routes.draw do

  resources :books

  #CREATE STEP - has to go above the Read step
  get '/authors/new' => 'authors#new'
  post '/authors' => 'authors#create'

  #READ STEP
  get '/authors' => 'authors#index' #page with all authors
  get '/authors/:id' => 'authors#show' #individual profile page

  #UPDATE STEP
  get 'authors/:id/edit' => 'authors#edit'
  put 'authors/:id' => 'authors#update'
  patch 'authors/:id' => 'authors#update'
  post 'authors/:id' => 'authors#update'

  delete 'authors/:id/delete' => 'authors#destroy'
end
