var WordDictionary = function() {
  this.trie = {}
};

/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {

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
  // word can contain '.' which is a wildcard for any word
  let found = false
  let recursion = (node, s) => {

    // If we have a wildcard, find next legit letter
    if (s[0] === '.') {

      // Loop through each letter and see if found
      for (var letter in node) {
        if (found) {return found}
        // If ends in wildcard, and we have keys left, it's always valid
        if ((s.length === 1) && (node[letter]['isWord'] === true)) {
          found = true
          return
        }
        recursion(node[letter], s.slice(1,s.length))
      }

    }

    // Base
    // If we foud legit combo
    if (found) {return found}

    // If tree node doesn't exist
    if (node[s[0]] === undefined) {
      return
    }

    // If we reach end, and it's not listed as a word
    if (s.length === 1) {
      if (node[s[0]]['isWord'] === true) {
        found = true
      }
      return
    }

    // Recursive
    recursion(node[s[0]], s.slice(1,s.length))
  }

  recursion(this.trie, word)
  return found
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
test.addWord('bad')
test.addWord('dad')
test.addWord('mad')
// console.log(test.search('.ad'))
console.log(test.search('b..'))
console.log(test.search('save'))
console.log(test)