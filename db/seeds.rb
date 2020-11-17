# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
countries = {"Germany"=>81831000,
            "France"=>65447374,
            "Belgium"=>10839905,
            "Netherlands"=>16680000}

countries.each do |country, population|
  Country.create(name: "#{country}", population: "#{population}")
end