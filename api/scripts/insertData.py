import requests
import sqlite3
from bs4 import BeautifulSoup
import re
import json
from main.models import Kitchen, Review, Restaurant
try:
    def run():
        url = "https://astana.restoran.kz/restaurant/"
        HOST = "https://astana.restoran.kz/"
        HEADERS = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        }
        SERVER_URL = "http://127.0.0.1:8000/api/restaurants/restaurants/"

        def get_html():
            data = requests.get(url, headers=HEADERS)
            html = data.text
            return html

        def parser(page):
            soup = BeautifulSoup(page, 'html.parser')
            result = []

            names = soup.find_all('h3', class_='place-list-card__title')
            addresses = soup.find_all('p', class_='place-list-card__subtitle')

            for i in names:
                result.append({
                    'name': i.text
                })
            for id, item in enumerate(result):
                item.update({
                    'address': addresses[id].text.replace('\u200b', '')
                })

            # get img map review
            for index, item in enumerate(names):
                resHtml = requests.get(HOST+item.a.get('href'))
                resSoup = BeautifulSoup(resHtml.text, 'html.parser')
                dataOfmap = resSoup.find(class_='place-map__map map')
                string = dataOfmap.get('data-point').strip('{}').split(',')
                img = resSoup.find(
                    'div', class_="place-page-fotorama-slide").img.get('data-src')
                description = resSoup.find(
                    'div', class_="text-content").text.replace('\xa0', '') if resSoup.find(
                    'div', class_="text-content") else ''
                review = []
                rating = resSoup.find('span', class_='rating-stars').text
                reviewName = resSoup.findAll(class_='review-card__title')
                reviewDate = resSoup.findAll(
                    class_='review-card__footer')
                reviewText = resSoup.findAll(class_='review-card__text')
                for j in range(0, len(reviewName)):
                    review.append({
                        'name': reviewName[j].text,
                        'date': reviewDate[j].get('content')[:10],
                        'comments': reviewText[j].text,
                        'rating': str(rating)
                    })
                result[index].update({
                    'photograph': img,
                    'description': description,
                    'latitude': string[0][11:].strip('"'),
                    'longitude': string[1][12:].strip('"'),
                    'reviews': review,
                })
                # print(result)

                details = []
                divs = soup.find_all('div', class_='list-unstyled mb-4')
                for index, div in enumerate(divs):
                    details.append([])
                    teg_li = div.find_all('li', class_='d-flex mr-5 mb-3')
                    for item in teg_li:
                        details[index].append(item.text)
                # print(details)
                for index, item in enumerate(result):
                    result[index].update({
                        'price': details[index][1] if len(details[index]) > 1 else '',
                        'kitchen': details[index][0].split(', ') if len(details[index]) > 0 else '',
                        'genre': details[index][2] if len(details[index]) > 2 else ''
                    })
            return result
        page = get_html()
        results = parser(page)
        for res in results:
            reviewIDArr = []
            kitchenIDArr = []
            for review in res['reviews']:
                r, created = Review.objects.get_or_create(
                    name=review['name'], date=review['date'], rating=review['rating'], comments=review['comments'])
                reviewIDArr.append(r)
            for item in res['kitchen']:
                k, created = Kitchen.objects.get_or_create(title=item)
                kitchenIDArr.append(k)
            restoran = Restaurant(name=res['name'], description=res['description'], photograph=res['photograph'], address=res['address'], price=res['price'],
                                  longitude=float(res['longitude']), latitude=float(res['latitude']),  genre=res['genre'])

            restoran.save()
            for rer in reviewIDArr:
                restoran.reviews.add(rer)
            for kit in kitchenIDArr:
                restoran.kitchen.add(kit)
        print('Done')
except:
    print("Either the entry or blog doesn't exist.")
