import sympy

def find_solutions(a, b):
    solutions = []
    # Generate possible roots using SymPy's root() function
    roots = sympy.roots(sympy.Symbol('x'), [a, b])
    for r in roots:
        if r.is_integer:
            solutions.append(r)
    return solutions

# Example usage and testing
a_value = 1
b_value = 2
solution = find_solutions(a_value, b_value)
print(f"The solutions are: {solution}")
