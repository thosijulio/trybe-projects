from collections import Counter
from tech_news.database import find_news


# Requisito 10
def top_5_news():
    all_news = [
        (
            news["shares_count"] + news["comments_count"],
            news["title"], news["url"])
        for news in find_news()
    ]

    # Como ordenar lista de tuplas utilizando o metodo sort:
    # https://www.delftstack.com/pt/howto/python/python-sort-list-of-tuples/#:~:text=elemento%20nas%20tuplas.-,Use%20a%20fun%C3%A7%C3%A3o%20list.,em%20ordem%20crescente%20ou%20decrescente.

    all_news.sort(key=lambda x: x[0], reverse=1)

    return [(news[1], news[2]) for news in all_news][:5]


# Requisito 11
def top_5_categories():
    categories = []
    all_news = find_news()
    for news in all_news:
        categories.extend(news["categories"])

    categories.sort()
    counter_categories = Counter(categories).most_common(5)
    return [category[0] for category in counter_categories]
