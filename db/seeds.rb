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
originals = Collection.create(title: 'Originals')
trending = Collection.create(title: 'Trending')
topRated = Collection.create(title: 'Top Rated')
actionMovies = Collection.create(title: 'Action Movies')
comedys = Collection.create(title: 'Comedys')
horrors = Collection.create(title: 'Horrors')
romance = Collection.create(title: 'Romance')
documentaries = Collection.create(title: 'Documentaries')
puts "Done Seeding Collection!"


puts "Seeding A UserCollection..."
jacobsCollection1 = UserCollection.create(user_id: jacob.id, collection_id: comedys.id)
jacobsCollection2 = UserCollection.create(user_id: jacob.id, collection_id: romance.id)
jacobsCollection3 = UserCollection.create(user_id: gracie.id, collection_id: documentaries.id)
jacobsCollection4 = UserCollection.create(user_id: gracie.id, collection_id: actionMovies.id)

puts "Done Seeding A User Collection!"


# puts "Seeding MovieCollections..."
# movieCollection1 = MovieCollection.create(movie_db_id: 1, collection_id: collection1.id, movie_db_image: 'Test 1')
# MovieCollection2 = MovieCollection.create(movie_db_id: 2, collection_id: collection2.id, movie_db_image: 'Test 2')

# puts "Done Seeding MovieCollections!!!"


puts "Seeding Comments"
comment1 = Comment.create(user_id: jacob.id, movie_db_id: 5, comment: 'HELLO!')





puts "DONE SEEDING!!!"
