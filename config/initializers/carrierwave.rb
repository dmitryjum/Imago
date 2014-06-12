CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      =>  ENV['IMAGO_AWS_ACCESS_KEY_ID'],
    :aws_secret_access_key  => ENV['IMAGO_AWS_SECRET_ACCESS_KEY']

    # the keys above are saved in aws.yml file
  }
  config.fog_directory = "bucket.imago"
  config.fog_public     = false                                   # optional, defaults to true
  config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}
end