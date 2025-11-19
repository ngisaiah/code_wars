// Desc: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// EX: when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// Solution:

def sum_two_smallest_numbers(numbers):
    # sort from lowers to highest return sum of 2 lowest numbers
    numbers.sort()
    return numbers[0] + numbers[1]
