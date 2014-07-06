require 'spec_helper'
require 'rspec-rails'
require 'capybara/rails'

feature "a user can join Imago" do
  let(:user){ FactoryGirl.create(:user) }
  let(:user1){ FactoryGirl.create(:user) }

  it "creates a new user" do
    visit "/"
    click_link "Sign up"
    fill_in :user_name, with: user.name
    fill_in :user_password, with: user.password
    fill_in :user_password_confirmation, with: user.password_confirmation
    fill_in :user_email, with: user.email
    click_button "Join!"

      expect(page).to have_content "Welcome #{user.name}!"

    click_link "Log Out, #{user.name}"

  
    within ".login" do
      expect(page).to have_content "Email"
    end

    login(user)

      expect(page).to have_content "Welcome #{user.name}!"

    
    click_link "Log Out, #{user.name}"

    login(user1)

      expect(page).to_not have_content "Welcome #{user.name}!"
      expect(page).to have_content "Welcome #{user1.name}"

    click_link "Log Out, #{user1.name}"
  end

  def login(user)
    fill_in :email, with: user.email
    fill_in :password, with: user.password
    click_button "Log in"
  end
end


