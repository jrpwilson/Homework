/*
* Please follow the instructions carefully.
*
* When a problem says "send 'foo' to the console that means you would write
*
* 	console.log('foo');
*
* I may also say "send the variable x to the console" in which case you'd write
*
* 	console.log(x)
*
* Note: If you have multiple variables x, y, z you can send all of them to the console like so
*
* 	console.log(x, y, z)
*/

// Problem 1) Using JavaScript comments, write your name and today's date below

/* 	
*	Rick Wilson 
*	September 17, 2013
*/

// Problem 2) Create separate variables to store the following.
// Send all variables to the console.

// 	Your e-mail address
// 	Your major
// 	Your favorite text editor
// 	A zip code
// 	The value of pi up to 5 decimal places (use Google to find the value)
// The total cost of a 10 dollar book plus 5% sales tax
// Whether or not the light switch is on
// Whether or not Superman can fly

var email,
	major,
	editor,
	zip,
	pi,
	total,
	lighton,
	superfly;

email = "jrpwils@gmail.com";
major = "Web Development";
editor = "Sublime Text";
zip = 20886;
pi = 3.14159;
total = 10 * 1.05; //JG: You were one of the few that actually used this formula. Nice work! I think it is the best one personally.
lighton = true;
superfly = true;

console.log(email, major, editor, zip, pi, "$" + total + " dollars", lighton, superfly);

// Problem 3) Use the typeof operator to determine the data type of each variable like so.
	// console.log(typeof myEmail);
	// console.log(typeof myMajor);
	// and so on…
	// Make sure you have at least one string, at least one number, and at least one Boolean.

console.log(typeof email);
console.log(typeof major);
console.log(typeof editor);
console.log(typeof zip);
console.log(typeof pi);
console.log(typeof total);
console.log(typeof lighton);
console.log(typeof superfly);

// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
	// The dog's biting my shoes
	// <a href="#">Some link</a>
	// JavaScript is "easy" if you are good at it

var string1,
	string2,
	string3;

//JG: Missing semicolons

string1 = "The dog\'s biting my shoes";
string2 = "<a href=\"#\">Some link</a>";
string3 = "JavaScript is \"easy\" if you are good at it";

console.log(string1, string2, string3);

// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.

var topics

topics = [
	"Looping with JS", 
	"JS Syntax", 
	"Using Sublime 2 Text Editor", 
	"What are Objects?"
];

console.log(topics);


// Problem 6) Send each item of the last array to the console.
// If your array variable is myArray then you would write
	// console.log(myArray[0])
	// console.log(myArray[1])
	// and so on…

console.log(topics[0]);
console.log(topics[1]);
console.log(topics[2]);
console.log(topics[3]);


// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.

console.log(topics.length);

// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string
// "Leave me alone!" to the console.
	// hint: Use document.getElementById to get a reference to the button in
	// a similar way to how we did it in class for the currency conversion
	// calculator.

//JG: I might've handed out buggy code. The anonymous function to the right doesn't need a name. My bad if that's what I posted.

document.getElementById('clickMe').onclick = function () {
	var response;
	response = "Leave me alone!"
	console.log(response);
};	