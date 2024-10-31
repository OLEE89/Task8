// Function that returns the sum of numbers in an array
function findSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function that subtracts the second number from the first
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// Function that multiplies two numbers
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Function that divides the first number by the second
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return 'Error: Division by zero'; // Handling division by zero
    }
    return num1 / num2;
}

// Example array with three integers
const numbers = [10, 5, 2];

// Log the results of the functions
console.log(findSum(numbers)); // Displays the sum
console.log(subtractNumbers(numbers[0], numbers[1])); // Displays the result of subtraction
console.log(multiplyNumbers(numbers[1], numbers[2])); // Displays the result of multiplication
console.log(divideNumbers(findSum(numbers), numbers[2])); // Displays the result of division
