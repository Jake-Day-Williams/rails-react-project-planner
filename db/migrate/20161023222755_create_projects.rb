class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.decimal :project_cost, precision: 8, scale: 2

      t.timestamps null: false
    end
  end
end
