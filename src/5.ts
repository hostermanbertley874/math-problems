  `import numpy as np

def get_random_math_problem():
    # Generate two random numbers between 1 and 10
    num1 = np.random.randint(1, 10)
    num2 = np.random.randint(1, 10)
    
    # Choose a random operation (+, -, x, /)
    op = np.random.choice(['+', '-', '*', '/'])
    
    # Evaluate the problem and return the answer
    if op == '+':
        return num1 + num2
    elif op == '-':
        return num1 - num2
    elif op == '*':
        return num1 * num2
    else:
        return num1 / num2`