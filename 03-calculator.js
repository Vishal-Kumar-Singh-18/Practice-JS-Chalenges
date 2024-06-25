// make a calculator
function calculator (a,b,op) {
    if (op == "+") return a + b;
    else if (op === "-") return a - b;
    else if (op ==="*") return a * b;
    else if (op === "/") return a / b;
    else return "Invalid operator";
}

const num1 = 5;
const num2 = 2;
const opr = "//";
const result = calculator(num1, num2, opr);
console.log(result);