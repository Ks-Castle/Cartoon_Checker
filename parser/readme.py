from datetime import datetime
import json
from pprint import pprint

i = 0
arr = []

def get_timestamp():
    return datetime.today().strftime('%Y.%m.%d')

def get_json():
    with open("../mockup/data.json") as f:
        data = json.load(f)
        return data
print(arr)
data = get_json()
for page_number in data:
    arr.append({
        'title': data[i]['title'],
        'time': data[i]['time']
    })
    i += 1
   
def inject_result_to_readme():
    with open('../Readme.md') as readme:
        timestamp = get_timestamp()
        title01 = [s for s in arr if "원피스" in s['title']][0]['title']
        title02 = [s for s in arr if "원펀맨" in s['title']][0]['title']
        title03 = [s for s in arr if "피안도" in s['title']][0]['title']
        title04 = [s for s in arr if "켄간" in s['title']][0]['title']
        time01 = [s for s in arr if "원피스" in s['title']][0]['time'][len([s for s in arr if "원피스" in s['title']][0]['time'])-1]
        time02 = [s for s in arr if "원펀맨" in s['title']][0]['time'][len([s for s in arr if "원펀맨" in s['title']][0]['time'])-1]
        time03 = [s for s in arr if "피안도" in s['title']][0]['time'][len([s for s in arr if "피안도" in s['title']][0]['time'])-1]
        time04 = [s for s in arr if "켄간" in s['title']][0]['time'][len([s for s in arr if "켄간" in s['title']][0]['time'])-1]
        
        updated_content = ( f'> Auto Updated Date: {timestamp}\n\n ### 01.{title01}, {time01[0:5]} \n ### 02.{title02}, {time02[0:5]} \n ### 03.{title03}, {time03[0:5]} \n ### 04.{title04}, {time04[0:5]} ')
        print('readme update is okay')
    with open('../Readme.md', 'w') as readme:
        readme.write(updated_content)
        
        
inject_result_to_readme()