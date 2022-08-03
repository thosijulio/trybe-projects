class InventoryControl:
    INGREDIENTS = {
        'hamburguer': ['pao', 'carne', 'queijo'],
        'pizza': ['massa', 'queijo', 'molho'],
        'misto-quente': ['pao', 'queijo', 'presunto'],
        'coxinha': ['massa', 'frango'],
    }
    MINIMUM_INVENTORY = {
        'pao': 50,
        'carne': 50,
        'queijo': 100,
        'molho': 50,
        'presunto': 50,
        'massa': 50,
        'frango': 50,
    }

    def __init__(self):
        self.orders = dict()
        self.inventory = dict(self.MINIMUM_INVENTORY)

    def update_ingredients(self, order):
        for ingredient in self.INGREDIENTS[order]:
            self.inventory[ingredient] -= 1

    def add_new_order(self, customer, order, day):
        if order in self.get_available_dishes():
            if customer not in self.orders:
                self.orders[customer] = {
                    'dishes': {order: 1},
                    'days': set(day),
                    'amount': 1,
                }
            else:
                self.orders[customer]["dishes"][order] = (
                    self.orders[customer]["dishes"].get(order, 0) + 1)
                self.orders[customer]["days"].add(day)
                self.orders[customer]["amount"] += 1

            self.update_ingredients(order)
        else:
            return False

    def get_quantities_to_buy(self):
        quantity_to_buy = dict()
        for ingredient in self.inventory:
            quantity_to_buy[ingredient] = (
                self.MINIMUM_INVENTORY[ingredient] - self.inventory[ingredient]
            )
        return quantity_to_buy

    def get_available_dishes(self):
        available_dishes = set()
        for dish in self.INGREDIENTS:
            dish_is_available = True
            for ingredient in self.INGREDIENTS[dish]:
                if self.inventory[ingredient] < 1:
                    dish_is_available = False

            if dish_is_available:
                available_dishes.add(dish)
        return available_dishes