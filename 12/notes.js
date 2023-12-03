/*
Why Testing is Important?
1. Testing is important to check whether the application is working as expected or not.
2. Testing is important to deliver a bug-free application to the client.
3. Testing is important to ensure that the application is working as expected even after the change.

Types of Testing
1. Unit Testing
2. Integration Testing
3. Functional Testing
4. End-to-End Testing
5. Smoke Testing
6. Sanity Testing
7. Regression Testing
8. Acceptance Testing
9. Load Testing
10. Stress Testing

Unit Testing
1. Unit Testing is a level of software testing where individual units/ components of a software are tested.
2. The purpose is to validate that each unit of the software code performs as expected.

Integration Testing
1. Integration testing is a level of software testing where individual units are combined and tested as a group.
2. The purpose of this level of testing is to expose faults in the interaction between integrated units.

Functional Testing
1. Functional testing is a level of software testing where the system is tested against the functional requirements/specifications.
2. The purpose of Functional tests is to test each functionality of the system, by providing appropriate input, verifying the output against the functional requirements.

End-to-End Testing
1. End-to-end testing is a level of software testing where a complete application is tested from start to finish.
2. The purpose of this type of testing is to simulate the real user scenario and validate the system under test and its components for integration and data integrity.





*/

/*
Jest: JavaScript Testing Framework with a focus on simplicity. 

React Testing Library: Testing Library is a very light-weight solution for testing React components. 
It provides light utility functions on top of react-dom and react-dom/test-utils,
in a way that encourages better testing practices.

Steps:
Install React Testing Library: npm i @testing-library/react
Install Jest: npm i jest
Configure Jest: npx jest --init(creates jest.config.js file)
Install jest-environment-jsdom
Install babel-jest(used to transform the code before running the test - npm install --save-dev babel-jest @babel/core @babel/preset-env)
Configure babel: create babel.config.js file and add the following code:
Create a test file: z.test.js (test file name should end with .test.js and should be in the same folder as the component file under __tests__ folder) 
Run the test: npm run test

Now to test React components, we need to import React Testing Library functions in the test file.
Install: npm i @babel/preset-react (used to transform JSX into React.createElement)
Configure babel: add the following code in babel.config.js file:


*/