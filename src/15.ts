import sys

def calculate_square_root(num):
    return num ** 0.5

if __name__ == "__main__":
    input_num = float(input("Enter a number: "))
    result = calculate_square_root(input_num)
    print(f"The square root of {input_num} is {result}")
