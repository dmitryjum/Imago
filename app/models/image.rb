class Image
  include Mongoid::Document
  belongs_to :user
  field :name, type: String
  field :image_url, type: String
  validates :name, presence: true
end