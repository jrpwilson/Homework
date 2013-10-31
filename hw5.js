// Rick Wilson CA276 Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

// <dl>
// 	<dt>Some word</dt>
// 	<dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi
var word1, definition1, dl1, dt1, dd1, textNode1_1, textNode1_2, body;

word1 = 'Haiku:';
definition1 = 'an unrhymed verse form of Japanese origin having three lines containing usually five, seven, and five syllables respectively\; also: a poem in this form usually having a seasonal reference';

dl1 = document.createElement('dl');
dt1 = document.createElement('dt');
textNode1_1 = document.createTextNode(word1);
dd1 = document.createElement('dd');
textNode1_2 = document.createTextNode(definition1);
dt1.appendChild(textNode1_1);
dd1.appendChild(textNode1_2);
dl1.appendChild(dt1);
dl1.appendChild(dd1);

body = document.getElementsByTagName('body');

document.body.appendChild(dl1);

// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".
var word2, definition2, textNode2_1, textNode2_2, definitions, p2_word, p2_definition;

word2 = 'Sonnet:';
definition2 = 'a poem of fourteen lines using any of a number of formal rhyme schemes, in English typically having ten syllables per line';

textNode2_1 = document.createTextNode(word2);
textNode2_2 = document.createTextNode(definition2);

definitions = document.getElementById('definitions');

definitions.innerHTML += '<dl><dt id="p2_word"></dt><dd id="p2_definition"></dd></dl>';

p2_word = document.getElementById('p2_word');
p2_word.appendChild(textNode2_1);

p2_definition = document.getElementById('p2_definition');
p2_definition.appendChild(textNode2_2);


// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.
var word3, definition3;

word3 = 'Limerick:';
definition3 = 'A limerick is a humorous poem consisting of five lines. The first, second, and fifth lines must have seven to ten syllables while rhyming and having the same verbal rhythm. The third and fourth lines only have to have five to seven syllables, and have to rhyme with each other and have the same rhythm.';

$('#definitions')
	.append('<dl id="p3"></dl>');
$('#p3')
	.append('<dt id="p3_word"></dt>');
$('#p3_word')
	.append(word3);	
$('#p3')
	.append('<dd id="p3_definition"></dd>');
$('#p3_definition')
	.append(definition3);	







