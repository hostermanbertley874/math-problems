import random 
def get_random_math_problem(min=1,max=10): 
    op = ['+','-','*','/'] 
    num1 = random.randint(min, max) 
    num2 = random.randint(min, max) 
    sign = random.choice(op) 
    problem = f"{num1} {sign} {num2}" 
    return problem