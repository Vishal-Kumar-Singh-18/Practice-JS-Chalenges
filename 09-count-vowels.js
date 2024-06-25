// count the number of vowels
function countVowels (str) {
    str = str.toLowerCase();
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    return count;
}
const result = countVowels("hEllO");
console.log(result);