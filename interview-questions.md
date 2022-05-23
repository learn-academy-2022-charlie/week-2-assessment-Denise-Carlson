# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is a classification of different variables. For example the variable notEven has a parameter of a number in other words when this variable is assigned it will contain the datatype of number. It is helpful in coding to give the parameter expected in the variable when writing a function. It can also be used in Jest, where you set up your test to check for a certain variable type and check your output for the expected ouput parameter. An argument is usually used with a function, but can also be used with a conditional statement or loop. An argument sets up a set of conditons or uses diffent methods to create a desired output that satisfies the condition. An argument can also be used to test diffrent conditions and return only the output that either meets the condition or if utilizing the ! bang operator the exact opposite of that condition being tested.

  Researched answer: I was close in my answer but an argument corresponds to the parameter that is located in the same position in a list. A parameter is a variable that is part of the method being used. I really like this analogy I found on stack overflow which was quoted from MSDN, " Parameter is the parking space and the argument is an car." You can pass arguments when calling a function and then this function receives parameters. An argument can be a value, variable, or reference while the parameter receives the variable that is located within the function or code block. Parameters define the type of data, have names which serve as a local variable and is declared using a function. Once defined, they are fixed. Arguments are passed to a function and invoked, they can be values or variables and define what we are passing. Arguments are expressions  and the data type matches the defined datatype for the parameter.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The map method takes an array and returns a different array with the specified output. It uses the parameters of value, variable. There is an optional one that I am not very familar with. I haven't used it much but I could definitely research it. I have used the map method while in school for various coding challenges and assessments. 

  Researched answer:



3. What is the difference between map and filter?

  Your answer: Both map and filter are built-in methods in javascript. I have used both methods while solving challenges and completing coding prompts in my  Learn bootcamp. The key difference involves the output. They can both be used to output values in array. The filter is used to output an new array containing only the specified parameters. Map method is used to output a new array containing the same length as the original array but with the specified conditions. Here's an example, [1, 2, 3, 4] input and you want to output an array mutiplied by 2. Using the map method, the new array [2, 4, 6, 8].

  Researched answer: The map method converts each item in an array. The filter method selects items from an array returning an array with just those items that meet the selected criteria. Filter loops over the array and executes the callback while also checking its return value. If the filtered value meets the condition, the value is in the new filtered array, if it doesn't meet the conditon the element is removed and isn't in the new filtered array. Map does a similar thing but the callback checks every element and updates the existing array to the new array.



4. What is the difference between a function and a method?

  Your answer: A function takes an input and returns the output based on the criteria desired. Functions are used in dynamic programing. They are able to be reused in other parts of your code. A function in javascript uses arrow notation. During my time as a developer I have used functions in various ways. A method is a built-in function used in javascript. Methods are ways to simplify certain blocks of code into a single word that then preforms the required action. For example methods use dot notation while functions use arrow notation. You can use methods with arrays or objects and also on arrays of objects. 

  Researched answer: methods are procedures or functions used in object-orientated programming. A function is logic that can be used change data. Method is function specifically used to change data of the object it belongs to. In javascript the function passes the data and can return it. The method uses data contained in a class. Actions preformed on objects are methods. Methods are object properties that have function values. A function uses parameters in its use, a method does not.
  Data passed to a function is explicit and a function is independent. A method is implicit and passes to the object, it cannot be used without an object. Functions are called using its name and method is called by its method name using dot notation or square bracket notation. Parenthesis operator is used to invoke a function. Methods are invoked using the objectName.methodName().



5. What is object destructuring?

  Your answer: It's a way to assign variables in javascript. In general programming terms, object destructuring refers to being able to separate things out of an array or object and turn them into individual data items again. It's very useful in programming because you can use it to un-nest items,remove items from an array or object and being able to take out properties of an object. I have utilized object destructuring in javascript. 

  Researched answer: Object destructuring is used to pull elements out of an object and bind them to variables, is very helpful for nested objects. It is utilized using keys as the name of the variable. It must match the key name of the object or it will be undefined. Values are pulled out using keys instead of position like an array. A rest operator (...)can be used to put all the remaining keys belonging to an object in a new object variable. By using this technique its possible to streamline your code and avoid duplicating property names and object variables. When you destructure its possible to assign a default value if identifier property doesn't exist. This also allows for aliases which are variables of different names than the properties. You can place destructured objects inside the parameters list of a function.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I am not entirely sure but  I thik that hoisting is when in programming you elevate your object so it receives priority in your function. I honestly haven't used this much in my programming up to now but I'm still learning and I enjoy researching new ways to program and create functional and dynamic code in javascript.

  Researched answer: For guessing this answer I was partially correct. Hoisting is not elevating an object but rather moving all declarations at the top of the scope before code is executed. Javascript interpreter splits the declaration and assignment of functions and variables by allowing them to be used before they are declared. If you console.log before it subsequently declared in your code it won't output an error in your console instead it will be undefined. This hoisting can also cause a reference error if you use an undeclared variable before its assignment this is due to the fact that the declaration was hoisted. When let or const variables are declared they are hoisted but unlike var, they are not initialized with a default value so if you access it before it is declared, you get a reference error not undefined. Function hoisting lets you call a function before it is defined. Function declarations are hoisted but not function expressions or variable assignments. Class declarations are not hoisted so you must declare a class before you can use it.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: This is not strictly used for javascript as it applies to all object oriented programming. It allows you to define a child class that inherits or extends the behavior of the parent class. You can create classes based on other classes. In javascript you use the extends keyword to inherit methods from a class and super to refer to the parent class. This is useful to create dynamic and reusable code because you are able to reuse the properites and methods of a class to create a new class.

2. React: A javascript library created by Facebook which is a tool used for building UI (user interface). React uses elements which are displayed using React.DOM.render(element, document.getElementById("root")). These elements cannot be changed. The components of react are javascript functions. It is free and open-source it can be used for state management and rendering that state to the DOM. React uses declarative programming. A developer designs views according to each state and React updates and renders these components when data is changed. Components in React are resusable. They can be rendered using a DOM library.

3. React state: React components have a built in state object. This is used to store property values that belong to the component.If the state object changes the component re-rerenders this is due to the idea that they cannot be changed instead  a new version is made. setState()method is used to change a state object. The output changes according to the new value. The state object is initialized using constructor keyword. You can refer  to the state object using this.state.propertyname syntax. 

4. React lifecycle methods: This refers to the lifecycle of a component. Its a series of events that happen when a react component is first made, altered and then when it dies. The first step mounting adds nodes to the DOM. Updating is when existing nodes are changed from the DOM. Unmounting is removing nodes from the DOM and error handling is the process of making sure your code is working and doesn't have any bugs. During mounting the code and react's internals are inserted into the DOM. When a component changes it grows this change happens using state or props. When a component is no longer needed it is unmounted or removed from the DOM. Different keywords are used for each part of the lifecycle and constructor()is used before a component is mounted to the DOM. Render is used to render elements to the DOM.

5. DOM: Stands for Document Object Model and in React, all DOM properties and attributes are written in camelCase. In HTML tabindex corresponds to tabIndex in React. You can use JSX to store HTML markups within javascript variables. DOM is a standard logical representation of a webpage according to the World Wide Web Consortium. You can think of it like a tree with elements and properities of a website which are called nodes. React uses a virtual DOM which is a copy of the DOM used for user updates.
