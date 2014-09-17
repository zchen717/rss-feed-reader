class ApplicationController < ActionController::Base
  #protect_from_forgery

  def current_user
    return nil unless session[:session_token]
    self.current_user ||= User.find_by_session_token(session[:session_token])
  end
  
  def logged_in?
    !!current_user
  end
  
  def not_logged_in?
    !current_user
  end
  
  def login! user
    user.reset_token!
    session[:session_token] = user.session_token
  end
  
  def logout! 
    current_user.reset_token!
    session[:session_token] = nil
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
