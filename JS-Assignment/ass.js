// ALERTS
// alert("welcome to our website");
// alert("Error! Please enter a valid passward.");
// alert("Welcome to JS Land..." + "\n" + "Happy Coding");
// alert("Welcome to JS Land...");
// alert("Happy Coding");
// alert("Hello... I can run JS through my web browser's console");

//END CHAP 1

//VARIABLES FOR STRINGS
// var userName;
// var myName = "Maira Javed";
// var message;
// message = "Hello World";
// alert("hey!");
// // Prompt user to enter their name and save to a variable
// var stu_Name = prompt("Enter your name:");

// // Prompt user to enter their age and save to a variable
// var age = prompt("Enter your age:");

// // Prompt user to enter their domain and save to a variable
// var domain = prompt("Enter your domain:");

// // Display the data in alert boxes
// alert("Name: " + stu_Name);
// alert("Age: " + age);
// alert("domain: " + domain);
// var fvrtFood = alert(
//   "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P"
// );
// var email = "mairajaved010@gmail.com";
// alert("My email address is " + email);
// var book = "“A smarter way to learn JavaScript”";
// alert(book);
// var line = "Yah! I can write HTML content through javascript";
// document.write(line);
// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(design);

// END CHAP 2

//VARIABLES FOR NUMBERS
// var age = 20;
// alert("I am " + age + " years old");
// Declare a variable to store the number of visits
// var numVisits = 0;

// // Check if the visitor has visited the page before using browser cookies or local storage
// // If yes, retrieve the stored value and update the numVisits variable
// // For example, using localStorage:
// if (localStorage.getItem("numVisits")) {
//   numVisits = parseInt(localStorage.getItem("numVisits"));
// }

// // Increment the numVisits variable
// numVisits++;

// // Store the updated value in browser cookies or local storage
// // For example, using localStorage:
// localStorage.setItem("numVisits", numVisits);

// // Display a message to the visitor using an alert
// alert("You have visited this site " + numVisits + " times.");
// var birthYear = 2002;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is" + " " + typeof birthYear);
// var visitorName = prompt("enter your name");
// var titleName = prompt("enter your product title");
// var quantity = prompt("How many products do uh want to order");
// document.write(visitorName + " ordered " + quantity + " on " + titleName);
//END
//VARIABLE NAMES: LEGAL & ILLEGAL
// var mama, oppa, pappa;
//END
//MATH EXPRESSIONS
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var result = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + result);
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var result = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + result);
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var result = num1 * num2;
// document.write("Multiply of " + num1 + " and " + num2 + " is " + result);
// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var result = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + result);
// var value;
// document.write(value + "<br>");
// value = 21;
// document.write("Initial value : " + value + "<br>");
// var increment = ++value;
// document.write(increment);
// document.write("<br>");
// var final = value + 7;
// document.write(final);
// document.write("<br>");
// var decrement = --value;
// document.write(decrement);
// document.write("<br>");
// var rem = value % 3;
// document.write(rem);
// var ticket = 600;
// var total = 5;
// var cal = ticket * total;
// document.write("Total cost to buy " + total + " tickets to a movie is " + cal);
// var num = +prompt("Enter the number which table uh want");
// for (var i = 1; i <= 10; i++) {
//   result = num * i;
//   document.write(num + " x " + i + " = " + result + "<br>");
// }
// var celsiusTemp = 23;
// var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
// document.write(
//   celsiusTemp + " degrees Celsius is " + fahrenheitTemp + " degrees Fahrenheit"
// );
// var farTemp = 43;
// var celsiusTemp = Math.round(((farTemp - 32) * 5) / 9);
// document.write(
//   farTemp + " degrees farhenhiet is " + celsiusTemp + " degrees Celsius"
// );
// document.write("<br>");
// var item1 = 150;
// document.write("price of item1 is " + item1 + "<br>");
// var item2 = 250;
// document.write("price of item2 is " + item2 + "<br>");
// var quantity1 = +prompt("enter no of item uh want to order of item1");
// var quantity2 = +prompt("enter no of item uh want to order of item2");
// var shippingCharge = 100;
// var total = (item1 * quantity1) + (item2 * quantity2) + shippingCharge;
// document.write("total cost of order is " + total);
// var usd = 10;
// var sar = 25;
// var total_pkr = usd * 104.8 + sar * 28;
// document.write("Total amount in Pakistani Rupees:", total_pkr + "<br>");
// var initialize = 4;
// var result = ((initialize + 5) * 10) / 2;
// document.write(result);
// var date = new Date();
// var currentYear = date.getFullYear();
// document.write("Current year is : " + currentYear + "<br>");
// var birthYear = +prompt("enter your birth year");
// document.write("Birth year is : " + birthYear + "<br>");
// var age = currentYear - birthYear;
// document.write("Your age is : " + age + "<br>");
// var radius = 10;
// document.write("radius of a circle : " + radius + "<br>");
// var pi = Math.PI;
// document.write(pi + "<br>");
// var circum = 2 * (pi * radius);
// document.write("The circumference is : " + circum + "<br>");
// var area = pi * radius ** 2;
// document.write("The area is : " + area);
// var favoriteSnack = "chocolate chip cookies"; // replace this with your favorite snack
// var currentAge = 15; // replace this with your current age
// var maxAge = 65; // replace this with your estimated maximum age
// var estimatedAmountPerDay = 3; // replace this with your estimated amount per day

// var yearsRemaining = maxAge - currentAge;
// var daysRemaining = yearsRemaining * 365;

// var lifetimeSupply = daysRemaining * estimatedAmountPerDay;

// document.write(
//   "If you love " +
//     favoriteSnack +
//     " and live to be " +
//     maxAge +
//     " years old, you will need a lifetime supply of " +
//     lifetimeSupply +
//     " of them!"
// );

//END

// MATH EXPRESSIONS
// var a = 1;
// document.write("The value of a is " + a + "<br>");
// var inc = ++a;
// document.write("The value of a is " + inc + "<br>");
// var inc2 = a++;
// document.write("The value of a is " + inc2 + "<br>");
// var dec = --a;
// document.write("The value of a is " + dec + "<br>");
// var dec2 = a--;
// document.write("The value of a is " + dec2 + "<br>");
// var lasta = (a -= 1);
// document.write("The value of a is " + lasta + "<br>");
// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result);
// --a; //1
// --a - --b; //1
// --a - --b + ++b; //2
// --a - --b + ++b + b--; //3
// var userName = prompt("What is your name?");
// alert("Hello, " + userName + "! Nice to meet you.");
// var num = +prompt("Enter a number to display its multiplication table:");
// if (num === "" || isNaN(num)) {
//   num = 5;
// }

// var table = "<h2>Multiplication Table of " + num + "</h2>";
// for (var i = 1; i <= 10; i++) {
//   table += num + " x " + i + " = " + num * i + "<br>";
// }

// document.write(table);

/// Part a: Take three subjects' names from the user and store them in different variables
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // Part b: Store the total marks for each subject in a variable
// var totalMarks = 100;

// // Part c: Take obtained marks for the first subject from the user and store it in a variable
// var obtainedMarks1 = parseInt(
//   prompt("Enter the obtained marks for " + subject1 + ":")
// );

// // Part d: Take obtained marks for the remaining 2 subjects from the user and store them in variables
// var obtainedMarks2 = parseInt(
//   prompt("Enter the obtained marks for " + subject2 + ":")
// );
// var obtainedMarks3 = parseInt(
//   prompt("Enter the obtained marks for " + subject3 + ":")
// );

// // Part e: Calculate total marks and percentage, and display the result in a table format in the browser
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display the result in a table format
// document.write("<table>");
// document.write(
//   "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject1 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks1 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject2 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks2 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject3 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks3 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><th>Total</th><th>" +
//     totalMarks * 3 +
//     "</th><th>" +
//     totalObtainedMarks +
//     "</th></tr>"
// );
// document.write("</table>");

// document.write("<p>Percentage: " + percentage + "%</p>");
// USER INPUT & CONDITIONAL
// STATEMENT
// Take the city name as input from the user
// var cityName = prompt("Enter the city name:");

// // Check if the user entered "Karachi"
// if (cityName.toLowerCase() === "karachi") {
//   // Display the welcome message for Karachi
//   alert("Welcome to the city of lights!");
// }
// var gender = prompt("Enter your gender:");
// if (gender.toLowerCase() === "male") {
//   document.write("Good morning sir");
// } else {
//   document.write("Good morning Maam");
// Function to display the message based on the signal color
// function showMessage(signalColor) {
//   if (signalColor === "red") {
//     console.log("Must Stop");
//   } else if (signalColor === "yellow") {
//     console.log("Ready to move");
//   } else if (signalColor === "green") {
//     console.log("Move now");
//   } else {
//     console.log("Invalid signal color");
//   }
// }

// // Prompt the user for the signal color
// var userColor = prompt(
//   "Enter the color of the traffic signal (red, yellow, green):"
// );

// // Convert the user's input to lowercase for case-insensitive matching
// var color = userColor.toLowerCase();

// Call the function to display the message
// showMessage(color);
// var remainingFuel = prompt("enter your remaining fuel in litres");
// if (remainingFuel.toLowerCase() < "0.25litres") {
//   console.log("Please refill the fuel in your car");
// }
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = +prompt("Guess a number between 1 and 10");
// if (guess === secretNumber) {
//   console.log("Bingo! Correct answer");
// } else if (guess === secretNumber + 1 || guess6 === secretNumber - 1) {
//   console.log("Close enough to the correct answer");
// } else {
//   console.log("Sorry, wrong guess. The secret number was " + secretNumber);
// }
// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//   console.log("The number is divisible by 3");
// } else {
//   console.log("The number is not divisible by 3");
// }
// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }
// var temperature = parseFloat(prompt("Enter the temperature:"));
// if (temperature > 40) {
//   console.log("It is too hot outside.");
// } else if (temperature > 30) {
//   console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//   console.log("Today's Weather is cool.");
// } else if (temperature > 10) {
//   console.log("OMG! Today's weather is so Cool.");
// } else {
//   console.log("Temperature is too low.");
// }
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase varter or lower case varter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// var input = "Amazing";

// if (typeof input === "number") {
//   console.log("Input is a number");
// } else if (typeof input === "string") {
//   var charCode = input.charCodeAt(0);
//   if (charCode >= 65 && charCode <= 90) {
//     console.log("Input is an uppercase varter");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("Input is a lowercase varter");
//   } else {
//     console.log("Input is not a varter");
//   }
// } else {
//   console.log("Invalid input");
// }
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//   console.log("The larger number is: " + num1);
// } else if (num2 > num1) {
//   console.log("The larger number is: " + num2);
// } else {
//   console.log("Both numbers are equal.");
// }
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }
// . Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// s
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise
// var correctPassword = "1234"; // Store the correct password

// var userPassword = prompt("Enter your password:"); // enter password

// if (!userPassword) {
//   console.log("Please enter your password."); // Check if user has entered a password
// } else if (userPassword == correctPassword) {
//   console.log(
//     "Correct! The password you entered matches the original password."
//   ); // Check if passwords match
// } else {
//   console.log("Incorrect password."); // Incorrect password
// }
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   console.log((greeting = "Good day"));
// } else {
//   console.log((greeting = "Good evening"));
// }
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time = parseInt(
//   prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7 PM):")
// );

// if (time >= 0 && time < 1200) {
//   console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2000) {
//   console.log("Good evening!");
// } else if (time >= 2000 && time <= 2359) {
//   console.log("Good night!");
// } else {
//   console.log("Invalid time format entered!");
// }
// ARRAYS
// Declare an empty array using JS literal notation to store
// student names in future
// var studNames = [];
//  Declare an empty array using JS object notation to store
// student names in future.
// var studNames = [];
// Declare and initialize a strings array.
// var studNames = ["John", "Mary", "Jane", "Susan", "Jim"];
// Declare and initialize a numbers array.
// var studNames = [12, 34, 56, 78, 90];
// Declare and initialize a booleans array.
// var studNames = [true, false, true, false, true];
// Declare and initialize a mixed array.
// var studNames = ["John", 12, true, "Mary", 56, false];
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var qualification = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// document.write("<h2>Qualification<?h2>");
// document.write("<ol>");
// for (var i = 0; i < qualification.length; i++) {
//   document.write("<li>" + qualification[i] + "</li>");
// }
// document.write("</ol>");
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students
// Student names array
// var studentNames = ["MAIRA", "MOAZIMA", "JAVED"];

// // Scores array
// var scores = [20, 80, 90];

// // Calculate percentages
// var totalMarks = 100;
// var percentages = [];

// for (var i = 0; i < scores.length; i++) {
//   var percentage = (scores[i] / totalMarks) * 100;
//   percentages.push(percentage.toFixed(2)); // Round to 2 decimal places and add to percentages array
// }

// // Display scores and percentages
// var table = "<table>";
// table += "<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>";

// for (var i = 0; i < studentNames.length; i++) {
//   table += "<tr>";
//   table += "<td>" + studentNames[i] + "</td>";
//   table +=
//     "<td>" + "scores of " + studentNames[i] + " is " + scores[i] + "</td>";
//   table += "<td>" + percentages[i] + "%</td>";
//   table += "</tr>";
// }

// table += "</table>";

// // Display table in the HTML document
// document.getElementById("tableContainer").innerHTML = table;
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Devare the first color in the array. Display the updated
// array in your browser.
// e. Devare the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to devare
// color(s) & how many colors he/she wants to devare. Then
// Arrays | JAVASCRIPT
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var colorNames = ["green", "grey", "black", "white"];
// // console.log(colorNames);
// var startColour = prompt(
//   "Which colour you want to add in the start of an array"
// );
// colorNames.unshift(startColour);
// // console.log(colorNames);
// var lastColour = prompt("Which colour you want to add in the last of an array");
// colorNames.push(lastColour);
// console.log(colorNames);
// colorNames.unshift("red", "yellow");
// console.log(colorNames);
// colorNames.shift();
// console.log(colorNames);
// var indexAdd = prompt("which index do you want to add a color");
// var colorAdd = prompt("which color do you want to add");
// colorNames.splice(indexAdd, 0, colorAdd);
// console.log(colorNames);
// var indexDel = prompt("which index do you want to devare");
// var colorDel = prompt("how many colors do you want to devare");
// colorNames.splice(indexDel, colorDel);
// console.log(colorNames);
// var scores = ["70", "89", 87, " 45"];
// var orderedScores = scores.sort();
// document.write("scores of students" + scores);
// document.write("<br>");
// document.write("ordered scores of students" + orderedScores);
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array
// var cities = ["karachi", "islamabad", "lahore"];
// var selectedCities = cities.slice(0, 2);
// console.log(selectedCities);
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method
// var arr = ["This ", "is", "my", "cat"];
// var join = arr.join();
// document.write("<h2>Array:</h2>");
// document.write(join);
// document.write("<h2>String:</h2>");
// var arr = ["This ", "is", "my", "cat"];
// var join = arr.join(" ");
// document.write(join);
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out
// var fifoArray = [];
// // console.log(fifoArray);
// fifoArray.push("Keyboard");
// // console.log(fifoArray);
// fifoArray.push("Mouse");
// // console.log(fifoArray);
// fifoArray.push("Printer");
// // console.log(fifoArray);
// fifoArray.push("Monitor");
// console.log(fifoArray);
// var join = fifoArray.join(",");
// document.write(join);
// var firstValue = fifoArray.shift();
// var secondValue = fifoArray.shift();
// var thirdValue = fifoArray.shift();
// var fourthValue = fifoArray.shift();
// document.write("<h2>Out:</h2>");
// document.write(firstValue);
// document.write("<h2>Out:</h2>");
// document.write(secondValue);
// document.write("<h2>Out:</h2>");
// document.write(thirdValue);
// document.write("<h2>Out:</h2>");
// document.write(fourthValue);
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (LAST- In First Out)
// var fifoArray = [];
// console.log(fifoArray);
// fifoArray.push("Keyboard");
// console.log(fifoArray);
// fifoArray.push("Mouse");
// console.log(fifoArray);
// fifoArray.push("Printer");
// console.log(fifoArray);
// fifoArray.push("Monitor");
// console.log(fifoArray);
// var join = fifoArray.join(",");
// document.write("<h2>Devices:</h2>");
// document.write(join);
// var firstValue = fifoArray.pop();
// var secondValue = fifoArray.pop();
// var thirdValue = fifoArray.pop();
// var fourthValue = fifoArray.pop();
// document.write("<h2>Out:</h2>");
// document.write(firstValue);
// document.write("<h2>Out:</h2>");
// document.write(secondValue);
// document.write("<h2>Out:</h2>");
// document.write(thirdValue);
// document.write("<h2>Out:</h2>");
// document.write(fourthValue);
// Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Haier"];
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");
// ARRAYS AND LOOP
// var emptyArray = [[]];
// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// console.log(matrix);
// for (var i = 1; i <= 10; i++) {
//   document.write("<br>" + i);
// }
// var tableNum = parseInt(
//   prompt("Enter the number for the multiplication table:")
// );
// var tableLength = parseInt(
//   prompt("Enter the length of the multiplication table:")
// );

// for (var i = 1; i <= tableLength; i++) {
//   document.write(tableNum + " × " + i + " = " + tableNum * i + "<br>");
// }
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// document.write(fruits[0] + "<br>");
// document.write(fruits[1] + "<br>");
// document.write(fruits[2] + "<br>");
// document.write(fruits[3] + "<br>");
// document.write(fruits[4] + "<br>");
// document.write("<h1>Counting:</h1>");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + " , ");
// }
// document.write("<h1>Reverse Counting:</h1>");
// for (var i = 15; i >= 1; i--) {
//   document.write(i + " , ");
// }
// document.write("<h1>Even:</h1>");
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(i + " , ");
//   }
// }
// document.write("<h1>Odd:</h1>");
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 1) {
//     document.write(i + " , ");
//   }
// }
// document.write("<h1>Series:</h1>");
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.write(i + "k , ");
//   }
// }

// var A = [24, 53, 78, 91, 12];
// for (var a = 1; a <= 1; a++) {
//   document.write("<h2>Array Items :</h2>");
//   document.write(A);
// }
// var largestNum = A[0];
// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largestNum) {
//     largestNum = A[i];
//   }
// }
// document.write("<br> The largest number in the array is:", largestNum);
// var A = [24, 53, 78, 91, 12];
// var smallestNum = A[0];
// for (var i = 0; i < A.length; i++) {
//   if (A[i] < smallestNum) {
//     smallestNum = A[i];
//   }
// }
// document.write("<br> The smallest number in the array is:", smallestNum);
// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     document.write(i + "<br>");
//   }
// }
// STRING METHODS
// var firstName = prompt("enter the first name");
// var lastName = prompt("enter the last name");
// var fullName = firstName + " " + lastName;
// document.write("welcome " + fullName);

// var fvrtMb = prompt("enter your fvrt mb model name");
// document.write("My Favorite phone is : " + fvrtMb);
// document.write("<br> Length of a string " + fvrtMb.length);
// var country = "Pakistan";
// document.write(country + "<br>");
// var string = "Hello World";
// document.write(string);
// document.write("<br> Index of 'l': " + string.lastIndexOf("l"));
// var word = "PAKISTANI";
// document.write("string : " + word);
// document.write("<br> Character at index : " + word.charAt(3));
// var newWord = word.document.write(newWord);
// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");
// document.write("City : " + city);
// document.write("<br>  After replacement: " + replaceCity);
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var andReplace = message.replace(/and/g, "&");
// document.write(andReplace);
// var string = "472";
// document.write("value : " + string);
// document.write("<br> type: " + typeof string);
// var num = parseInt(string);
// document.write("<br> value : " + num);
// document.write("<br> Type : " + typeof num);
// var userInput = prompt("ënter any input");
// var upperCase = userInput.toUpperCase();
//document.write("User input : "+userInput)
// document.write("<br> Upper case : "+upperCase);
// var userInput = prompt("ënter any input");
// document.write("User input :" + userInput);
// var titleCase = "";
// for (var i = 1; i <= 1; i++) {
//   var word = userInput[i].toLowerCase();
//   var upperCase = userInput.charAt(0).toUpperCase() + userInput.slice(1);
//   document.write("<br> Title case : " + upperCase);
// }
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write(num);
// document.write("<br>" + numString);
// var userName = prompt("Enter your username:");
// var specialSymbols = ["@", ".", ",", "!"];
// var isCheck = true;

// for (var i = 0; i < specialSymbols.length; i++) {
//   if (userName.includes(specialSymbols[i])) {
//     isCheck = false;
//     break;
//   }
// }

// if (isCheck) {
//   alert("Username accepted: " + userName);
// } else {
//   var newUsername = prompt(
//     "Please enter a valid username without any special symbols [@ . , !]"
//   );
//   isCheck = true;

//   for (var i = 0; i < specialSymbols.length; i++) {
//     if (newUsername.includes(specialSymbols[i])) {
//       isCheck = false;
//       break;
//     }
//   }

//   if (isCheck) {
//     alert("Username accepted: " + newUsername);
//   } else {
//     newUsername = prompt(
//       "Please enter a valid username without any special symbols [@ . , !]"
//     );
//     isCheck = true;

//     for (var i = 0; i < specialSymbols.length; i++) {
//       if (newUsername.includes(specialSymbols[i])) {
//         isCheck = false;
//         break;
//       }
//     }

//     if (isCheck) {
//       alert("Username accepted: " + newUsername);
//     } else {
//       alert("Invalid username entered multiple times. Please try again later.");
//     }
//   }
// }
// var username = prompt("Enter your username:");
// var specialSymbols = ["@", ".", ",", "!"];
// var isValid = true;

// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     isValid = false;
//     break;
//   }
// }

// if (isValid) {
//   alert("Username accepted: " + username);
// } else {
//   var newUsername = prompt("Please enter a valid username without any special symbols [@ . , !]");
//   isValid = true;

//   for (var i = 0; i < specialSymbols.length; i++) {
//     if (newUsername.includes(specialSymbols[i])) {
//       isValid = false;
//       break;
//     }
//   }

//   if (isValid) {
//     alert("Username accepted: " + newUsername);
//   } else {
//     newUsername = prompt("Please enter a valid username without any special symbols [@ . , !]");
//     isValid = true;

//     for (var i = 0; i < specialSymbols.length; i++) {
//       if (newUsername.includes(specialSymbols[i])) {
//         isValid = false;
//         break;
//       }
//     }

//     if (isValid) {
//       alert("Username accepted: " + newUsername);
//     } else {
//       alert("Invalid username entered multiple times. Please try again later.");
//     }
//   }
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var lowerInput = userInput.toLowerCase();
// var lowerItems = A.map(function (item) {
//   return item.toLowerCase();
// });
// var found = lowerItems.includes(lowerInput);
// if (found) {
//   console.log(userInput + " is found in the list.");
//   alert(userInput + " is found in the list.");
// } else {
//   console.log(userInput + " is not found in the list.");
//   alert(userInput + " is not found in the list.");
// }

// var password = prompt("Enter a password:");
// if (password.length < 6) {
//   alert("Invalid password! Password must be at least 6 characters long.");
// } else if (!isNaN(password.charAt(0))) {
//   alert("Invalid password! Password must not start with a number.");
// } else {
//   var hasAlphabet = false;
//   var hasNumber = false;

//   for (var i = 0; i < password.length; i++) {
//     var char = password.charAt(i);
//     if (/[a-zA-Z]/.test(char)) {
//       hasAlphabet = true;
//     } else if (/[0-9]/.test(char)) {
//       hasNumber = true;
//     }
//   }

//   if (!(hasAlphabet && hasNumber)) {
//     alert(
//       "Invalid password! Password must contain both alphabets and numbers."
//     );
//   } else {
//     alert("Valid password!");
//   }
// }
// var university = "University of Karachi";
// var letters = university.split("");
// for (var i = 0; i < letters.length; i++) {
//   document.write(university[i] + "<br>");
// }
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write(userInput);
// document.write("Last Character of input:", lastCharacter);
// var sentence = "The quick brown fox jumps over the lazy dog";

// var wordCount = "the";
// var lowerSentence = sentence.toLowerCase();

// var words = lowerSentence.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === wordCount) {
//     count++;
//   }
// }
// var lowerSentence = sentence.toLowerCase();

// var words = lowerSentence.split(" ");
// document.write("text: " + sentence + "<br>");
// document.write("Occurrence(s) of the word 'the':", count);
//MATH METHODs
// var posiiveInteger = +prompt("Enter positive integer");
// document.write("number : " + posiiveInteger + "<br>");
// var round = Math.round(posiiveInteger);
// document.write("round off value : " + round + "<br>");
// var floor = Math.floor(posiiveInteger);
// document.write("flooor value : " + floor + "<br>");
// var ceil = Math.ceil(posiiveInteger);
// document.write("ceil value : " + ceil + "<br>");
// var negativeInteger = parseFloat(prompt("Enter negative integer"));
// document.write("number : " + negativeInteger + "<br>");
// var round = Math.round(negativeInteger);
// document.write("round off value : " + round + "<br>");
// var floor = Math.floor(negativeInteger);
// document.write("flooor value : " + floor + "<br>");
// var ceil = Math.ceil(negativeInteger);
// document.write("ceil value : " + ceil + "<br>");
// var num = parseFloat(prompt("Enter a number:"));
// var absoluteNum = Math.abs(num);
// document.write("Absolute value of " + num + " is " + absoluteNum);
// var diceNum = Math.floor(Math.random() * 6) + 1;
// document.write("Random Dice value : " + diceNum);
// var randomNum = Math.random();
// var tossResult;
// if (randomNum < 0.5) {
//   tossResult = "Heads";
// } else {
//   tossResult = "Tails";
// }
// document.write("Random Coin value: " + tossResult);
// var randomNum = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number r between 1 and 100 : " + randomNum);
// Prompt the user for their weight
// var userInput = prompt("Enter your weight:");
// document.write("The Weight of user is : " + userInput + " kgs");
// Generate a random secret number between 1 and 10
// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// var secretNumber = Math.round(Math.random() * 10) + 1;
// if (userInput === secretNumber) {
//   console.log("Congratulations! You guessed the secret number.");
//   alert("Congratulations! You guessed the secret number.");
// } else {
//   console.log(secretNumber + " Try again!");
//   alert(" Try again!");
//DATE METHODS
// var currentDate = new Date();
// var dateTime = currentDate.toString();
// document.write(currentDate);
// Get the current date
// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentMonthName = monthNames[currentMonth];
// document.write("Current Month: " + currentMonthName);
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayLetters = days[currentDay].slice(0, 3);
// document.write("Today is " + dayLetters);
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//   document.write("Its fun day");
// } else {
//   document.write("Its not fun day");
// }
// var today = new Date();
// var currentDay = today.getDay();
// if (currentDay < 16) {
//   document.write("First fifteen days of month");
// } else {
//   document.write("Last days of month");
// }

// var currentDate = new Date();
// var startDate = new Date("Jan 1, 1970");
// var elapsedMilliseconds = currentDate.getTime() - startDate.getTime();
// document.write(currentDate + "<br>");
// document.write("Elapsed milliseconds since January" + elapsedMilliseconds);
// var elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
// document.write("<br> Elapsed minutes since January" + elapsedMinutes);
// var currentTime = new Date();
// var currentHour = currentTime.getHours();
// var period;
// if (currentHour < 12) {
//   period = "AM";
// } else {
//   period = "PM";
// // }
// // document.write("It's " + period);
// var laterDate = new Date(2020, 11, 0);
// document.write("Later Date : " + laterDate);
// var startingDate = new Date("June 18, 2015");
// var today = new Date();
// var timeDiff = Math.abs(today.getTime() - startingDate.getTime());
// var daysPassed = Math.round(timeDiff / (1000 * 60 * 60 * 24));
// document.write(daysPassed + " days have  passed since 1st Ramadan , 2015");
// var referenceDate = new Date("Dec 5, 2015"); // Use your desired reference date here
// var beginningOf2015 = new Date("January 1, 2015");
// var timeDiff = Math.abs(beginningOf2015.getTime() - referenceDate.getTime());
// var secondsElapsed = Math.floor(timeDiff / 1000);
// document.write(
//   "On reference date " +
//     referenceDate +
//     "Seconds had  passed since the beginning of 2015: " +
//     secondsElapsed
// );
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// var currentTime = currentDate.toLocaleTimeString();
// document.write(
//   "Current date : " + currentDate + "<br>1 hour ago, it was " + currentTime
// );
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// document.write(year);
// var yearBack = year - 100;
// document.write(
//   "Current date : " + currentDate + "<br>100 years back, it was " + yearBack
// );
// var age = +prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your age is: " + age);
// document.write("<br> Your birth year is: " + birthYear);
// Input variables
// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = netAmountPayable * (latePaymentSurcharge / 100);
// var grossAmountPayable =
//   parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge);
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName);
// document.write("Current Month: " + currentMonth);
// document.write("Number of Units:" + numberOfUnits);
// document.write("Charges per Unit:" + chargesPerUnit);
// document.write("Net Amount Payable (within Due Date):" + netAmountPayable);
// document.write("Late Payment Surcharge:" + latePaymentSurcharge);
// document.write("Gross Amount Payable (after Due Date):" + grossAmountPayable);
// FUNCTION
// function displayDateTime() {
//   var currentDate = new Date();
//   var currentTime = currentDate.toLocaleTimeString();
//   document.write(currentDate + currentTime);
// }
// displayDateTime();
// function greet() {
//   var firstName = prompt("What is your first name?");
//   var lastName = prompt("What is your last name?");
//   var fullName = firstName + lastName;
//   document.write("Hello Wellcome " + fullName);
// }
// greet();
// function addNumbers() {
//   var num1 = parseInt(prompt("Enter first number:"));
//   var num2 = parseInt(prompt("Enter second number:"));
//   var sum = num1 + num2;
//   document.write("The sum of the two numbers is: " + sum);
// }
// addNumbers();
// function calculator(num1, num2, operator) {
//   var result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//       break;
//     default:
//       return "Invalid operator. Please enter a valid operator.";
//   }

//   return result;
// }
// var result = calculator(2, 4, "+");
// document.write(result);
// function square(num) {
//   return num * num;
// }
// var result = square(4);
// document.write(result);
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// var result = factorial(3);
// document.write(result);
// function countNums(start, end) {
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// var result = countNums(1, 10);
// document.write(result);
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }
//   var hypotenuseSquared =
//     calculateSquare(base) + calculateSquare(perpendicular);

//   var hypotenuse = Math.sqrt(hypotenuseSquared);
//   return hypotenuse;
// }
// var hypotenuse = calculateHypotenuse(3, 4);
// document.write(hypotenuse);
// Approach 1: Arguments as value
// function calculateRectangleArea1(width, height) {
//   var area = width * height;
//   return area;
// }
// var area1 = calculateRectangleArea1(5, 10);
// console.log(area1); // Output: 50

// // Approach 2: Arguments as variables
// function calculateRectangleArea2(width, height) {
//   var area = width * height;
//   return area;
// }
// var width = 5;
// var height = 10;
// var area2 = calculateRectangleArea2(width, height);
// console.log(area2); // Output: 50
// function isPalindrome(str) {
//   var cleanedStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
//   var reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// function capitalizeFirstLetters(str) {
//   var capitalizedWords = [];
//   var words = str.split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     capitalizedWords.push(capitalizedWord);
//   }

//   var result = capitalizedWords.join(" ");
//   return result;
// }
// console.log(capitalizeFirstLetters("the quick brown fox"));
// function findLongestWord(str) {
//   var words = str.split(" ");
//   var longestWord = "";

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord("Web Development Tutorial"));
// function countOccurrences(str, letter) {
//   var count = 0;

//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countOccurrences("JSResourceS.com", "o"));
// function calcArea(radius) {
//   var area = Math.PI * Math.pow(radius, 2);
//   console.log("The area is " + area);
// }
// calcArea(5);
// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DOWHILE LOOPS
// function power(a, b) {
//   return Math.pow(a, b);
// }
// console.log(power(2, 4));
// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(leapYear(2023));
// function triangleArea(a, b, c) {
//   var s = (a + b + c) / 2;
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// console.log(triangleArea(3, 4, 5));
// function calculateAverage(subject1, subject2, subject3) {
//   var average = (subject1 + subject2 + subject3) / 3;
//   return average;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//   var totalMarks = 300;
//   var obtainedMarks = subject1 + subject2 + subject3;
//   var percentage = (obtainedMarks / totalMarks) * 100;
//   return percentage;
// }

// function mainFunction(subject1, subject2, subject3) {
//   var average = calculateAverage(subject1, subject2, subject3);
//   var percentage = calculatePercentage(subject1, subject2, subject3);

//   console.log("Average marks: " + average.toFixed(1));
//   console.log("Percentage: " + percentage.toFixed(1) + "%");
// }
// mainFunction(80, 75, 90);
// function indexOf(string, searchChar) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === searchChar) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(indexOf("word", "o"));
// function delVowels(sen) {
//   var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   var result = "";

//   for (var i = 0; i < sen.length; i++) {
//     var char = sen[i];
//     if (!vowels.includes(char)) {
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(delVowels("hello i am maira"));
// function countVowels(text) {
//   var vowels = "aeiouAEIOU";
//   var count = 0;

//   for (var i = 0; i < text.length - 1; i++) {
//     var char = text[i];
//     var nextChar = text[i + 1];

//     if (vowels.includes(char) && vowels.includes(nextChar)) {
//       switch (char + nextChar) {
//         case "ea":
//         case "EA":
//         case "ei":
//         case "EI":
//         case "eu":
//         case "EU":
//         case "io":
//         case "IO":
//         case "ia":
//         case "IA":
//         case "ou":
//         case "OU":
//           count++;
//           break;
//         default:
//           break;
//       }
//     }
//   }

//   return count;
// }
// console.log(countVowels("hellou maira"));
// function convertMeters(distanceKm) {
//   return distanceKm * 1000;
// }

// function convertFeet(distanceKm) {
//   return distanceKm * 3280.84;
// }

// function convertInches(distanceKm) {
//   return distanceKm * 39370.1;
// }

// function convertCentimeters(distanceKm) {
//   return distanceKm * 100000;
// }

// function distanceConversions(distanceKm) {
//   var distanceMeters = convertMeters(distanceKm);
//   var distanceFeet = convertFeet(distanceKm);
//   var distanceInches = convertInches(distanceKm);

//   console.log("Distance in Meters: " + distanceMeters);
//   console.log("Distance in Feet: " + distanceFeet);
//   console.log("Distance in Inches: " + distanceInches);
//   console.log("Distance in Centimeters: " + distanceCentimeters);
// }

// var distance = 100;
// console.log(distanceConversions(distance));
// function overtimePay(hoursWorked) {
//   var regularHours = 40;
//   var overtimeRate = 12.0;

//   if (hoursWorked <= regularHours) {
//     return 0;
//   } else {
//     var overtimeHours = hoursWorked - regularHours;
//     var overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   }
// }
// var hours = 45;
// var overtimePay = overtimePay(hours);
// // console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
// function calculateCurrencyNotes(amount) {
//   var denomination100 = Math.floor(amount);
//   var denomination50 = 0;
//   var denomination10 = 0;

//   if (amount % 1 !== 0) {
//     return "Invalid input. Amount should be in whole hundreds.";
//   }

//   if (denomination100 >= 5) {
//     denomination50 = Math.floor(denomination100 / 2);
//     denomination100 = denomination100 % 2;
//   }

//   if (denomination50 >= 2) {
//     denomination10 = Math.floor(denomination50 / 5);
//     denomination50 = denomination50 % 5;
//   }

//   return {
//     100: denomination100,
//     50: denomination50,
//     10: denomination10,
//   };
// }

// var amount = prompt("Enter the  amount to withdraw!!");
// var parsedAmount = parseInt(amount);

// if (!isNaN(parsedAmount)) {
//   var currencyNotes = calculateCurrencyNotes(parsedAmount);
//   var result = "Currency Notes:\n\n";
//   result += "100: " + currencyNotes[100] + " notes\n";
//   result += "50: " + currencyNotes[50] + " notes\n";
//   result += "10: " + currencyNotes[10] + " notes\n";

//   document.write(result);
// } else {
//   alert("Invalid input. Please enter a valid number.");
// }
// EVENTS
// function showAlert() {
//   alert("Link clicked!");
// }
// function showMessage() {
//   alert("Hello, this is an alert message!");
// }
// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }
// var image = document.getElementById("image");

// image.addEventListener("mouseover", function () {
//   image.src =
//     "https://th.bing.com/th/id/R.7c404e00585d96921c22e27c6cf84c0e?rik=lM1A5uQfPbLYRw&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fnight%2fnight-13.jpg&ehk=F0t%2bhm2TTYY3LhK6%2bIlLLAph1ZTq93Ha4S%2bPAqUiLmE%3d&risl=&pid=ImgRaw&r=0";
// });

// image.addEventListener("mouseout", function () {
//   image.src =
//     "https://th.bing.com/th/id/OIP.z1gmV--v-2VrI3mKlK5vGwHaEo?pid=ImgDet&rs=1";
// });
// var counter = 0;
//     var counterElement = document.getElementById("counter");
//     var increaseBtn = document.getElementById("increaseBtn");
//     var decreaseBtn = document.getElementById("decreaseBtn");

//     increaseBtn.addEventListener("click", function() {
//       counter++;
//       counterElement.textContent = counter;
//     });

//     decreaseBtn.addEventListener("click", function() {
//       if (counter > 0) {
//         counter--;
//         counterElement.textContent = counter;
//       }
//     });
// EVENTS
// var signupForm = document.getElementById("signupForm");
// var submittedData = document.getElementById("submittedData");

// signupForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var name = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var formData = document.createElement("p");
//   formData.textContent =
//     "Name: " + name + "Email: " + email + "Password: " + password;

//   submittedData.appendChild(formData);
//   signupForm.reset();
// });
// var readMoreButtons = document.querySelectorAll(".read-more");
// readMoreButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var item = button.parentNode;
//     var details = item.querySelector(".details");
//     var summary = item.querySelector(".summary");

//     if (details.style.display === "none") {
//       details.style.display = "block";
//       button.textContent = "Read less";
//     } else {
//       details.style.display = "none";
//       button.textContent = "Read more";
//     }
//   });
// });
// Chap 3 of EVENTS
// var zoomInButton = document.getElementById("zoomIn");
//     var zoomOutButton = document.getElementById("zoomOut");
//     var zoomedText = document.getElementById("zoomedText");

//     zoomInButton.addEventListener("click", function() {
//       var currentFontSize = parseInt(getComputedStyle(zoomedText).fontSize);
//       zoomedText.style.fontSize = (currentFontSize + 10) + "px";
//     });

//     zoomOutButton.addEventListener("click", function() {
//       var currentFontSize = parseInt(getComputedStyle(zoomedText).fontSize);
//       zoomedText.style.fontSize = (currentFontSize - 10) + "px";
//     });
// DOM
var mainContent = document.getElementById("main-content");
console.log(mainContent.children);
var renderElements = document.querySelectorAll(".render");
renderElements.forEach(function (element) {
  console.log(element.innerHTML);
});
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Alex";
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
lastNameInput.value = "Bank";
emailInput.value = "alexbank@example.com";
window.onload = function () {
  // i. What is the node type of the element with id "form-content"?
  var formContent = document.getElementById("form-content");
  var formContentType = formContent.nodeType;
  console.log("Node type of 'form-content': " + formContentType);

  // ii. Show the node type of the element with id "lastName" and its child nodes
  var lastNameElement = document.getElementById("lastName");
  var lastNameNodeType = lastNameElement.nodeType;
  var lastNameChildNodes = lastNameElement.childNodes;
  console.log("Node type of 'lastName': " + lastNameNodeType);
  console.log("Child nodes of 'lastName':", lastNameChildNodes);

  // iii. Update the child node of the element with id "lastName"
  lastNameElement.childNodes[0].nodeValue = "Updated Last Name";

  // iv. Get the first and last child of the element with id "main-content"
  var mainContentElement = document.getElementById("main-content");
  var firstChild = mainContentElement.firstChild;
  var lastChild = mainContentElement.lastChild;
  console.log("First child of 'main-content':", firstChild);
  console.log("Last child of 'main-content':", lastChild);

  // v. Get the next and previous siblings of the element with id "lastName"
  var lastNameSiblingNext = lastNameElement.nextSibling;
  var lastNameSiblingPrevious = lastNameElement.previousSibling;
  console.log("Next sibling of 'lastName':", lastNameSiblingNext);
  console.log("Previous sibling of 'lastName':", lastNameSiblingPrevious);

  // vi. Get the parent node and node type of the element with id "email"
  var emailElement = document.getElementById("email");
  var emailParentNode = emailElement.parentNode;
  var emailNodeType = emailElement.nodeType;
  console.log("Parent node of 'email':", emailParentNode);
  console.log("Node type of 'email':", emailNodeType);
};
