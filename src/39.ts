import sympy as sp

def calculate_expression(x):
    result = x**2 + 5*x + 6
    return result

expression = "x^2 + 5*x + 6"
result = calculate_expression(expression)
print(result)
