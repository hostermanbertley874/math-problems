import sympy as sp
from sympy import symbols, Eq, solve

# Define the variables
x, y = symbols('x y')

# Create an equation based on the problem statement
equation = Eq(x*y, 10)

# Solve the equation for x in terms of y
solution = solve(equation, x)
print(solution)
