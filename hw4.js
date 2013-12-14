// Rick Wilson CA276 Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.

var athlete1 = {};
athlete1.name = 'Usain Bolt';
athlete1.age = 25;
athlete1.countryOfOrigin = 'Jamaica';
athlete1.height = '6\'5\"';
athlete1.medals = ["100m Gold 2008", "200m Gold 2008", "4x100m Relay Gold 2008", "100m Gold 2012", "200m Gold 2012", "4x100m Relay Gold 2012"];
athlete1.isOlympian = true;

athlete1.introduce = function() {
	var introduction = "";
	introduction = "'Hello!', my name is " + this.name + " and I am from " + this.countryOfOrigin + ".";
	return introduction;
};

athlete1.addMedal = function(medal) {
	medal = medal.toString();
	athlete1.medals.push(medal);
};

// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).

var athlete2 = {};
athlete2['name'] = 'Usain Bolt';
athlete2['age'] = 25;
athlete2['countryOfOrigin'] = 'Jamaica';
athlete2['height'] = '6\'5\"';
athlete2['medals'] = ["100m Gold 2008", "200m Gold 2008", "4x100m Relay Gold 2008", "100m Gold 2012", "200m Gold 2012", "4x100m Relay Gold 2012"];
athlete2['isOlympian'] = true;

athlete2['introduce'] = function() {
	var introduction = "";
	introduction = "'Hello!', my name is " + this.name + " and I am from " + this.countryOfOrigin + ".";
	return introduction;
};

athlete2['addMedal'] = function(medal) {
	medal = medal.toString();
	athlete1.medals.push(medal);
};


// Problem 3
// Create the same object using ONE object literal

var athlete3 = {
	// set key/value pairs inside here
	name: 'Usain Bolt',
	height: '6\'5\"',
	age: 25,
	countryOfOrigin: 'Jamaica',
	medals: 6,
	isOlympian: true,

	introduce: function() {
		var introduction;
		introduction = "'Hello!', my name is " + this.name + " and I am from " + this.countryOfOrigin + ".";
		return introduction;
	},

	addMedal: function(medal) {
		medal = medal.toString();
		athlete1.medals.push(medal);
	}
};


// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

function Athlete(name, height, age, countryOfOrigin, medals, isOlympian) {
	this.name = name.toString();
	this.height = height.toString();
	this.age = age;
	this.countryOfOrigin = countryOfOrigin.toString();
	this.medals = medals;

	//JG: Always use curly brackets for if/else conditions
	if (isOlympian === true || isOlympian === false) {
		this.isOlympian = isOlympian;
	}

	this.introduce = function() {
		var introduction;
		introduction = "'Hello!', my name is " + this.name + " and I am from " + this.countryOfOrigin + ".";
		return introduction;
	}

	this.addMedal = function(medal) {
		medal = medal.toString();
		athlete1.medals.push(medal);
	}
}

var a1;
a1 = new Athlete("Michael Jordan", "6\'10\"", 50, "USA", ["Basketball Gold 1992"], true);



// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an isOlympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();