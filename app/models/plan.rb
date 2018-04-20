class Plan < ApplicationRecord

  validates :title, :due_date, presence: true
  validate :due_date_cannot_be_in_the_past

  def due_date_cannot_be_in_the_past
    errors.add("due date", "can't be set in the past") if due_date.present? && due_date < Time.now
  end
end