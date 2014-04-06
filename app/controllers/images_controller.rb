class ImagesController < ApplicationController

  def index
    @images = @user.images.all
  end

  def create
    @image = @user.images.create(image_params)
    render :index
  end

  def destroy
    @image.destroy
    render :index
  end

  private

  def load_user
    return @user = User.find(params[:user_id])
  end

  def load_image
    
  end

  def image_params
  end

  def authenticate
    unless logged_in?
      redirect_to root_path
    end
  end


  def authorize
    unless current_user == @user
      redirect_to root_path
    end
  end

end