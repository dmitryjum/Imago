class ImagesController < ApplicationController
self.before_action(:load_user)
self.before_action(:load_image, {only: [:show, :destroy]})
before_action :authenticate, :authorize
  def index
    @image = Image.new
    @images = @user.images.all.to_a
    # render json: @images
    respond_to do |format|
      format.html {render :index}
      format.json {render json: @images}
    end
  end

  def show
  end

  def create
    @image = @user.images.create(image_params)
    redirect_to user_images_path
  end

  def destroy
    @image.destroy
    redirect_to user_images_path
  end

  private

  def load_user
    return @user = current_user #User.find(params[:user_id])
  end

  def load_image
    return @image = Image.find(params[:_id])
  end

  def image_params
    params.require(:image).permit(:name, :image_url, :attachment, :user_id)
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