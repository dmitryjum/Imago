class User
  include Mongoid::Document
  has_many :images

  field :name, type: String
  field :email, type: String
  field :password_digest, type: String

  validates :email, presence: true
  has_secure_password
end
