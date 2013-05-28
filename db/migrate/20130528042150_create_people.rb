class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.references :country
      t.references :city

      t.timestamps
    end
    add_index :people, :country_id
    add_index :people, :city_id
  end
end
