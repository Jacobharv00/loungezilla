puts "Deleting old data..."
Collection.destroy_all
User.destroy_all
UserCollection.destroy_all
puts "Done deleting old data!"


puts "Seeding Users..."
jacob = User.create(name: 'jacob', username: 'jacob1', user_photo: '1234', password: 'jacob')
gracie = User.create(name: 'gracie', username: 'gracie1', user_photo: '5678', password: 'gracie')
puts "Done seeding User!"

puts "Seeding A Collection..."
collection1 = Collection.create(title: 'Jacobs Comedys')
collection2 = Collection.create(title: 'Jacobs Rom Coms')
collection3 = Collection.create(title: 'Jacobs Documentaries')
collection4 = Collection.create(title: 'Jacobs Action Movies')

puts "Done Seeding Collection!"


puts "Seeding A UserCollection..."
jacobsCollection1 = UserCollection.create(user_id: jacob.id, collection_id: collection1.id)
jacobsCollection2 = UserCollection.create(user_id: jacob.id, collection_id: collection2.id)
jacobsCollection3 = UserCollection.create(user_id: jacob.id, collection_id: collection3.id)
jacobsCollection4 = UserCollection.create(user_id: jacob.id, collection_id: collection4.id)

puts "Done Seeding A User Collection!"


puts "Seeding MovieCollections..."
movieCollection1 = MovieCollection.create(movie_db_id: 1, collection_id: collection1.id, movie_db_image: 'Testing!')

puts "Done Seeding MovieCollections!!!"


puts "Seeding Comments"
comment1 = Comment.create(user_id: jacob.id, movie_db_id: 5, comment: 'HELLO!')





puts "DONE SEEDING!!!"
