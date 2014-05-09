require 'spec_helper'

describe User do
  it { should have_many(:images) }
  it { should validate_presence_of(:email) }
end