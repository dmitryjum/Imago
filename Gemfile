source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.3'


# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

gem 'rails_12factor'

# Zurb Foundation CSS framework, helps with grids and styles
gem 'foundation-rails'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

# Gon, for simple varible passing from Ruby to JS
# gem 'gon'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# for debugging
group :development, :test do
  gem 'pry-rails'

  # unit testing frameworks
  gem 'rspec-rails'#, '~> 3.0.0.beta2' # PJ: KEEP IT LIKE THIS!
  gem 'jasmine'
  # gem 'mongoid-rspec'

  # acceptance testing
  gem 'capybara'
  gem 'launchy'

  # test helper libraries
  # gem 'shoulda-matchers', :require => false
  gem 'factory_girl_rails'
  gem 'ffaker', '~> 1.2.0'
end

# ORM for MongoDB
gem "mongoid", git: 'git://github.com/mongoid/mongoid.git'
gem 'bson_ext'

# carrierwave for mongoid to upload files
gem 'carrierwave-mongoid', :require => 'carrierwave/mongoid'

# Fog for Amazon S3 with  carrier wave
gem "fog", "~> 1.3.1" 

# mongoid grid that needed for carrierwave
gem 'mongoid-grid_fs', github: 'ahoward/mongoid-grid_fs' 

# Use ActiveModel has_secure_password
gem 'bcrypt-ruby'# '~> 3.1.2'

# Image magick gem for image manipulation
gem 'rmagick'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
