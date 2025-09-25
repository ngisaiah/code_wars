'''
DESC:
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
'''

def sum_array(arr):
    #removes Max/min & returns sum
    if type(arr) != type(None) and len(arr) >= 2:
        arr.remove(max(arr))
        arr.remove(min(arr))
        return sum(arr)
    else:
        return 0
