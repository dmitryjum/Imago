class WelcomeController < ApplicationController
  
  def index
  end

  def about_author
    render :about_author
  end

  def about_app
    render :about_app
  end
  
end