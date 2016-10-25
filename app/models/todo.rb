class Todo < ActiveRecord::Base
  validates :body, :title, presence: true
  validates :done, inclusion: { in: [true, false] }
end
