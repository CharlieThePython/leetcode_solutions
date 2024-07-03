class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        myString = str(x)
        return myString == myString[::-1]