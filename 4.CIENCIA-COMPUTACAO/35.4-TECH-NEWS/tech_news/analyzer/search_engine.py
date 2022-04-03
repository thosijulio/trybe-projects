from tech_news.database import db
import re


# Requisito 6
def search_by_title(title):
    result = []
    regx = re.compile(title, re.IGNORECASE)
    news_list = db.news.find(
        {"title": {"$regex": regx}},
        {"_id": 0, "url": 1, "title": 1})

    for news in news_list:
        print(news)
        result.append((news["title"], news["url"]))

    return result


# Requisito 7
def search_by_date(date):
    """Seu código deve vir aqui"""


# Requisito 8
def search_by_source(source):
    """Seu código deve vir aqui"""


# Requisito 9
def search_by_category(category):
    """Seu código deve vir aqui"""
