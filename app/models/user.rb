class User
  include Mongoid::Document
  # ActiveModel - SecurePassword has to be included separately
  # because of skipped ActiveRecord. AcitveRecord created a connection
  # for 'bcrypt' gem to ActiveModel has_secure_password method
  include ActiveModel::SecurePassword
  has_many :images

  field :name, type: String
  field :email, type: String
  field :password_digest, type: String

  validates :email, presence: true
  validates :name, presence: true
# don't forget to go to mongoid.yml file and uncomment
# raise_not_found_error: false to avoid errors on landing page, when user_id
# not found by session controller or any other controller
  has_secure_password
end
