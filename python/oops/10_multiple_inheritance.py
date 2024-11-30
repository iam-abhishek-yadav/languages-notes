class Car:
    total_car = 0

    def __init__(self, brand, model):
        self.__brand = brand #private
        self.model = model
        Car.total_car += 1

    def get_brand(self):
        return self.__brand
    
    def full_name(self):
        return f"{self.__brand} {self.model}"
    
    def fuel_type(self):
        return "Petrol or Diesel"
    
class Battery:
    def battery_info(self):
        return "this is battery"

class Engine:
    def engine_info(self):
        return "this is engine"
    
class ElectricCar(Car, Battery, Engine):
    pass

my_tesla = ElectricCar("Tesla", "Model S")
print(my_tesla.battery_info())
print(my_tesla.engine_info())
