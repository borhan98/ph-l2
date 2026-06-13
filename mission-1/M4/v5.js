// Palindrome checker

// Method => 1
const isPalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = normalizedStr.split('').reverse().join('');

  if (normalizedStr === reversedStr) {
    return true;
  }

  return false;
}
// console.log(isPalindrome('level'));


// Method => 2
const isPalindromeTwoPointer = (str) => {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = normalizedStr.length - 1;

  while (left < right) {
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
console.log(isPalindromeTwoPointer('level'));