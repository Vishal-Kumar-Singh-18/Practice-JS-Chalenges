// check whether the string is plaindrome or not
function checkPalindrome (str) {
    const reverse = (str) => str.split('').reverse().join('')
    const reversedString = reverse(str)
    if (reversedString === str) return true;
    else return false;
}

const result = checkPalindrome("racecar");
console.log(result);

// Optimised
// function checkPalindrome(str) {
//     const reverse = (str) => str.split('').reverse().join('');
//     return reverse(str) === str;
// }

// const result = checkPalindrome("racecar");
// console.log(result); // Output: true
