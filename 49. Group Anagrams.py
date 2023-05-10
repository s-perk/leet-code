
'''
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  I: array of strings
  O: array of arrays
     -each subarray is an array of the same anagram
  C: no duplicates
  E:

  Strategy:
    - create an anagrams object where each key is an alphabetically sorted string, and each value is an array
    - loop through strings and push onto array
    - at the end, map object back into array of arrays



'''
class Solution:
  def groupAnagrams(strs):
    anagrams = {}

    # map strings into anagram
    for string in strs:
      key = [l for l in string]
      key.sort()
      key = ''.join(key)

      try:
        anagrams[key].append(string)
      except:
        anagrams[key] = [string]


    array = []
    # after we've grouped anagrams, map back into an array
    for i, key in enumerate(anagrams):
      array.append(anagrams[key])

    return array



print(Solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
