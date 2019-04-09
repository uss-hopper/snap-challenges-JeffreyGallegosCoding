

/*function result(value1, value2) {
	let value1 = 25;
	let value2 = 4;
	let varMultiple = value1 * value2;
	console.log(varMultiple)
}

result(11, 5);*/

/**
 * Take two numbers and multiply them.
 *
 * @param int firstNumber One number to multiply.
 * @param int secondNumber The other number to multiply.
 *@return int The product of the two numbers.
 */
function multiplyNumbers (firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

let myNumber = -5;

console.log(multiplyNumbers(5, 10));
console.log(multiplyNumbers(-2, myNumber));

/**
 *Take two strings(Names) and concatenate them into a full name.
 *A string are a collection of any characters in single of double quotes.
 *
 *@param string firstName The given name to concatenate
 * @param string lastName The family name to concatenate.
 * @return string The full name of our person.
 */

function getFullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}

console.log(getFullName("Paul", "Schulzetenberg"));