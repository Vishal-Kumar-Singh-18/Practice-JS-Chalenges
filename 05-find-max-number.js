// returns maximum number in the array
function maxNumber(arr) {
    // let max = null;
    // for (let index = 0; index < arr.length; index++) {
    //     if (arr[index] > max) {
    //         max = arr[index]
    //     }   
    // }

    let max = arr[o];   // Set to 0
    for (let index = 1; index < arr.length; index++) {  // We can start from 1
        if (arr[index] > max) {
            max = arr[index]
        }   
    }
    return max
}
const num = [1,2,3,4,5]
const result = maxNumber(num)
console.log(result)