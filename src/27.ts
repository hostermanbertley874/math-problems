def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i:
            break
        i += 2
    else:
        return True

# Example usage
num = 15
if is_prime(num):
    print(f"{num} is a prime number")
else:
    print(f"{num} is not a prime number")
