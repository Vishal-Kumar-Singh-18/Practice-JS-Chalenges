// returns the string by cpitalizing the first letter only
function titleCase(str) {
    let r = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        r += str[i];
    }
    return r
}

const result = titleCase("this is Vishal");
console.log(result);

// for JS only
// function titleCase(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// const result = titleCase("this is Vishal");
// console.log(result); // Output: "This is Vishal"
