class Image
  include Mongoid::Document
  imbedded_in :user
  field :name, type: String
  field :url, type: String
  validates :name, presence: true
end