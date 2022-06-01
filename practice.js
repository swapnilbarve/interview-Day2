Explain call(), apply() and, bind() methods.
ans:- call() call method involve a function with a given this value and argument provide one by one 

apply():- involve a function with a given the value and allows you pass in argument as an Array.apply

bind();- return a new function allowing you to pass any number of argument

//========================================================================================================================

2)Explain prototypes?

ans;- prototypes is a blueprint of an object prototypes allows us to properties and method of an object even if the 
    properties and method do not exist on the current object prototype object will be created inside the object which refer 
    to the prototype.Array


//==========================================================================================================================


3)What are promises and why do we need them?
ans:-The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

"Producing code" is code that can take some time

"Consuming code" is code that must wait for the result


//=====================================================================================================================

4)What are function constructors?
ans :- The Function constructor creates a new Function object. Calling the constructor directly can create
 functions dynamically, but suffers from security and similar (but far less significant) performance issues 
 to Global_Objects.


 //======================================================================================================================

5)What is an event loop and call stack?
ans:- JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
 collecting and processing events, and executing queued sub-tasks. 


 A call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple
     functions 


 //====================================================================================================================


 6)What is prototype chain?
ans :-That means all the objects in JavaScript, inherit the properties and methods from Object. prototype.  is called
 Prototype chaining.



 //====================================================================================================================

 7)What is the use of setTimeout?
 ans :-setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of 
 code once the timer expires.


 //===================================================================================================================


 8)What is callback hell?
 ans:- calback hell is an anti pattern with multiple nested callback which make code hard to read and debug when 
 dealing with asynchronous logic.


 //===================================================================================================================


 9)What is creation phase and execution phase?
 ans:-Create the global object i.e., window in the web browser or global in Node. js. Create the this object
  and bind it to the global object. Setup a memory heap for storing variables and function .

  an execution context is an abstract concept of an environment where the Javascript code is evaluated
   and executed. Whenever any code is run in JavaScript, it's run inside an execution context.


//===================================================================================================================


10)what are callbacks in javascript?
ans:-A JavaScript callback is a function which is to be executed after another function has finished execution


//===================================================================================================================


11)Give an example of closure?
ans:-
let counter = 0;

function add() {
  let counter = 0;
  counter += 1;
}

add();
add();
add();


//==================================================================================================================



12) Give an example of inheritance using function constructor?
ans:-function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, 
specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}
console.log(Employee.prototype);
console.log(Developer.prototype);