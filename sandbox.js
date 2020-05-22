// alert('hello world');

// console.log(1);
// console.log(2);

//variables - store values that can be used later on, we can use var,let & const
let age = 10;
let year = 2019;
console.log(age,year);
//override the value of a variable
age=20;
console.log(age,year);

//a variable whose value doesn't change - use const
const points =100;
console.log(points);
//can't override const variables
//points = 2000;
//console.log(points);

//use var
var score = 20;
console.log(score);

//js data types
// Numbers eg 1,2,199 | String eg 'hello',"hello", |  Boolean eg true/false, | Null - explicity set a variable with no value | Undefined- (automatically given to variable by the browser) for variable that have not yet been defined | Object - complex data structures like Arrays,Dates,Literals etc | Symbol - used with objects.



////////////Strings
console.log("Lailah g");
let email = "lailah@gmail.com";
console.log(email);
//////string concantenation - joining strings together
let firstName = "lailah";
let lastName = "Grant";
let fullname = firstName +' '+ lastName;
console.log(fullname);
/////getting characters - getting single characters from a string using [] notation(square brackets notation)
//js is 0 based - index start from 0
console.log(fullname[0]);
console.log(fullname[0]+fullname[5]);
///////string length
//String has methods & properties, length - string property
console.log(fullname.length);
//////String methods - stings have several mtds
//methods are called using the () at the end e.g. fullname.toUpperCase()
console.log(fullname.toUpperCase());
//mtd is a word with () that comes after a period (.) .eg fullname.toUpperCase() - toUpperCase() is a method
let res = fullname.toLowerCase();
console.log(res);
console.log(fullname, res, fullname.toUpperCase());
//////indexOf() - to find position of a certain character. You pass an argument.
let index = email.indexOf('@');
console.log(index);
//common string methods
//lastIndexOf() - finds last index(position) of the character in a string [start- from, end-to]
let results = email.lastIndexOf('g');
console.log(results);
//slice(start position, end) - slices a section from a string.
let sli = email.slice(2,5);
console.log(sli);
//substr(start position,number of you want to go along) make a substring from a string
let sub = email.substr(1,7);
console.log(sub);
//replace(1st character to find, character to replace it with) - replace a certain character with the other
let rep = email.replace('h','r'); //can be used in regular expressions
console.log(rep);

//////////Template string(template literal) - they allow us to inject variables directly into strings without using + for concantenation
//use ` ` then put a variable in {} with $ before the braces
let title = 'Best reads of 2020' ;
let author ="Lailah";
let theLikes = 1000;
//concatenation way
let final = 'The blog called '+title+' by '+author+' has '+theLikes+' likes';
console.log(final);
//////the template string way
let myfinal = `The blog called ${title} by ${author} has ${theLikes} likes`;
console.log(myfinal);
/// use html template - eg dynamic content from the database embedded in the html
let html = `
<h2>${title}</h2>
<p> By ${author}<p>
<span>This blog has ${theLikes} likes</span>
`;
console.log(html);




/////Numbers
let radius =10;
const pi = 3.14;
console.log(radius,pi);
//math operators are +,-,/,*,**,%
console.log(10 /2);
let r = pi * radius**2; //radius**2 means radius power 2
console.log(r);
////order of operations - B I D M A S, I-indices(**)
let order = 5 * (10-3)**3;
console.log('order is '+order);
//shorthand for increment by 1 e.g. x++ is x=x+1
let likes = 10;
likes = likes + 1; // this is the same as likes++
likes++;
//likes = likes -1; is the same as like--;
console.log(likes);
//likes=likes +10; is the same as like += 10;
//likes -= 5; likes *= 3; likes /= 7;
//console.log(likes);
//////NaN - not a number
console.log(2/'lailah');
console.log(2 * 'lailah');
let str = 'the blog has '+ likes +' likes';
console.log(str);


/////Arrays - store a collection of values.
let ninjas = ['lailah','bushra','kato'];
console.log(ninjas);
console.log(ninjas[1]);
//overwrite position one
ninjas[1] ='waswa';
console.log(ninjas[1]);
//javascript is zero index based.
let ages = [20,22,34,59,10];
console.log(ages[3]);
let random = ['castle','knights',100,30];
console.log(random);
//Arrays too have properties and methods.
console.log(ninjas.length); //length is a property
//array methods
let myjoin = ninjas.join('|'); //joins array values joined into one string but separated with whatever is passed in the join().
console.log(myjoin);
let mymtd = ninjas.indexOf('kato');
console.log(mymtd);
let myconcat = ninjas.concat(['Grant','julie','larry']); //concat joins another array to our array
console.log(myconcat);
//alters the original values(destructive mtd - changes) eg push-add,pop-remove
//push - it alters the original values(destructive mtd - changes) on a new value & returns a new length
let mypush = ninjas.push('kabali');
console.log(ninjas);
console.log(mypush);
mypop = ninjas.pop(); //pop() removes the last value of an array
console.log(ninjas);
console.log('removed value is '+mypop);



//Null & undefined
let myages; // not assigned - undefined
console.log(myages,myages+3,`the age is ${myages}`);
//undefined  NaN(using an undefined variable with a value)   "the age is undefined"
let ourAge =null;
console.log(ourAge,ourAge+3,`the age is ${ourAge}`);
//null  3  "the age is null"


//////Booleans & comparisons
console.log(true,false,"true","false");
//methods can return booleans
let myemail = 'lailah@gmail.com';
let solns = myemail.includes('@'); //look if a certain character is there
let soln = myemail.includes('!');
console.log(solns);
console.log(soln);
let ourNames = ['jane','lutaaya','peter','simon'];
let thesoln = ourNames.includes('Lailah');
let mysoln = ourNames.includes('peter');
console.log(thesoln);
console.log(mysoln);

//comparison operators eg ==, !=, <, >,!> 
//single = -assigns a variable to a value
//double == -sets RHS equal to LHS
//comparison operators return boolean eg true if a centain condition is fullfilled.
let theage = 25;
console.log(theage == 25); //returns true
console.log(theage == 30); //returns false
console.log(theage != 30);
console.log(theage != 25);
console.log(theage > 20);
console.log(theage < 20);
console.log(theage >= 20);
console.log(theage <= 20);

//can be used in eg logging in - if a user is logged in, take them to a dashboard.
let thename = 'lailah';
console.log(thename == 'lailah');
console.log(thename == "LAILAH"); //returns false, much as the text is the same but it differs by the uppercase
console.log(thename == "Lailah"); //returns false, much as the text is the same but it differs by the uppercase
console.log(thename > 'cynthia'); //returns true, in strings - alphabetical order is used since l comes after c,,then lailah is greater than cynthia.
console.log(thename > 'Lailah'); //returns true, in javascript the lowercase letters is greater than the uppercase letters.
console.log(thename > 'Cynthia'); //returns true, in javascript the lowercase letters is greater than the uppercase letters.

let myage = 30;
//loose comparison (different types can still be equal)
//loose comparison uses ==, it is not always accurate - it is best we use strict comparison
console.log(myage == 30); //returns true
console.log(myage == '30'); //returns true even when a string is passed in js.
console.log(myage != 30); //returns false 
console.log(myage != '30'); //returns false 

//strict comparison (different types can't be equal)
//strict comparison uses ===
console.log(myage === 30); //returns true
console.log(myage === '30'); //returns false since string '30' is not equal to number 30
console.log(myage !== 30); //returns false
console.log(myage !== '30'); //returns true  since this is a string '30' which is not equal to number 30


//type conversion - converting from one datatype to another. 
let scores = '100';
console.log(scores + 1);//returns 1001, since scores is a string, +1 just concatenates a 1 on 100
//to perform arithmetics like addition - we convert the scores string to a  number
 scores = Number(scores); //converts string to a number - use Number()
console.log(scores + 1);
console.log(typeof scores); //get the variable datatype

let greeting = Number('hello'); // convert string to a number
console.log(greeting); //returns NaN

//convert a number to a string
let num = String(50);
console.log(num);
console.log(num + ' lailah', typeof num);

//convert number to a boolean 
//- the numbers that return true are called truthy & numbers that return false are called falsy
let bol = Boolean(100);
console.log(bol, typeof bol); //return true - all numbers +ve & -ve except 0 are truthy
let bool = Boolean(0);
console.log(bool, typeof bool); //return false - 0 is a falsy
let b = Boolean('0');
console.log(b, typeof b); //return true - all strings of whatever lenght are truthy 
let bl = Boolean('');
console.log(bl, typeof bl); //return false - empty strings are falsy

//in the above we are using explicit type conversion - we explicitly changed the type[we do it ourselves]
//
//Javascript does the implicit type conversion(behind the scenes)      



//Loops and Conditions
//Control flow , decision making, repeated execution
//Loops - type of control flow in js 
//Use Loops for cycling through data.
//Conditions - use conditional statements for checking conditions
//if(some condition is true) { do something... }
//
//
//for loops - can loop through a database for names
for(let i=0; i<5; i++){
	//console.log('***');
	console.log('in loop: '+i);
}
 console.log('loop finished'); //it has reached i<5 ->>>> 5<5

//loop through array
const ournames = ['lailah','kato','waswa'];
for(let i=0; i < ournames.length; i++){
	// ournames.length - gets the length of values of an array ie 3 elements starting from 0 index
	//console.log(i);  //returns 0 1 2
	//console.log(ournames[i]); //returns the names
	
	//want to display the names in html - use template strings
	let div = `<div>${ournames[i]}</div>`;
	console.log(div); 

}


//while loop - syntax changes from for loop
//let i=0; while(i < 5) { ....}
//
//let i=0;
//while(i < 5){
	//console.log('in loop: ', i); //infinite loop

let i=0;
// while(i < 5){
// 	console.log('in loop: ', i); //
// 	i++;
// }

while(i < ournames.length){
	console.log('loop is: ',ournames[i]);
	i++;
}



//do while loops
//it will run even when value i=5, condn is i<5
//let i=5; do {.. do something ..}while(i<5);

//let j = 3; //returns 3 4
//let j=0; //returns 0 1 2 3 4
let j=5; //returns 5
do {
	console.log('value of i is :', j); //value on the 5th index is also returned
	j++;
}while(j<5);




// Conditional statements - if statements
// 
//if statement
//const a = 20;
const a = 25;
if(a > 20){
	console.log('you are over 20 years old');
}

// check data passed through -  check for password or username 
const ninja = ['lailah', 'chun-li','megatron','panda','kungfu'];
if(ninja.length > 3) {
	console.log("that's a lot of ninjas");
}

const password = 'passlailajhygc';
if(password.length >= 8) {
	console.log('this password is long enough');
}


//else if statements
//
//const pwd = 'p@ss';
//const pwd = 'p@ssw0rd45laila.'
const pwd = 'p@ssw0rd';

//check multiple conditions
//logical operators - OR || and AND &&
if(pwd.length >=12 && pwd.includes('@')){
	console.log('the password is strong');
}else if(pwd.length >= 8 || pwd.includes('@') && pwd.length >5) {
	console.log('this password is long enough');
} else {
	console.log('create a password with 8 characters or more');
}


//logical NOT - !
//makes a condition the opposite
let user = false;
u = !user;
if(u){
	console.log(u);
}



//break and continue keywords
//break - stops the loop.  
//continue - stops a selected iteration and continues the rest of the loop iteration(i++  )
const theScores = [50,25,0,30,100,20,10];
for(let i = 0; i < theScores.length; i++){

	if(theScores[i] === 0){
		continue; //jumps out of the selected element,(0 is not displayed ) then it showsc the rest of the elements
		//the rest of the code after this if{} is not executed
	}

	console.log('your score : ', theScores[i]);

	if(theScores[i] === 100){
		console.log('Congrats, you got the top 100 score');
		break; //loop will stop on 100 & the other values in the array values won't be executed 	
	}
}




//Switch statements - Control flow
const grade = 'D';
//const grade = 'X';

//using if statements
// if(grade === 'A'){

// }else if(grade === 'B'){

// }else if(grade === 'C'){

// }else if(grade === 'D'){

// }else if(grade === 'E'){

// }else {

// }

//a better way to solve a problem above with a single value is using Switch
switch(grade){
	case 'A':
		console.log('You got an A!');
		break;
	case 'B':
		console.log('You got a B!');
		break;
	case 'C':
		console.log('You got a C!');
		break;	
	case 'D':
		console.log('You got a D!');
		break;
	case 'E':
		console.log('You got a E!');
		break;
	default:
		console.log('Not a valid grade!');					
}



//variables & block scope









//functions & methods
//javascript datatypes
//Object  - Arrays, Object literals, Functions, Dates etc 
//functions fall under the objects in the js datatypes
//functions are blocks of code written once & can be reused many times OR functions create block of code that become reusable
//eg getting a place's geolocation latitudes & longitudes & convert them through a meaningful address 
// method is just a function which does something - alittle different from functions
// 
// ways of creating a function: -function declaration -function expression
// function declaration
function greet(){
	console.log('hello, there');
}
//function calling / revoking
greet();
//can call the fn many times
greet();
greet();


//function expression - setting a function to a variable
//expression - anytime we set a variable to something whether a string or function or number : that is called an expression. we always put a semicolon at the end.
//
//use a const so fn doesnot change
//function expression declaration
const speak = function(){
	console.log('say something');
}; //put a semicolon at the end of every expression
//call / revoke the function
speak();
speak();


//above 2 ways of function creation may seem the same but they differ
//function declaration uses Hoisting while function expression doesnot.
//Hoisting refers to the way the functions are effectively hoisted to the top of our program :- before the rest of the js runs.
//ie we can do a function declaration after calling the function like below
talk();
//it is hoisted to the top for only function declaration type & not function expression type
function talk(){
	console.log('I talk alot');
}


//arguments & parameter
//pass a variable in the function on creation then pass a value to the variable in a function call
//
const letUsTalk = function(name) //argument
 {
	console.log(`good day ${name}`); //template string
};
//we cannot access the name argument outside the function because name is a local variable & its scope  


letUsTalk('lailah'); //the value passed here is called a parameter

//passing default values
//
const weTalk = function(name='Grant', time='night'){
	console.log(`good ${time} ${name}`);
}
weTalk();
weTalk('Lailah','morning'); //overrides the default values



const calcArea = function(r){
//let area = 3.14 * r**2;
//console.log(area);
//return the area so we can use it outside the fn block
//return area;
//
//clean up code to 
return 3.14 * r**2;

};
const ar = calcArea(7);
console.log(`Area of a circle is ${ar}`);

//we can't use the area outside the function block
//console.log(area); //it won't work
//what we do is we return the area as above in the function block

//reusing variables
const  calcVol = function(ar){

};
calcVol(ar);




//arrow functions
const calculate = (rad) => {
	return 3.14 * rad**2;
};
const myArea = calculate(7);
console.log('The area is ', myArea);
//this can be the simplest declaration of an arrow fn that passes one argument.
//const calculate = rad => 3.14 * rad**2;


const g = () => 'hello, world';
const re = g();
console.log(re);


// const bill = function(products, tax) {
// 	let total = 0;
// 	for(let i=0; i < products.length; i++){
// 		total += products[i] + products[i] * tax;
// 	}
// 	return total;
// }
// console.log(bill([10,15,50],0.2));

//arrow function of the above
const bill = (products, tax) => {
	let total =0;
	for(let i=0; i < products.length; i++){
		total += products[i] + products[i] * tax;
	}
	return total;
};
console.log(bill([10,15,50],0.2));



//functions
const myGreet = () => 'hello';
let resultOne = myGreet();
console.log(resultOne);


//methods - they are functions
//what makes methods different from functions is :-
//how methods are invoked and
//where they are defined
//
//method is invoked using a dot . format
const theName = 'lailah';
//toUpperCase() method on a value
let resultTwo = theName.toUpperCase();
console.log(resultTwo);



// Callback functions and foreach
//we can pass arguments to functions or methods as we invoke them and we can use those arguments inside the function
//we can pass functions as arguments too, the function we pass is called a callback fn.
//
const myFunc = (callbackFunc) => {
	//do something
	let value = 50;
	callbackFunc(value); //value is the variable defined in the variable
};

//invoke the function myFunc() and pass a parameter as a function
myFunc(function(value){
	//do something
	console.log(value);
});
//change the myFunc() call as an arrow function
myFunc(value => {
	console.log(value);
});


let people = ['lailah','bushra','kato','waswa','daddy','mummy'];
//put a built in method forEach() which iterate through arrays. it's like a loop
//forEach() iterates through an array & checks it through the people variable & for each element in the array, it(mtd) calls the callback function.
////in the forEach(argument for each item, index of the element-optional)
//people.forEach(function(){ - forEach expects a callback function
//we can take a couple of different parameters eg 1st -whatever the value is at the time we are iterating
//people.forEach(function(person){  -person can be any name, person gets each item in an array
//
people.forEach(function(person){
	//console.log('iterate an array');
	console.log(person); //each element in the array is displayed
});

//convert it to an arrow fn
people.forEach((person, index) => {
	 console.log(index, person); //give the position of elements in the Array and the value of Arrays
});

//can create a callback fn alone & just pass it in the forEach()
const logPerson = (person, index) => {
	console.log(`${index} - hello  ${person}`); //used template strings
};
//call the callback function
people.forEach(logPerson);

// callback function is a normal fn passed in another function as an argument.
// 
// 
// //get reference to the <ul> element
// we are going to use people array variable above
// create a callback fn with a forEach() that iterates thru an array & will display each value in the array in the <ul> tag
const ul = document.querySelector('.people');

//create an empty string
let theHtml = ``;

//callback fn in the forEach 
people.forEach(function(person) {
	//create an html template for each person(array value)
	//
	//we append theHtml for each person
	theHtml += `<li style="color:purple">${person}</li>`;
});
//display theHtml
console.log(theHtml);
//place the template string into the <ul> on the browser using innerHTML
ul.innerHTML = theHtml;

//create an arrow function of the above
people.forEach(person => {
	theHtml += `<li style="color:purple">${person}</li>`;
});
ul.innerHTML = theHtml;



			//Objects
//Objects in real life have properties & things they can do...
// 
//Phone has:-
//properties 
//-color -size -model
//things it can do(methods)
// -ring -take a picture -play music
//
//user object
//properties
//-email -username -gender
//methods(functions)
//-login -logout
//
//blog object
//properties
//-title  -content  -author
//methods
//-publish  -unpublish  -delete
//
//
//
//Creating objects using object literals
//we use {} to create objects
let theuser = {
	name:'Crystal',
	age: 30,
	location:'Kampala',
	email: 'crystal@gmail.com',
	blogs: ['Why pizza?', '10 things to eat in the morning'],

	//create a blog array property with objects
	//ie data from databases is in the onject array format(array of objexts)
	theblogs: [
		{ title: 'Why pizza?', likes:30 },
		{ title: '10 things to eat in the morning', likes:50 }
	],
	
	//add methods - use the key-value
	//nameofthemehod : function() {//do something}
	login: function(){
		console.log(`User has logged in`);
	},
	//this is a regular function
	logout: function(){
		console.log('USer has logged out');
	},
	//this is also a regular function
	settings() {
		console.log(`User profile, username is ${this.name}`);
	},

	//if we want to display blog content in this function, 
	//we use this keyword
	//this keyword if used here refers to this object variable name theuser
	//this keyword is a context object & it represents the context in which the content code is executed,
	//depending on how & where its used,its value is going to be used
	logBlogs: function(){ //used a normal fn - always use a regular fn not arrow fns since this keyword in arrow fns will refer to window ie logBlogs: () =>{ console.log(this); //displays the window} 
		//eg console.log(this); output theuser object
		console.log(this);
		//to display the blogs value, we use this.blogs
		console.log(this.blogs);

		//to display individual values of a blogs(it is an array), we loop using forEach()
		console.log(`${this.name} wrote the following blogs:-`);
		this.blogs.forEach(blog => { //pass a callback fn in the forEach() and blog as a parameter
			console.log(blog);
		})


		//
		//
	},

	//display info in theblogs
	logTheBlogs() {
		console.log('The user has written the following blogs: ');
		this.theblogs.forEach(theblog => {
			console.log(`This blog ${theblog.title} has  ${theblog.likes} likes`);
			//console.log(theblog);
		})	
	}


};
console.log(theuser); 
//access a property & redefining using a dot . notation
console.log(theuser.name);
//redefine/updating a property
theuser.age = 35;
console.log(theuser.age);
//access a property & redefining using [] notation, name of a key is put in the ''
console.log(theuser['email']);
theuser['name'] = 'Lailah G';
console.log(theuser['name']);
//using [] notation is essential if you have a variable pointing to the property name
const key = 'location';
console.log(theuser[key]); //it is like console.log(theuser['location']);

console.log(typeof theuser);

//call methods using . notation
theuser.login();
theuser.logout();
theuser.settings();

theuser.logBlogs();

theuser.logTheBlogs();

//this keyword in this context, 
//it outputs the global js property/global context - window
console.log(this); //output the window's property indow {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}


//18th May 2020 Monday (25th day of Ramadhan)
//
//20th May 2020 Wednesday
//
//Math object - built-in object in js
console.log(Math); //gives all Math properties and methods
console.log(Math.PI); //gives a long decimal value of 3.14
console.log(Math.E);

const p = 7.7; const q=7.2; 
console.log(Math.round(p)); //rounds of value of p to the nearest integer
console.log(Math.round(q));

console.log(Math.floor(p)); //ignores the values after the decimal point

console.log(Math.ceil(q)); //rounds up the nearest integer to 1 irrespective of any number after decimal point ie Math.ceil(q) - 8

console.log(Math.trunc(p)); //ignores the values after decimal point & only takes the integer

//random numbers
const rand = Math.random();
//the random number is always between Zero 0 and One 1
console.log(rand); //gives different values eachtime a page is refreshed

//how to get a random number between 1 and 100
//use round() then multiply rand variable by 100
console.log(Math.round(rand * 100));




//Primitive types and Reference Types[difference is how they are used and stored in memory].
//Primitive types - when we create a primitive value and we assign to a variable, the value is stored in something called a Stack, Stack has limited space & they are quicker
//-numbers -strings -booleans -null -undefined -symbols
//Stack & Heap are 2 different types of memory.
//Reference types - :- if we create Reference type like object literal,arrays,functions - that is stored on Heap, Heap has more space available for bigger and more complex types & they are slower.
//-all types of objects -object literals -arrays -functions -dates -all other objects
//
//when we make an array, it stored in a heap & it makes a reference through a pointer to a Stack 
//eg const userOne = {name:'LAilah', score:100}
//object is stored in a heap & this object points to a Stack using the variable name userOne
//if we create const userTwo = userOne;
//a new pointer userTwo is formed on the Stack but still use the same Heap value (both Stacks point to the same Heap)
//if userOne = {name:'LAilah', score:50}, same heap but the score is updated to 50


//primitive types
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`score one: ${scoreOne}`, `score Two: ${scoreTwo}`);
//if one is updated, the other doesnt get updated in a Stack
scoreOne=100;
console.log(`score one: ${scoreOne}`, `score Two: ${scoreTwo}`); //scoreTwo doesn't change


//
//reference types
const usersOne = {name:'lailah', age:45};
const usersTwo = usersOne;
console.log(usersOne, usersTwo);
//if one onject is updated, even the other updates because they are pointing to the same objects Heap... 
usersOne.age = 70; //usersTwo.age = 100;
console.log(usersOne, usersTwo);



//Interacting with a browser
//like:-
//-adding content to the browser
//-change CSS styles
//-can react to user events e.g clicking
//-cool effects like popups
//
//goals
//- Document Object Model(DOM)
//- Add, change & delete content
//- Make a cool pop-up effect in the web page
//
//
//DOM
//* it is the heart of any kind of webpage manipulation.
//// It is something created by the browser when a HTML document interacts with it.
/// 'document' object is the object created  when HTML document is loaded in the browser where the browser creates an object which models the document ('document' object) 
//
//get & use the html by using document & CSS selectors
//use document objects whenever we want to do anything on a webpage
//querySelector() is one way to grab an element from the DOM
const par = document.querySelector('p'); //grabs the 1st p tag & ignores the rest
console.log(par);
const par1 = document.querySelector('.error');
console.log(par1);
const par2 = document.querySelector('div.error');
console.log(par2);
const par3 = document.querySelector('body > h1'); //gets the 1st h1 in the body
console.log(par3);
//
//grab multiple elements
const par4 = document.querySelectorAll('p');//gets all p tags
console.log(par4); // it gives a NodeList but it isn't an array though we can do some array methods on it
//loop
console.log(par4[2]);


//getting elemeys by
//get an element by ID -  document.getElementById('page-title')
const the_id = document.getElementById('page-title');
console.log(the_id);


//get elements by their class name - document.getElementsByClassName('error')
const errors = document.getElementsByClassName('error'); //don't put . on the class name
console.log(errors); //it gives HtmlCollection which is the same as NodeList
console.log(errors[0]); //we can get a value using index like in arrays 
//but we can't loop through using a forEach() like in arrays


//get an element by their tag name - document.getElementsByTagName('p')
const p_tag = document.getElementsByTagName('p'); //selects all <p> tags
console.log(p_tag);
console.log(p_tag[1]);
//can't loop through using a forEach() like in arrays


//using property - innerText
console.log(par.innerText);
////updating the value at the 1st paragraph///
par.innerText = 'ninjas are awesome';

//for the NodeList, loop through
par4.forEach(par_4 => {
	console.log(par_4.innerText);
	//update(appending) each paragraph
	par_4.innerText += ', updated all paragraphs';
});


//want to change items in the tag
const cont = document.querySelector('.content');
console.log(cont.innerHTML);
//update(overwrites) the html content
cont.innerHTML = '<h2>This content is updated & it overwrote the previous</h2>';
//appending the content
cont.innerHTML += ' <b>This is appended content</b>';

//eg if we go to a database, get  a list / an array of people & I'm to return an html temoplate of it 
const the_people = ['lailah', 'Juliana', 'Fanny'];
the_people.forEach(the_person => {
	//append that div .content - cont
	cont.innerHTML += `<h3>${the_person}</h3>`
});


//get and update html attributes eg href, class
const link = document.querySelector('a');
//getAttribute('')  setAttribute('') pass atributes in ('')
console.log(link.getAttribute('href'));
//setAttribute('attribute', 'the value to update it to');
//setAttribute -> - overwrites , - updates if it is not there
link.setAttribute('href', 'https://www.thenetninja.co.uk');
//change text 
link.innerText = 'Go to Netninja';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class','success');
//add a styling through js
//setAttribute('new attribute','attribute value')
msg.setAttribute('style','color:green;');


//par3.setAttribute('style','margin:50px;'); overwrites other styles

//to append other styles, we use style property in js
console.log(par3.style); //gives all the style proplerties
console.log(par3.style.color); //gives orange on <h1>

par3.style.margin = '50px'; //the style property doesn't overwrite the initial styles 
///////style property is the best way to append styles
par3.style.color = 'gold'; //overwrites only the color
//styles like font-size are used as camelCase - fontSize
par3.style.fontSize = '70px';
///to delete a style, set the style to an empty string
par3.style.margin = ''; //removes the margin












