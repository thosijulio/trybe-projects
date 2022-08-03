class TrackOrders:
    def __init__(self):
        self.orders = {}
        self.days = {}

    def __len__(self):
        if not len(self.orders):
            return len(self.orders)
        else:
            total_orders = 0
            for order in self.orders:
                total_orders += self.orders[order]["amount"]
            return total_orders

    def add_new_order(self, customer, order, day):
        if customer not in self.orders:
            self.orders[customer] = {
                "days": set(day),
                "dishes": {order: 1},
                "amount": 1,
            }
        else:
            self.orders[customer]['dishes'][order] = (
                self.orders[customer]['dishes'].get(order, 0) + 1
            )
            self.orders[customer]["amount"] += 1
            self.orders[customer]['days'].add(day)

        self.days[day] = self.days.get(day, 0) + 1

    def get_most_ordered_dish_per_customer(self, customer):
        print(self.orders)
        return max(
            self.orders[customer]["dishes"],
            key=self.orders[customer]["dishes"].get
        )

    def get_never_ordered_per_customer(self, customer):
        dishes = {"hamburguer", "pizza", "misto-quente", "coxinha"}
        return dishes.difference(set(self.orders[customer]["dishes"].keys()))

    def get_days_never_visited_per_customer(self, customer):
        days = {"segunda-feira", "terça-feira", "sabado"}
        return days.difference(self.orders[customer]["days"])

    def get_busiest_day(self):
        print(self.days)
        return max(self.days, key=self.days.get)

    def get_least_busy_day(self):
        return min(self.days, key=self.days.get)
