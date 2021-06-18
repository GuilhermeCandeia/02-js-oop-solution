# Instructions

<br>

The public URL to the assessment: https://www.qualified.io/assess/5f7dc5e3782691000ee88b54

<br>

# OOP Bookstore

<br>

## Context

We have learned Object-Oriented Programming and how class and inheritance work in JavaScript. Now, you will have a chance to check your understanding of these concepts.

<br>

## Getting Started

All your work should be done in the `index.js` file. More specifically, your task is to implement the two classes: `class Book` and `class Bookstore`.
The `class` declarations are already provided in the `index.js` file.

Due to the testing environment set up, you should not change the name of the provided class declarations `class Bookstore {}` and `class Book {}`.

<br>

To begin working you just need to start writing your code inside the class block, where indicated by the comment `// your code here`.

<br>

## Your code and submission

To check on your progress and if you are passing the tests, you can click on the `RUN TESTS` button.

In addition to this, you can reference the tests by opening the `index.test.js` file.

**_Hint_**: You may want to reference the test output (in the `Run Output` panel) since there might be some edge cases stated in the tests, that might not be too obvious from instructions.

<br>

#### Final Submission

While taking the challenge, you can check your progress multiple times via the `RUN TESTS` button.

To submit your work, you should click on the `SUBMIT` button. You will be asked to review your code and make a final submission. After you are done with the final submission you won't be able to resubmit your code again.

<br>

## Tasks & Objectives

You will be working in the `index.js` file. The objective is to successfully implement the two classes:`Book` and `Bookstore` and pass all of the provided tests.

<br>

### 1. Create the classes with their properties

Create two classes: `Book` and `Bookstore`.

**_Hint_**: These two classes are not extending each other, they are just 2 separate classes.

- **The `Book` class**

The **Book** class will be used to create object instances that represent books. Each book will have a _title_ and the _quantity_ of the books available in the book store. It should have the following properties in the `constructor()` method:

- Should receive 2 arguments in the constructor (_`title`_, _`quantity`_).
- Should have a `title` property, with the value _`title`_ assigned to it.
- Should have a `quantity` property, with the value _`quantity`_ assigned to it.

<br>

- **The `Bookstore` class**

  The **Bookstore** class will be used to create object instances that represent book stores. Each book store will have a _name_ and the list of _books_ it has in its inventory.
  It should have the following properties in the `constructor()` method:

  - Should receive 1 argument in the constructor (_`name`_).
  - Should have a `name` property, with the _`name`_ argument value assigned to it.
  - Should have a `books` property, with an empty array value _`[ ]`_ assigned to it.

<br>

### 2. Create methods

<br>

#### The class `Book` method

Once finished with implementing the basic structure of both classes you should move on to create the methods required on `Book` class.

The `Book` class should have only one method:

1. **`changeTitle`:**
   - Should be a function.
   - Should receive 1 argument, a new title string.
   - Should update the `title` property and set the new title.

<br>

#### The class `Bookstore` methods

The next step is to create the required method for the `Bookstore` class.

The `Bookstore` class should have the following methods:

1.  **`storeBook`:**

- Should be a function.
- Should receive 1 argument, a book object (`book`).
- Should add a received book object to the `books` array.

2.  **`getBook `:**

- Should be a function.
- Should receive 1 argument, a book title (`title`).
- Should check if the book with the given title exists in the `books` array and return it if found.
- Should return `false` if the book with the given title can't be found in the `books` array.

3.  **`getAllBooks`:**

- Should be a function.
- Should return the `books` array.

<br>

**Good luck!**

-_Your Ironhack team_
