class Image
  include Mongoid::Document
  belongs_to :user
  field :name, type: String
  field :url, type: String
  validates_presence_of :user
end