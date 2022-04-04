import sys
from tech_news.analyzer.search_engine import (
    search_by_category, search_by_date, search_by_source, search_by_title
)
from tech_news.analyzer.ratings import top_5_categories, top_5_news
from tech_news.scraper import get_tech_news

# Requisitos 12 e 13 foram refatorado para diminuir a complexidade
# das funcoes criadas. Para isso, criei uma tupla com todas as
# option, e para usa-la. Criei uma funcao que navega por ela.
# Eu chamo ela na minha funcao principal, e caso de erro
# ela trata como "Opcao invalida".

OPTIONS_CONFIG = {
    0: ("Digite quantas notícias serão buscadas: ",
        lambda amount: get_tech_news(amount)),
    1: ("Digite o título: ",
        lambda title: search_by_title(title)),
    2: ("Digite a data no formato aaaa-mm-dd: ",
        lambda date: search_by_date(date)),
    3: ("Digite a fonte: ",
        lambda source: search_by_source(source)),
    4: ("Digite a categoria: ",
        lambda category: search_by_category(category)),
    5: ("",
        lambda: top_5_news()),
    6: ("",
        lambda: top_5_categories()),
    7: ("", "Encerrando script\n"),
}


def selection_options(option):
    if "Digite" in OPTIONS_CONFIG[option][0]:
        value = input(OPTIONS_CONFIG[option][0])
        print(OPTIONS_CONFIG[option][1](value))
    elif option < 7:
        print(OPTIONS_CONFIG[option][1]())
    else:
        print(OPTIONS_CONFIG[option][1])


def get_option():
    option = input(
        """Selecione uma das opções a seguir:
 0 - Popular o banco com notícias;
 1 - Buscar notícias por título;
 2 - Buscar notícias por data;
 3 - Buscar notícias por fonte;
 4 - Buscar notícias por categoria;
 5 - Listar top 5 notícias;
 6 - Listar top 5 categorias;
 7 - Sair.\n"""
    )

    if option.isdigit():
        if 0 <= int(option) <= 7:
            return int(option)


# Requisito 12
def analyzer_menu():
    try:
        option = get_option()
        selection_options(option)
    except (KeyError, ValueError):
        print("Opção inválida", file=sys.stderr)
