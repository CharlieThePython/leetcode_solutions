class Solution(object):
    def isPowerOfTwo(self, n):
        """
        :type n: int
        :rtype: bool
        """
        if n == 1 != 0:
            return True
        if n % 2 != 0:
            return False
        
        while n % 2 == 0 and n != 1 and n > 0:
            n = n/2
        
        if n == 1:
            return True
        return False