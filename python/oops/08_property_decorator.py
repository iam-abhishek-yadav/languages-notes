class Car:
    total_car = 0

    def __init__(self, brand, model):
        self.__brand = brand #private
        self.__model = model #private
        Car.total_car += 1

    @property
    def model(self):
        return self.__model

my_car = Car("Tesla", "Model S")
# my_car.model = "City"
# print(my_car.model())
print(my_car.model)