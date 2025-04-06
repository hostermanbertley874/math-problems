import sympy
from sympy import symbols, Eq, solve

x = symbols('x')
equation = Eq(2*x**3 - 5*x**2 + 4*x, 0)
solution = solve(equation, x)

print(solution)
