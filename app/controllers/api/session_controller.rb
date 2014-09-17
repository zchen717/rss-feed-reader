class Api::SessionController < ApplicationController
  
  before_filter :is_current_user?, only: [ :destroy ]
  before_filter :not_logged_in?,   only: [ :create ]
  
  def create
    # fail
    user = User.find_by_credentials(user_params[:username], user_params[:password])
    
    puts "Loggin in #{user}"
    puts params
    
    if user
      login! user
      render json: user
    else
      render json: { error: "invalid credentials" }, status: 422
    end
  end
  
  def destroy
    user = current_user
    
    if user
      logout!
      render json: user
    else
      render status: 404
    end
  end
  
  private
  
  def is_current_user?
    return nil unless current_user
    params[:username] == current_user.username
  end
  
end