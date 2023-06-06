var WordDictionary = function() {
  this.trie = {}
};

/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.insert = function(word) {

  let recursion = (node, s) => {
    // Base
    if (s.length === 0) {
      node['isWord'] = true
      return
    }

    // Save the current letter to the current node
    // Keep existing trie if defined, otherwise {}
    node[s[0]] = (node[s[0]] !== undefined) ? node[s[0]] : {}

    // Recursive
    recursion(node[s[0]], s.slice(1,s.length))
  }

  recursion(this.trie, word)
};

/**
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  let recursion = (node, s) => {
    // Base
    // If tree node doesn't exist
    if (node[s[0]] === undefined) {
      return false
    }

    // If we reach end, and it's not listed as a word
    if (s.length === 1) {
      if (node[s[0]]['isWord'] === true) {
        return true
      } else {
        return false
      }
    }

    // Recursive
    return recursion(node[s[0]], s.slice(1,s.length))
  }

  return recursion(this.trie, word)
};

/**
* @param {string} prefix
* @return {boolean}
*/
WordDictionary.prototype.startsWith = function(prefix) {
  let recursion = (node, s) => {
    // Base
    // If tree node doesn't exist
    if (node[s[0]] === undefined) {
      return false
    }

    // If we reach end, then we know it's a prefix; return true
    if (s.length === 1) {
      return true
    }

    // Recursive
    return recursion(node[s[0]], s.slice(1,s.length))
  }

  return recursion(this.trie, prefix)
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/


// === TESTING ===
let test = new WordDictionary()
test.insert('apple')
test.insert('app')
test.insert('save')
console.log(test.search('ap'))
console.log(test.search('save'))
console.log(test)