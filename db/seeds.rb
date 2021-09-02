puts "Deleting old data..."
# Collection.destroy_all
User.destroy_all
# UserCollection.destroy_all
puts "Done deleting old data!"

puts "Seeding New Data..."

jacob = User.create(name: 'jacob', username: 'jacob1', user_photo: '1234', password: 'jacob')
gracie = User.create(name: 'gracie', username: 'gracie1', user_photo: '5678', password: 'gracie')











puts "DONE SEEDING!!!"
