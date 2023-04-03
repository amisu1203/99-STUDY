from flask import Flask, render_template, request, jsonify
application = app = Flask(__name__)

from bson import ObjectId
from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.rgsrajn.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/guestbook", methods=["POST"])
def guestbook_post():
    name_receive = request.form['name_give']
    comment_receive = request.form['comment_give']
    doc = {
        'name' : name_receive,
        'comment' : comment_receive
    }
    db.guestbook.insert_one(doc)
    return jsonify({'msg': '저장 완료!'})

@app.route("/guestbook", methods=["GET"])
def guestbook_get():
    all_guest = list(db.guestbook.find({}))
    for guest in all_guest:
        guest['_id'] = str(guest['_id']) # Convert ObjectId to string
    return jsonify({'result': all_guest})

@app.route("/delete_guestbook", methods=["DELETE"])
def guestbook_delete():
    id_to_delete = request.form['id_give']
    result = db.guestbook.delete_one({'_id': ObjectId(id_to_delete)})
    if result.deleted_count == 1:
        return jsonify({'result': 'success'})
    else:
        return jsonify({'result': 'fail'})

if __name__ == '__main__':
   app.run()