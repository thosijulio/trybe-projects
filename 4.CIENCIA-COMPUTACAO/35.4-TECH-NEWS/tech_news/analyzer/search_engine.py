from datetime import datetime
from tech_news.database import db
import re


def generic_news_search_return(key, value):
    return [
        (news["title"], news["url"])
        for news in db.news.find({key: {"$regex": value, "$options": "i"}})
    ]


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
    try:
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        raise ValueError("Data inválida")
    else:
        return generic_news_search_return("timestamp", date)


# Requisito 8
def search_by_source(source):
    return generic_news_search_return("sources", source)


# Requisito 9
def search_by_category(category):
    return generic_news_search_return("categories", category)
