// reverse the string
function reverseString(str) {
    let r = ''
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i]
    }
    return r
}

const result = reverseString("hello");
console.log(result);

// Only for JS
// const reverseString = (str) => str.split('').reverse().join('');
// const result = reverseString("hello");
// console.log(result);