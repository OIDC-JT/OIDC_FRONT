import re
import requests
from urllib.request import urlopen
from bs4 import BeautifulSoup
import json
import pprint


html = urlopen("https://www.ncloud.com/charge/region/ko")
bsObj = BeautifulSoup(html, "html.parser")

index = 1

List = []
menu = ['Id', 'Name', 'CPU', 'MEM', 'Disk', 'MPrice', 'YPrice']

for child in bsObj.find("tbody").children:
    a1 = str(child).replace('Standard-g2','').replace('High CPU-g2','').replace('High Memory-g2','').replace('<tr><th rowspan="5">', '').replace('<td rowspan="5">일반 데이터베이스 서버<br/>개인 홈페이지 운영</td>','').replace('<td rowspan="5">과학적 모델링<br/>게임 서버</td>','').replace('<td rowspan="5">고성능 데이터베이스 서버<br/>대규모 게임 서비스</td>','').replace('<tr><td>','').replace('</td></tr>','').replace(',','').replace('</td><td>', ', ').replace('</th><td>','').replace('원','W')

    a2 = a1.split(',')
    
    if index < 6:
        a2.insert(0, 'Standard-g2')
    elif index < 11:
        a2.insert(0, 'High CPU-g2')
    elif index < 16:
        a2.insert(0, 'High Memory-g2')
    elif index == 16:
        break

    index += 1

    List.append(a2)

# pprint.pprint(List)

for i in range(len(List)) :
    #print(List[i][5])
    num = List[i][5].find("/")
    List[i][5] = List[i][0:num]
    print(List[i][5])
       

