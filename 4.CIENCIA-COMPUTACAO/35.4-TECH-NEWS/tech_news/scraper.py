from parsel import Selector
import requests
import time

from tech_news.database import create_news


# Requisito 1
def fetch(url):
    time.sleep(1)
    page = 0
    try:
        page = requests.get(url, timeout=3)
    except requests.ReadTimeout:
        return None
    else:
        if page.status_code == 200:
            return page.text
        else:
            return None


# Requisito 2
def scrape_novidades(html_content):
    selector = Selector(html_content)
    results = selector.css("body .tec--container .tec--main .z--container " +
                           ".z--row .z--w-2-3 .tec--list " +
                           "div article div h3 a::attr(href)").getall()
    return results


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(html_content)
    result = selector.css("body .tec--container .tec--main .z--container " +
                          ".z--row .z--w-2-3 .tec--list " +
                          "> a::attr(href)").get()
    return result


# Requisito 4
def scrape_noticia(html_content):
    scraped_notice = {}
    selector = Selector(html_content)

    scraped_notice["url"] = selector.css(
        "head link[rel=canonical]::attr(href)").get()

    scraped_notice["title"] = selector.css(
        "h1[class=\"tec--article__header__title\"]::text").get()

    scraped_notice["timestamp"] = selector.css(
        "time[id=\"js-article-date\"]::attr(datetime)").get()

    scraped_notice["writer"] = selector.css(
        ".z--font-bold a::text, .z--font-bold::text").get()

    if scraped_notice["writer"] is not None:
        scraped_notice["writer"] = scraped_notice["writer"].strip()
    # Aprendi como estrair numeros de string (likes_count, shares_count)
    # atraves do site:
    # https://www.delftstack.com/pt/howto/python/python-extract-number-from-string/

    shares_count = selector.css(
        "body .tec--container .tec--main .z--container " +
        ".tec--article__body-grid .tec--author > nav > div::text").get()
    if shares_count is None:
        scraped_notice["shares_count"] = 0
    else:
        scraped_notice["shares_count"] = [
            int(number) for number in shares_count.split() if number.isdigit()
        ][0]

    comments_count = selector.css(
        "body .tec--container .tec--main .z--container " +
        ".tec--article__body-grid .tec--author > nav " +
        "> div > button::attr(data-count)"
    ).get()

    if comments_count is None:
        scraped_notice["comments_count"] = 0
    else:
        scraped_notice["comments_count"] = int(comments_count)

    scraped_notice["summary"] = "".join(selector.css(
        "body .tec--container .tec--main .z--container " +
        ".tec--article__body-grid .tec--article__body " +
        "> p:first-child *::text").getall())

    sources = selector.css(
        "a[class$=\"tec--badge\"]::text").getall()
    scraped_notice["sources"] = [
        text.strip() for text in sources if text != " "]

    categories = selector.css(
        "body .tec--container .tec--main .z--container " +
        ".tec--article__body-grid div:nth-last-child(1) " +
        "> #js-categories > a::text").getall()
    scraped_notice["categories"] = [text.strip() for text in categories]

    return scraped_notice


# Requisito 5
def get_tech_news(amount):
    link_page = "https://www.tecmundo.com.br/novidades"
    html_content = fetch(link_page)

    noticies = scrape_novidades(html_content)

    while len(noticies < amount):
        link_page = scrape_next_page_link(html_content)
        html_content = fetch(link_page)
        noticies.append(scrape_novidades(html_content))

    for notice_url in noticies:
        notice = fetch(notice_url)
        create_news(notice)
