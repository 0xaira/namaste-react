// JSX can only have one parent element
// React.Fragment is a built-in component that allows us to group a list of children without adding extra nodes to the DOM(example divs)

// Config Driven UI
// All the frontend UI is driven by a config file that is loaded from the backend on page load and then cached in the browser for the duration of the session. This config file is a JSON object that contains all the information needed to render the UI. It contains the following information:
//  - The list of pages and their corresponding components 
//  - The list of components and their corresponding templates
//  - The list of templates and their corresponding fields
//  - The list of fields and their corresponding types
//  - The list of types and their corresponding properties

// What is React Virtual DOM?
// The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

// React Reconciliation
// When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.

// React Fiber
// React Fiber is a complete rewrite of the React core, designed to enable a new set of features and ongoing improvements for the future of React. Some of the features include:
//  - Incremental rendering of components
//  - Ability to pause, abort, or reuse work as new updates come in
//  - Ability to assign priority to different types of updates

// Diff Algorithm
// React uses a diffing algorithm to determine the changes in the virtual DOM, and then updates the real DOM to match the virtual DOM. This process is called reconciliation.


