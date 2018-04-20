class CreatePlans < ActiveRecord::Migration[5.0]
  def change
    create_table :plans do |t|
      t.string :title
      t.datetime :due_date

      t.timestamps
    end
  end
end
