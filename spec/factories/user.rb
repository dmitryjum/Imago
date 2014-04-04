FactoryGirl.define do
  factory :user do 
    name { Faker::Name.first_name }
    password "getcarded"
    password_confirmation "getcarded"
    email { Faker::Internet.email }
  end
end