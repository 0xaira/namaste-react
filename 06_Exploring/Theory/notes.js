// There are two types of architecture for a web application:
// 1. Mono-lithic architecture
// 2. Micro-services architecture

// In mono-lithic architecture, we have one big application which handles all the requests. 
// In micro-services architecture, we have multiple small applications which handles the requests.

// There are two ways to make a request to a server and get a response:
// 1. Synchronous request
// 2. Asynchronous request

// In synchronous request, we make a request to the server and wait for the response.
// In asynchronous request, we make a request to the server and don't wait for the response. 
// When the response is ready, we get it.

// Request => Loads => API Call => Renders Page 
// Request  => Loads => Renders Page => API Call => Renders Page

// In the first case, the page will be rendered only after the API call is completed.
// In the second case, the page will be rendered first and then the API call will be made.

// useEffect:
// useEffect is a hook which is used to make an API call.
// useEffect is a function which takes two arguments:
// 1. A function
// 2. An array

// The function which we pass to useEffect is called as the callback function.
// The array which we pass to useEffect is called as the dependency array.

// The callback function is executed when the component is rendered for the first time and when the component is re-rendered only if the values in the dependency array are changed.

// If we pass an empty array to useEffect, then the callback function is executed only when the component is rendered for the first time. It is not executed when the component is re-rendered. 

