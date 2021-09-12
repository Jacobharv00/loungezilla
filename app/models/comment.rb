class Comment < ApplicationRecord
  belongs_to :user

  validates :comment, presence: true, length: { in: 6..25 }
end
