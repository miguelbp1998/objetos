from car import Car
import json

if __name__ == "__main__":

    car = Car()
    car.driver = "Tatiana Rodriguez"
    car.license = "HHW234"
    car.passenger = 3
    print(vars(car))

    car2 = Car()
    car2.driver = "Juan Buendia"
    car2.license = "JSJ23N"
    car2.passenger = 1
    print(vars(car2))

    car3 = Car()
    car3.driver = "Miguel Buendia"
    car3.license = "ISB342"
    car3.passenger = 7;
    print(vars(car))
