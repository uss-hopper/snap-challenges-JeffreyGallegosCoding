//Question 1
function removeVowels('supercalofragilisticexpealidosis') {
	let remove = 'e, a, i, o, u';
}
return removeVowels() - remove;

//Question 1 Answer
//you want to use a for each when you are interacting with every element in an array or string
//try and use at least 4 or 5 lines of code
//Never say I do not know how to do that! Always try
//If you keep working on the problem even after the interview and get back to them is actually pretty good!
function removeVowels(string myString) {
	let noVowels = '';
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	foreach(myString as letter) {
		if(!vowels.contains(letter)) {
			noVowels = noVowels.letter
		}
	}
}
return noVowels;


//Question 2
function greatestNumber(arrayNumbers) {
	arrayNumbers = [];
	for (i>lessNum, i>=greaterNum, i++)
	for each number find lessNum and greaterNum of arrayNumbers;
	if(lessNum < greaterNum)
		return greatestNumber() in arrayNumbers;
}

//Question 2 answer
function greatestNumber(array myNumbers) {
	let maxNumber = '';
	foreach(myNumbers as currentNumber) {
		if(maxNumber == '') {
			maxNumber = currentNumber;
		}
		if (currentNumber > maxNumber) {
			maxNumber = currentNumber;
		}
	}
}
return maxNumber();

//Question 3
function computeFibonacciSequence(arrayNumber) {
	arrayNumber = [];
	for (i=1, i+nextNumberInArray, i++)
	for each {
		number1 + number2 = number3;
	}
	if there is a nextNumberInArray {
		number3 + number4 = number5;
	}
	continue to number100;
}

//Question 3 answer
//Begin with the two initial numbers to begin the process
//Use a for loop
function fibonacciHundred() {
	previousNumber = 1;
	currentNumber = 1;
	let fibonacci = [previousNumber, currentNumber];
	for(i = 2, i <= 100, i++)

	nextNumber = previousNumber + currentNumber
	fibonacci[] = nextNumber;
	previousNumber = currentNumber;
	currentNumber = nextNumber;
}
return fibonacci;