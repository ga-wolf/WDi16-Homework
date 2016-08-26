class UsersController < ApplicationController
  before_action :authorize_admin, :only => [:index]
  # Only admin is authorized to see all users (index page)

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    user = User.create( user_params )
    if user.save
      redirect_to user_path( user )
    else
      render :new
    end
  end

  def edit
    if @current_user.present? && @current_user.admin
      @user = User.find(params[:id])
    elsif @current_user.present? && @current_user.admin == false
      @user = @current_user
    else
      flash[:error] = "Don't even think about it"
      redirect_to login_path
    end
  end

  def update
    user = User.find( params[:id] )
    user.update( user_params )
    redirect_to user_path( user )
  end

  def destroy
    user = User.find( params[:id] )
    user.destroy
    redirect_to users_path
  end

  private
    def user_params
      params.require( :user ).permit(:name, :email, :password, :password_confirmation)
    end

    def authorize_admin
      unless @current_user.present? && @current_user.admin
        flash[:error] = "You are not authorized to view that, only admin is"
        redirect_to login_path
      end
    end
end
