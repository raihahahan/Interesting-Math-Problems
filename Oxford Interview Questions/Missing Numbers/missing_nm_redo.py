# redo as previous implementation is incorrect
from random import seed, random
from math import floor

def main():
    n = int(input("n:"))
    seed()
    ls = list()
    for i in range(n):
       ls.append(i)
    ls.remove(floor((random()*n)))
    print(missing_numbers(n, ls))
    return

def AP(n):
    # sum of 0 to n - 1
    return (n*(n-1))/2

def sumList(ls):
    count = 0
    for i in ls:
        count += i
    return count
        
def missing_numbers(n, ls):
    return int(AP(n) - sumList(ls))

if __name__ == "__main__":
    main()