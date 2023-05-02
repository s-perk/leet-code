
/*
  I: string
  O: string (longest palindrome)
  C: if multiple, return first?
  E:

  Strategy:
   - loop through string once and create a tracker of each index
      tracker = {
        a: [2, 5, 8],
        b: [4, 7]
        c: [3]

      }
   - for any with only 1 index, we can ignore as start points
   - each palindrome is a sandwich with sub-palindromes

*/
let longestPalindromeBrute = (s) => {


  let longestPalindrome = ''

  for (var i = 0; i <= s.length; i++) {
    for (var j = 0; j <= s.length; j++) {
      if (i === j) {continue;}

      let string = s.slice(i, j)
      if ((string.length === 1) || (isPalindrome(string))) {
        if (string.length > longestPalindrome.length) {
          longestPalindrome = string
        }
      }
    }

  }

  return longestPalindrome
}
let isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }

  let array = string.split('')
  array = array.reverse()
  let reverseString = array.join('')

  if (string === reverseString) {
    return true
  } else {
    return false
  }



}




let longestPalindrome = (s) => {
  let longest = ''


  // Function to expand core letter(s) to see if outer letters are also palindromes
  let findPalindromeFromCore = (i, j) => {
    while((i >= 0) && (j< s.length) && (s[i] === s[j])) {
      i--
      j++
    }
    return s.slice(i+1, j)
  }


  // Loop through each letter
  for (var i = 0; i < s.length; i++){
    // Each palindrome can have a core of 1 or two, so check both
    let p1 = findPalindromeFromCore(i, i)
    let p2 = findPalindromeFromCore(i, i+1)

    p2 = (p2[0] === p2[p2.length -1]) ? p2 : ''

    let longerPalindrome = (p1.length > p2.length) ? p1 : p2

    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome
    }

  }

  return longest

}





// ===== TESTING =====
console.log(longestPalindrome("a"))
console.log(longestPalindrome("bb"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("raceecar"))
console.log(longestPalindrome("asdfabbaasdf"))
console.log(longestPalindrome("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"))