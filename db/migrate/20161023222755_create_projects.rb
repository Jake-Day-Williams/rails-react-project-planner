class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.integer :time_estimate

      t.timestamps null: false
    end
  end
end
