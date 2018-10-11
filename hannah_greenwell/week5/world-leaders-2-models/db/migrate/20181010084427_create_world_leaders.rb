class CreateWorldLeaders < ActiveRecord::Migration[5.2]
  def change
    create_table :world_leaders do |t|
      t.text :name
      t.text :years_in_office
      t.text :alive
      t.text :image
      t.text :quote
      t.integer :country_id

      t.timestamps
    end
  end
end
