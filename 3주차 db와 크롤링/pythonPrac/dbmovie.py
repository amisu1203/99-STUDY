from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.rgsrajn.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

target_movie = db.movies.find_one({'title':'가버나움'})

target_star = target_movie['star']

movies = list(db.movies.find({'star' : target_star}, {'_id' : False}))
for movie in movies :
    print(movie['title'])
    
db.movies.update_one({'title':'가버나움'},{'$set' : {'star' : 0}}) 