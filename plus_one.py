class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        if len(digits) <= 1 and digits[0] != 9:
            digits[0] +=1
            return digits
        n = len(digits)

        if digits[-1] != 9:
            temp =digits.pop(-1)
            digits.append(temp+1)
            return digits
        
        i = n-1
        while i >= 0:
            if digits[i] < 9:
                digits[i] +=1
                return digits
            else:
                digits[i] = 0
            i-=1

        return [1]+digits