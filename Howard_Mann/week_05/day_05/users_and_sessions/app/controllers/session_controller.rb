class SessionController < ApplicationController
  def new
  end

  def login
    user = User.find_by(:email => params[:email])
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      flash[:error] = "Login unsuccessful"
      redirect_to login_path
    end
  end

  def logout
    user = User.find(session[:user_id])
    session[:user_id] = nil
    flash[:success] = "#{user.name} succesfully logged out"
    redirect_to login_path
  end
end
