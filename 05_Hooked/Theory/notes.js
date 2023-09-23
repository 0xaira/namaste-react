/*
Named Imports
import { add, multiply } from './math.js';
console.log(add(5, 10)); // 15

Default Imports
import multiply from './math.js';
console.log(multiply(5, 10)); // 50

Import Everything
import * as math from './math.js';
console.log(math.add(5, 10)); // 15

Named Exports
export const add = (x, y) => x + y;

Default Exports
const multiply = (x, y) => x * y;
export default multiply;

Exporting Multiple Things
export const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
export { multiply };

*/

// Every component in React maintains a state .
// State is an object that determines how that component renders & behaves.
// In other words, "state" is what allows you to create components that are dynamic and interactive.
// State is a plain JavaScript object that is local to one component.

// What is Hooks?
// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// Hooks don’t work inside classes — they let you use React without classes.

// Why Hooks?
// 1. It's hard to reuse stateful logic between components
// 2. Complex components become hard to understand
// 3. Classes confuse both people and machines

// What us useState?
// useState is a Hook that allows you to have state variables in functional components.
// You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

/*
Creating variables with Js
const searchText = "TYPEHERE";

Creating variables with React using useState
const [searchText] = useState("TYPEHERE");

useState is a function that returns an array with 2 values:
1. The first value is the current value of the state, and the second value is a state setter function that allows you to update the state value.
2. The useState function takes the initial state as an argument. In the example above, the initial state is "TYPEHERE".


*/

// What is the difference between state and props?
// Props (aka "properties") and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

// Why do we use state variables in React?
// State variables are used to hold information that influences the output of the render method. The render method will render the UI based on the current state of the component. The state of the component can change over time. The state is mutable while props are immutable.

// React one way binding
// In one-way data binding, the view (UI) part of an application does not change by itself. Whenever the model changes, the view gets updated by triggering a mechanism called as data binding. In one-way data binding, the data flows in a single direction from the model to the view.

/*



*/
