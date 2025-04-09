def calculate_square_root(num):
    if num < 0:
        raise ValueError("Cannot compute square root of a negative number.")
    else:
        return num ** 0.5

try:
    result = calculate_square_root(-4)
except ValueError as e:
    print(e)
