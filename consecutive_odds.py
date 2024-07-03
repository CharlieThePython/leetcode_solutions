class Solution(object):
    def threeConsecutiveOdds(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        oddCounter = 0
        for i in arr:
            if i % 2 != 0:
                oddCounter+=1
            else:
                oddCounter = 0
            if oddCounter == 3:
                return True
        return False