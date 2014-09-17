class Api::UsersController < ApplicationController
  
  before_filter :logged_in?,     except: [ :create ]
  before_filter :not_logged_in?, only:   [ :create ]
  
  def create
    user = User.new(user_params)
    
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end
  
  def update
    user = User.find(params[:id])
    
    if user.update(user_parms)
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end
  
  def destroy
    user = User.find(params[:id])
    
    if user.destroy()
      render json: user
    else
      render status: 404
    end
  end
  
  def show    
    user = User.find(params[:id])
    
    if user
      render json: user
    else
      render status: 404
    end
  end

end