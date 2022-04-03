from tech_news.analyzer.search_engine import (
    search_by_category, search_by_date, search_by_source, search_by_title
)
from tech_news.analyzer.ratings import top_5_categories, top_5_news
from tech_news.scraper import get_tech_news


def search_by_menu(option):
    if option == 1:
        search = input("Digite o título:")
        return search_by_title(search)
    elif option == 2:
        search = input("Digite a data no formato aaaa-mm-dd:")
        return search_by_date(search)
    elif option == 3:
        search = input("Digite a fonte:")
        return search_by_source(search)
    else:
        search = input("Digite a categoria:")
        return search_by_category(search)


def search_by_top_ratings(option):
    if option == 5:
        return top_5_news()
    else:
        return top_5_categories()


# Requisito 12
def analyzer_menu():
    option = int(input(
        """Selecione uma das opções a seguir:
 0 - Popular o banco com notícias;
 1 - Buscar notícias por título;
 2 - Buscar notícias por data;
 3 - Buscar notícias por fonte;
 4 - Buscar notícias por categoria;
 5 - Listar top 5 notícias;
 6 - Listar top 5 categorias;
 7 - Sair.\n"""
    ))
    if option == 0:
        amount = input("Digite quantas notícias serão buscadas:")
        get_tech_news(amount)
        analyzer_menu()
    elif 1 <= option <= 4:
        return search_by_menu(option)
    elif 5 <= option <= 6:
        return search_by_top_ratings(option)
