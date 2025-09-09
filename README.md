1) What is the difference between var, let, and const?

i. var was introduced very first time in JS in 1995 when JS was made. any type of data can be declared with var. can be re declared and updated. ver allows hoisting.

ii. let was introduced in 2015 in JS called JS ES6 version. let only use to declare number type data. and it allows redeclarition and updation as well.
it does not allow hoisting means when you declare a variable in let, it sets a
TDZ means temporal dead zone means you can not able to get access the variable before innitialization.

iii. const was also introduced in 2015 in ES6 JS. const uses for string data type but number can be declared as well. const has a condition that, if you declare somthing with const you cannot change its value later. when it declares this would be its final value... its also maintain the hoising means
the temporal deadzone.


2) What is the difference between map(), forEach(), and filter()?

i. map(): map is an array method that loops through all the elements of an array,
and applies a transformation, and returns a new array with those transformation element.

ii. forEach(): forEach is also an array method that also loop through all the elements performs an action but does not return a new array.

iii. filter(): filter is a also an array method uses conditions that also loop through all the elements of an array and returns the new array of only of those elements that matches the condition.


3.What are arrow functions in ES6?

Arrow => function is a simple and shorter version of a function thats works 
just like any other function in JS. and yes it was also introduced in 2015 with let and const. 

it use arrows => insted of a (function) word and the benefit of using arrow 
function is it can be written in one line and multiline as well. but in one line arrow function it doesn't need to return but if the arrow function is multiline, it requires to be return the function.


4) How does destructuring assignment work in ES6?

destructuring assignment lets you unpack values from an array or an object in very simple way. What you gonna do is, in an array, remove the the normal variable name and write the [] bracket and into the bracket set the variable with your choice and if you put inside the bracket you can set same amount of variable the amount of array element have inside the array and each one element will take each one of the variable.                                    
ex: const [a, b, c, d] = [1, 2, 3, 4];
here, the value of a is 1, b = 2, c = 3, and d = 4.


Explain template literals in ES6. How are they different from string concatenation?

Template literals: Template literals is a new way of working with strings using backticks(``) insted of quotes(''). you can use variable or any value 
using ${}. and all the thing besically same as normal text just inside the 
`` backticks.

The differences between template literals and string concatenation is it use (+) to connect the string and variable value, and it's not readable friendly.

but template litarels is more cleaner and more powerful as you can use it dynamically.