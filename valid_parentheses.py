class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        valid = {"(": ")", "[": "]", "{": "}"}
        for char in s:
            if char in valid:
                stack.append(char)
            elif stack and char == valid[stack[-1]]:
                stack.pop()
            else:
                return False
        return len(stack) == 0