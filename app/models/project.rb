class Project < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  validates :time_estimate, presence: true
  validates :time_estimate, numericality: true
end
