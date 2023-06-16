'''
  Problem:
  Given an m x n grid of characters board and a string word, return true if word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



  I: matrix (m x n) - array of arrays of letters
  O: boolean
  C: can't use same letter more than once
  E:

  Strategy:
    - Backtrack/DFS recursion
    - Enter recursion if first letter is equal to our first letter
    - continue until end of word, or no other options
'''

class Solution:
    def exist(self, board, word: str) -> bool:
        ROWS = len(board)
        COLS = len(board[0])
        tracker = set()
        board_letters = {}
        

        # Edge case(ish): check if each letter exists at all before traversing through everything
        for i in range(len(board)):
          for j in range(len(board[0])):
              try:
                  board_letters[board[i][j]] += 1
              except:
                  board_letters[board[i][j]] = 1

        for i in range(len(word)):
          try:
              board_letters[word[i]] -= 1
              if (board_letters[word[i]] < 0): return False
          except:
              return False


        def dfs(row, col, index):
            # Base Cases
            # Out of bounds
            if (row < 0 or row >= ROWS or col < 0 or col >= COLS):
                return False
            # Already checked this index
            if (f'{row}-{col}' in tracker):
                return False
            # Next letter doesn't equal letter on board
            if (board[row][col] != word[index]):
                return False
            # If we've reached the last letter, then we know it's present
            if (index == len(word) - 1):
                return True

            tracker.add(f'{row}-{col}')

            # Recursion
            if (dfs(row, col-1, index+1)): return True # Left
            if (dfs(row, col+1, index+1)): return True # Right
            if (dfs(row-1, col, index+1)): return True # Up
            if (dfs(row+1, col, index+1)): return True # Down

            tracker.remove(f'{row}-{col}')

            return False


        for i, v in enumerate(board):
          for j, w in enumerate(board[i]):
              result = dfs(i, j, 0)
              if result: return True


        return False




# ===== TESTING =====

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
# Output: true
print(Solution.exist(None, [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"))

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
# Output: true

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
# Output: false
# print(Solution.exist(None, [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"))
# Input: board = [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]], word = "ABCB"
# Output: false
print(Solution.exist(None, [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]], word = "AAAAAAAAAAAAAAa"))

