import csv


def check_file(path):
    if not path.endswith('csv'):
        raise FileNotFoundError(f'Extensão inválida: {path}')

    try:
        with open(path) as file:
            data = csv.reader(file, delimiter=",", quotechar='"')
            return list(data)
    except IOError:
        raise FileNotFoundError(f'Arquivo inexistente: {path}')


def get_maria_dishes(orders):
    requested_dishes = {}

    for order in orders:
        if order[1] in requested_dishes:
            requested_dishes[order[1]] += 1
        else:
            requested_dishes[order[1]] = 1

    return requested_dishes


def get_maria_most_requested_dish(orders):
    requested_dishes = get_maria_dishes(orders)
    most_requested = ""

    for dish in requested_dishes:
        if most_requested in requested_dishes:
            if requested_dishes[most_requested] < requested_dishes[dish]:
                most_requested = dish
        else:
            most_requested = dish
    return most_requested


def analyze_joao_orders(orders):
    days = {"segunda-feira", "terça-feira", "sabado"}
    dishes_available = {"hamburguer", "pizza", "misto-quente", "coxinha"}
    dishes_ordered = set()
    days_joao_go_in_restaurant = set()

    for order in orders:
        dishes_ordered.add(order[1])
        days_joao_go_in_restaurant.add(order[2])

    return (days.difference(days_joao_go_in_restaurant),
            dishes_available.difference(dishes_ordered))


def analyze_log(path_to_file):
    orders = check_file(path_to_file)

    maria_eats = get_maria_most_requested_dish(
        [order for order in orders if order[0] == "maria"])

    arnaldo_ask_hamburguer = len(
        [order for order in orders
            if order[0] == "arnaldo" and order[1] == "hamburguer"])

    joao_never_went, joao_never_ask = analyze_joao_orders(
        [order for order in orders if order[0] == "joao"])

    file = open("./data/mkt_campaign.txt", mode="w")

    file.writelines([
        f"{maria_eats}\n",
        f"{arnaldo_ask_hamburguer}\n",
        f"{joao_never_ask}\n",
        f"{joao_never_went}\n"
    ])
