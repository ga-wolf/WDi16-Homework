Rails.application.routes.draw do
  root "pages#index"
  get "/index" => 'pages#index'
end
