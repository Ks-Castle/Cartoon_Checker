import requests
import bs4

def get_info():
    whole_source= ""
    arr = []
    i = 0
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit 537.36 (KHTML, like Gecko) Chrome",
        "Accept": "text_html,application_xhtml+xml,application_xml;q=0.9,image_webp,**/**;q=0.8"
    }
    for page_number in range(1, 21):
        URL = "https://11toon61.com/bbs/board.php?bo_table=toon_c&is=0&sord=0&type=upd&page=" + str(page_number)
        response = requests.get(URL, headers=headers, verify=False)
        whole_source = whole_source + response.text
        soup = bs4.BeautifulSoup(whole_source, 'html.parser')
        title = soup.select("#free-genre-list > li > a > div.homelist-title > span")
        time = soup.select("#free-genre-list > li > a > div.homelist-genre > span")
        link = soup.select("#free-genre-list > li> a[href]")
        while i < len(title) - 1:
            i += 1
            arr.append({
            'title': title[i].text,
            'time': time[i].text.split(' '),
            'link': "https://11toon61.com/" + link[i]['href']
        })
    print('fetching data is okay')
    return arr