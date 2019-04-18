//Attempt 1
i = 1;
if(amountInGrams === (i * 1000)){
	output correctMg
}
else if(amountInGrams !== (i * 1000)){
	output incorrectMg
}

function sumPositiveFactors(var1) {
	return
};


//Answer

function convertToGrams(weight, units) {
	if (units === "lbs") {
		return weight * 453.592;
	}
	else if (units === "oz") {
		return weight * 28.349;
	}
	else if (units === "kg") {
		return weight * 1000;
	}
	else if (units === "mg") {
		return weight / 1000;
	}
	else if (units === "g") {
		return weight;
	}
}

console.log(convertToGrams(8, "lbs"));
console.log(convertToGrams(8, "oz"));
console.log(convertToGrams(8, "kg"));
console.log(convertToGrams(8, "mg"));
console.log(convertToGrams(8, "g"));

//Answer 2


function sumFactors(number) {
	sum = 0;
	for(i = number; i > 0; i--){
		if (number % 1 ===0) {
			sum = i + sum;
		}
	}
	return sum;
};

//Test functions

console.log(sumFactors(1));
console.log(sumFactors(4));
console.log(sumFactors(12));