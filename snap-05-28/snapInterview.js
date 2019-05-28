
//Check out hacker rank to get some good practice interview questions

//Question 1
array1 = [1, 2, 2, 4, 5, 5, 7];

for (i=0, i<=7, i++1)
	int count;

//Answer to Question 1
function (array numbers){
	var counts = [];
	foreach element in numbers do {
		counts[element] = counts[element] + 1;
	}
}



//Question 2
array2 = [5, 26];

i=0;
while(i <= 26) {
	if(i/2 === even)
		output fizz;

	else if(i/3 === )
		output buzz;

	else if(i === fizz and buzz)
		output baz;
}

//Answer to question 2
//Use modulo because it indicates if there is a remainder so you want the remainder to be indicated with 0 to output
function fizzBuzz (num1, num2)
find smaller of(num1, num2) => lesserNum
take other number => greaterNum
for(i= lesserNum, i<=greaterNum, i++) {
	let out = '';
	if (i%2 == 0) {
		out = out + fizz;
	}
	if (i%3 == 0) {
		out = out + buzz;
	}
	if(out == 'fizzBuzz') {
		out = baz;
	}

	output out;
}

//can also do - starts after the for(i = lesserNum,
if (1%2 == 0 && 1%3 == 0) {
	output baz;
} else {
	if (i%2 == 0) {
		output fizz;
	}
	if (i%3 == 0) {
		output buzz;
	}
}

//for question 3
//inside out - remember content is in the center then padding, then border, then margin
//the outside numbers is the content added together with all of the paddings, borders, and margins


