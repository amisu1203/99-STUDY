from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://sparta:test@cluster0.rgsrajn.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta
import requests
from bs4 import BeautifulSoup

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')
trs = soup.select("#old_content > table > tbody > tr")
for tr in trs :
    title = tr.select_one("td.title > div > a")
    if title is not None :
        title = title.text
        rank = tr.select_one("td:nth-child(1) > img")["alt"]
        star = tr.select_one("td.point").text
        print(rank, title, star)
        doc = {
            'title' : title,
            'rank' : rank,
            'star' : star,
        }
        db.movies.insert_one(doc)
    

