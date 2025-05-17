def find_missing_number(numbers):
    """
    This function finds the missing number in the given list of numbers.
    
    Args:
        numbers (list): A list of integers where one integer is missing.
        
    Returns:
        int: The missing number.
    """
    expected_sum = sum(range(1, len(numbers) + 1))
    actual_sum = sum(numbers)
    return expected_sum - actual_sum

# Example usage
numbers = [4, 7, 1, 5]
print(find_missing_number(numbers))  # Output: 8
