def main():
    import random
    import math

    # Example problem 1: Simple equation solving
    x = random.randint(0, 10)
    y = random.randint(0, 10)
    if x + y == 7:
        print("Solution:", (x, y))
    else:
        print("No solution")

    # Example problem 2: Prime number checker
    def is_prime(num):
        if num <= 1:
            return False
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                return False
        return True

    print("Is 7 a prime number?", is_prime(7))

if __name__ == "__main__":
    main()
