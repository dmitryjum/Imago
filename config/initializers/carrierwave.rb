CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => 'AKIAJGRRSSA7EGQNNL5A',
    :aws_secret_access_key  => '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'
  }
  config.fog_directory = "bucket.imago"
  config.fog_public     = false                                   # optional, defaults to true
  config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}
end