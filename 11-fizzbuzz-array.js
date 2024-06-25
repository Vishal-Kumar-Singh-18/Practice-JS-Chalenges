// take a number and returns all number from to that number, if no. is divisible by 3 print fizz, 5 then buzz, both 3 and 5 then fizzbuzz
function fizzBuzzArray(n) {
    let array = []
    for(let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            array.push("FizzBuzz")
        } else if (i % 3 == 0) {
            array.push("Fizz");
        } else if (i % 5 == 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array
}
const num = 15;
const result = fizzBuzzArray(num);
console.log(result);