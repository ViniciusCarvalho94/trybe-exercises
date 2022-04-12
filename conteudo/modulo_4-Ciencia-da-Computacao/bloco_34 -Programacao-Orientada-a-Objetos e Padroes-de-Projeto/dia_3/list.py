list = ['morango', 'abacaxi', 'maca', 'banana', 'melancia']

class fruits:
    def __iter__(self):
        self.__list = list
        return self

    def __next__(self):
        fruit_list = self.__list
        for fruit in fruit_list:
            return fruit

x = fruits()
i = iter(x)

print(next(i))
