
function findSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return 'Error: Division by zero'; 
    }
    return num1 / num2;
}
const numbers = [10, 5, 2];
console.log(findSum(numbers));
console.log(subtractNumbers(numbers[0], numbers[1])); 
console.log(multiplyNumbers(numbers[1], numbers[2])); 
console.log(divideNumbers(findSum(numbers), numbers[2])); 
