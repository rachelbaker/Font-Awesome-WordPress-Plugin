require 'yaml'

icons = YAML.load_file File.expand_path('../build/icons.yml', __FILE__)

puts "[#{icons['icons'].map {|i| i['id'].inspect }.sort.join(', ')}]"