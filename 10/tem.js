/*

Higer Order Component (HOC) for React
These are functions that take a component and return a new component with additional functionality 
or props. They are a pattern that emerges from React’s compositional nature. 

UI consists of UI Layer and Data Layer
UI Layer: React Components
Data Layer: Redux, Relay, Falcor, etc.
UI Layer and Data Layer are separate and independent, but they need to communicate. UI layer get powered by Data Layer. 

Props Drilling:  passing props from a parent component to a child component, and then to another child component, and so on. 
This can be cumbersome and difficult to maintain. 

Context:  a way to pass data through the component tree without having to pass props down manually at every level. 
useContext: a hook that allows you to consume context. 
useContext(MyContext) only lets you read the context and subscribe to its changes.
createContext: creates a Context object. 
MyContext.Provider: every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. 

Lifting State Up:  move the state from the child component to the parent component. 
This is called “lifting state up”.


*/