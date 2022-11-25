import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-semibold">
        Welcome to <span className="text-sky-400">My Blogs</span>{" "}
      </h2>
      <div>
        <div className="bg-sky-100 p-4 my-4 rounded-md">
          <h2 className="text-2xl mb-2">
            Q: What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="text-md">
            Every React component has a built-in state. This state is an object
            which stores the property values that belong to a component. State
            is able to keep data from different components in-sync because each
            state update re-renders all relevant components. The built-in way
            that React provides for setting component states is by using
            setState() and adding “local state” to a class. There are several
            other ways to manage state​s in React, including the use of: Hooks
            React Context API Apollo Link State. The built-in setState() method
            updates a variable’s value in the classes’ local store. This local
            store allows the updated variable values to be accessed by any
            function that may require these values. setState() tells React that
            this component and its children (sometimes delayed and grouped into
            a single batch) should be re-rendered with the most updated state;
            this re-render is often based on user-triggered events.
          </p>
        </div>
        <div className="bg-sky-100 p-4 my-4 rounded-md">
          <h2 className="text-2xl mb-2">
            Q: How does prototypical inheritance work?
          </h2>
          <p className="text-md">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object. At the end of the
            prototype chain is Object.prototype. All objects inherit the
            properties and methods of Object. Any attempt to search beyond the
            end of the chain results in null. If you look for the prototype of
            the prototype of an array, a function, or a string, you’ll see it’s
            an object. And that’s because in JavaScript all objects are
            descendants or instances of Object.prototype, which is an object
            that sets properties and methods to all other JavaScript data types.
            Each type of prototype (for example array prototype) defines its own
            methods and properties, and in some cases overrides the
            Object.prototype methods and properties (that’s why arrays have
            methods that objects don’t).
          </p>
        </div>
        <div className="bg-sky-100 p-4 my-4 rounded-md">
          <h2 className="text-2xl mb-2">
            Q: What is a unit test? Why should we write unit tests?
          </h2>
          <p className="text-md">
            Unit testing is a type of software testing where individual units or
            software components are tested. Its purpose is to validate that each
            unit of code performs as expected. A unit can be anything you want
            it to be — a line of code, a method, or a class. Generally, smaller
            tests are better as they give a more granular view of your code’s
            performance. Also, when you test very small units, your tests can
            run fast, like a thousand tests in a second fast. Unit tests save
            time and money. Usually, we tend to test the happy path more than
            the unhappy path. If you release such an app without thorough
            testing, you would have to keep fixing issues raised by your
            potential users. The time to fix these issues could’ve been used to
            build new features or optimize the existing system. Bear in mind
            that fixing bugs without running tests could also introduce new bugs
            into the system. Well-written unit tests act as documentation for
            your code. Any developer can quickly look at your tests and know the
            purpose of your functions. It simplifies the debugging process. Unit
            testing is an integral part of extreme programming. Extreme
            programming is basically a “test-everything-that-can-possibly-break”
            programming strategy. Unit tests make code reuse easier. If you want
            to reuse existing code in a new project, you can simply migrate both
            the code and tests to your new project, then run your tests to make
            sure you have the desired results. Unit testing improves code
            coverage. A debatable topic is to have 100% code coverage across
            your application.
          </p>
        </div>
        <div className="bg-sky-100 p-4 my-4 rounded-md">
          <h2 className="text-2xl mb-2">Q: React vs. Angular vs. Vue?</h2>
          <p className="text-md">
            When it comes to front-end development, only one language can claim
            monopoly and that is Javascript. However, the case is not the same
            with Javascript frameworks, and what makes it even more difficult to
            choose is that JS has 24 frameworks and over 83 libraries, each
            having unique and varied functionality. The three most popular JS
            frameworks are Angular, React, and Vue, which have left the others
            behind by a huge margin. (Strictly speaking, however, React is not a
            framework, but simply a library.). Both - Angular JS and React JS
            frameworks are used to create web interfaces for front end
            development. Angular is Google's matured and advanced JavaScript
            framework based on TypeScript, whereas Vue is a progressive
            open-source front-end JavaScript framework created by Evan You.
            Angular JS, a framework created by Google in 2010 React JS, a
            library created by Facebook in 2013 Vue JS, a framework created by
            Google employee Evan You (the reason why Vue has all the robust
            features of Angular baked into it). All three have their perks-
            Angular is robust and time-tested, React is flexible and quick, Vue
            is simple and high-performing. But the kind of framework or library
            you need for your business depends solely on your business demands
            and the vision you have for your web app. The best way to go about
            this would be to bring a front end development services firm on
            board and explain in detail what you want out of the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
