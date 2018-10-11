class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.text :name
      t.text :capital
      t.integer :area
      t.text :image

      t.timestamps
    end
  end
end
