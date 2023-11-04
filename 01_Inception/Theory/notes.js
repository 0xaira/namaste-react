// Creating Element using JavaScript
/*
        const heading = document.createElement('h1');// creating a h1    element
        heading.innerHTML= "Namaste Everyone";// adding text to the h1 element
        const root= document.getElementById('root');// getting the root element
        root.appendChild(heading);// adding the h1 element to the root element
*/

// React root will overwrite the existing content of the root element in the html file 

// Creating a React Element
/*
        const heading = React.createElement('h1', 
        {
            id : 'heading',
        },
        'Hello World!');  // creating a react element with id and text
        
        const root = ReactDOM.createRoot(document.getElementById('root')); // creating a react root element 

        root.render(heading); // adding the react element to the root element
*/
// Creating a React Element with multiple children
/*
        const heading = React.createElement('h1', 
        {
            id : 'heading',
        },
        'Hello World!');  // creating a react element with id and text
        
        const heading1 = React.createElement('h1', 
        {
            id : 'heading1',
        },
        'Hello World!');  // creating a react element with id and text
        
        const container = React.createElement('div', 
        {
            id : 'container',
        },
        [heading,heading1]);  // creating a react element with id and text
        
        const root = ReactDOM.createRoot(document.getElementById('root')); // creating a react root element 

        root.render(container); // adding the react element to the root element
*/
// React.createElement() takes three arguments 
// 1. type of the element (string or React Component)
// 2. props of the element (object)
// 3. children of the element (string or React Element)

// React.createElement() returns a React Element which is a plain JavaScript object


