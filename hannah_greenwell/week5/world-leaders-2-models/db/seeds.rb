# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


### COUNTRIES
Country.destroy_all

italy = Country.create(name: "Italy", capital: "Rome", area: 301340, image: "http://www.lonelyplanet.com/maps/europe/italy/map_of_italy.jpg")

japan = Country.create(name: "Japan", capital: "Tokyo", area: 377973, image: "http://www.lonelyplanet.com/maps/asia/japan/map_of_japan.jpg")

australia = Country.create(name: "Australia", capital: "Canberra", area: 7692024, image: "http://www.lonelyplanet.com/maps/pacific/australia/map_of_australia.jpg")

china = Country.create(name: "China", capital: "Beijing", area: 9596961, image: "http://www.lonelyplanet.com/maps/asia/china/map_of_china.jpg")

puts "Created #{Country.all.length} countries"
puts Country.pluck(:name).join(', ')


### WORLD LEADERS
WorldLeader.destroy_all

WorldLeader.create name: "Shinzo Abe", years_in_office: "2012-present", alive: "Still Kicking", image: "https://timedotcom.files.wordpress.com/2017/07/what-behind-shinzo-abe-plummeting-popularity.jpg", quote: "There isn't anything anybody wants that is for any other reason than that they think they would feel better in having it.", country_id: japan.id

WorldLeader.create name: "Harold Holt", years_in_office: "1966-1967", alive: "unknown", image: "http://www.abc.net.au/news/image/712224-3x2-940x627.jpg", quote: "And so, sir, in the lonelier and perhaps even more disheartening moments which come to any national leader, I hope there will be a corner of your mind and heart which takes cheer from the fact that you have an admiring friend, a staunch friend that will be all the way with LBJ.", country_id: australia.id

WorldLeader.create name: "Empress Wu Zetian", years_in_office: "690-705", alive:"Kicked the Bucket", image: "https://estaticos.muyhistoria.es/media/cache/400x300_thumb/uploads/images/article/56cc22e85bafe8f1aff52926/145600-cuadrada_0.jpg", quote: "Remember, when one's aim is to achieve greatness... everyone is expendable.", country_id: china.id

WorldLeader.create name: "Silvio Berlusconi", years_in_office: "2008-2011", alive:"Still Kicking", image: "https://sa.kapamilya.com/absnews/abscbnnews/media/2018/tvpatrol/01/06/silvio-berlusconi.jpg", quote: "I have little hair because my brain is so big it pushes the hair out.", country_id: italy.id

puts "Created #{WorldLeader.all.length} world leaders"
puts WorldLeader.pluck(:name).join(', ')


### USERS
User.destroy_all

User.create name: "Hannah", email: "hannah@gmail.com", password: "chicken"
User.create name: "Jesi", email: "jesi@gmail.com", password: "chicken"
User.create name: "Claire", email: "claire@gmail.com", password: "chicken"

puts "Created #{User.all.length} users"
