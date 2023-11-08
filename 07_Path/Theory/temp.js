// React Routing 
// 1. npm install react-router-dom

// 2. import { createBroswerRouter} from "react-router-dom"; // This helps to create a router for our application

/*

const appRouter =createBrowserRouter([ // This is the router for our application, it takes an array of objects as an argument
        {
            path: "/",
            element: <AppLayout />
        },
        {
            path: "/about",
            element: <About />
        },
]);

root.render(<RouterProvider router={appRouter}/>); // Router provider is used to provide the router to our application

*/

/*

import { useRouteError } from "react-router-dom" // This is used to get the error from the router if any

errorElement: <Error /> // This is used to display the error if any 


*/

// <Link to="/about"> // This is used to link to a particular page in our application

/*
Nested Routing
Using <Outlet/> we can nest routes in our application
const appRouter =createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/",
                    element: <Body />
                }
            ]
        },
        {
            path: "/about",
            element: <About />
        },
]);


For Dynamic Routing
Configuration:
path: "/about/:id" // This is used to get the id from the url
useParams() // This is used to get the id from the url in the component

*/