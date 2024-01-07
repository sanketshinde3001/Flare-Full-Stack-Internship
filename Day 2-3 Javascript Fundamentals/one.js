// Given an array of numbers, write a function sumEvenNumbers that calculates the sum of all even numbers in the array. Use a loop to iterate through the array and an if statement to check if a number is even.

let sum=0;
function sumEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ==0) {
            sum += arr[i];
        }       
    }
    return sum;
}

let ans = sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(ans); //12