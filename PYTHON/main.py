from car import Car
from account import Account

if __name__ == "__main__":

    car = Car("ISB35F", Account("Miguel B","11225555"))
    print(vars(car))
    print(vars(car.driver))
