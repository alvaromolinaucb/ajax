class Person < ActiveRecord::Base
  belongs_to :country
  belongs_to :city
  attr_accessible :name, :country_id, :city_id
end
