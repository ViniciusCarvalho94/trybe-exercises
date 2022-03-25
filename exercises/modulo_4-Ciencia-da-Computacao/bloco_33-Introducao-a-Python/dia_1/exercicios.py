# exercise 1
def greater(a, b):
    if a > b:
        return a
    return b

print(greater(5, 2))

# exercise 2
arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7]

def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

print(mean(arrayOfNumbers))

# exercise 3
def draw_square(n):
    for row in range(n):
        print(n * '*')

draw_square(5)

# exercise 4
arrayOfNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
def major_string():
    string = ''
    for name in arrayOfNames:
        if len(name) > len(string): string = name
    return string

print(major_string())

# exercise 5
def painted_costs(meters):
    can_price = 80
    required_liters = meters / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price

print(painted_costs(60))

# exercice 6
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno" 

print(type_of_triangle(5, 2, 9))

# exercice bonus 1
arrayOfNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

def minor_number():
    minor = arrayOfNumbers[0]
    for number in arrayOfNumbers:
        if minor > number: minor = number
    return minor

print(minor_number())

# exercice bonus 2
def draw_right_angled_triangle(n):
    for row in range(n):
        print(row * "*")

draw_right_angled_triangle(6)
