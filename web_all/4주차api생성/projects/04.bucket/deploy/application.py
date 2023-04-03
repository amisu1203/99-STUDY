from flask import Flask, render_template, request, jsonify
from bson import ObjectId
from pymongo import MongoClient
import certifi

application = app = Flask(__name__)

ca = certifi.where()
client = MongoClient('mongodb+srv://sparta:test@cluster0.rgsrajn.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

# api
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/bucket", methods=["POST"])
def bucket_post():
    bucket_receive = request.form['bucket_give']

    bucket_list = list(db.bucket.find({}, {'_id': False}))
    count = len(bucket_list) + 1
    doc = {
        'num':count,  #버킷 등록 시, db에서 특정 버킷을 찾기 위해 'num' 이라는 고유 값 부여
        'bucket' :bucket_receive,
        'done' : 0   #'done' key값을 추가 해 각 버킷의 완료 상태 구분(0 = 미완료, 1 = 완료)
    }
    db.bucket.insert_one(doc)
    return jsonify({'msg': '저장 완료!'})
    
@app.route("/bucket", methods=["GET"])
def bucket_get():
    all_buckets = list(db.bucket.find({}, {'_id': False}))
    return jsonify({'result': all_buckets})

@app.route("/api/complete_bucket", methods=["POST"])
def complete_bucket():
    bucket_receive = request.form['bucket_give']
    txt_bucket_complete = bucket_receive+' 완료!!'
    db.bucket.update_one({'bucket':bucket_receive},{'$set':{'done':1,'bucket':txt_bucket_complete}})
    return jsonify({'message':'완료했습니다!'})



if __name__ == '__main__':
    app.run()
    
    
# # 저장 - 예시
# doc = {'name':'bobby','age':21}
# db.users.insert_one(doc)

# # 한 개 찾기 - 예시
# user = db.users.find_one({'name':'bobby'})

# # 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
# all_users = list(db.users.find({},{'_id':False}))

# # 바꾸기 - 예시
# db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# # 지우기 - 예시
# db.users.delete_one({'name':'bobby'})