class Solution:
    def lengthOfLastWord(self, s: str):
        array = s.split(' ')
        while (array[-1] == ''):
            array.pop()


        return array[-1].__len__()