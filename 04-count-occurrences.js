// returns count of the char in the string
function countOccurrences (str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }

    // for (const itr of str) {
    //     if (itr === char) {
    //         count++
    //     }
    // }
    return count
}

const result = countOccurrences("hello", 'h')
console.log(result);