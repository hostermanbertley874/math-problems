import sympy as sp

def find_min_max(nums):
    min_val = max_val = nums[0]
    for num in nums:
        if num < min_val:
            min_val = num
        elif num > max_val:
            max_val = num
    return min_val, max_val

# Example usage
nums = [1, -2, 3, -4, 5, 6]
min_val, max_val = find_min_max(nums)
print(f"The minimum value is {min_val} and the maximum value is {max_val}")
