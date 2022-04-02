from parsel import Selector
import requests
import time


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
    """Seu código deve vir aqui"""


# Requisito 5
def get_tech_news(amount):
    """Seu código deve vir aqui"""
