'''
DESC: Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
'''

def solution(nums):
    # if list 'Null' return empty
    if nums == None: 
        return []
    else:
        return sorted(nums)
