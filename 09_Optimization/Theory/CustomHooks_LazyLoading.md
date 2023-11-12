# Custom Hooks & Lazy Loading

## `Utility Folder (utils)`

The `utils` folder contains helper functions that can be reused throughout the application.

## `Creating Custom Hooks

Custom hooks provide a modular, reusable, readable, testable, and maintainable way to organize code.

### `Key Characteristics of Custom Hooks:`

1. **Modularity:** Break the code into small, manageable pieces.
2. **Reuseability:** Encourages reuse of logic across components.
3. **Readability:** Improves code readability by abstracting logic into hooks.
4. **Testability:** Facilitates easier testing of isolated logic.
5. **Maintainability:** Encourages separation of concerns for easier maintenance.

### `Difference between Hooks and Functional Components`

- Functional Components return JSX.
- Hooks can return any value; their primary purpose is to extract and manage logic.

### `Managing Event Listeners in` `useEffect`

When adding an event listener in `useEffect`, it's crucial to remove it when the component is unmounted to avoid memory leaks.

```javascript
useEffect(() => {
  const onlineFunc = () => { /* handle online event */ };
  const offlineFunc = () => { /* handle offline event */ };

  window.addEventListener("online", onlineFunc);
  window.addEventListener("offline", offlineFunc);

  return () => {
    window.removeEventListener("online", onlineFunc);
    window.removeEventListener("offline", offlineFunc);
  };
}, []);

```

## `Creating Custom Hooks (Step by Step)`

1. **Create a folder named `Hooks`.**

2. **Inside the folder, create a file named `useOnline.js`.**

3. **In `useOnline.js`, create a function called `useOnline` and export it.**

4. **Import the `useOnline` hook in the component where you want to use it.**

5. **Call the `useOnline` function within the component.**

## `Code Organization in Production Applications`

In production applications, it's impractical to bundle all code into one file. Instead, we split the code into multiple files and use tools like Webpack for bundling.

## `Webpack Overview`

- **Webpack is a module bundler that combines and minifies code.**
  
- **Chunking:** Divides code into multiple files.
  
- **Code Splitting:** Splits code into manageable chunks.
  
- **Lazy Loading:** Loads code on demand.
  
Chunking, Code Splitting, Lazy Loading, Dynamic Import, On Demand Loading, Dynamic Bundling
## `Dynamic Import and Lazy Loading`

Use dynamic imports for lazy loading components in React.

```javascript
const InstaMart = lazy(() => import("./InstaMart"));

<Suspense fallback={<Shimmer />}>
  <InstaMart />
</Suspense>
```

- **`lazy`:** A function from React for lazy loading. It takes a function that returns a promise as an argument. It comes as a named import from the `react` package.

- **`Suspense`:** Wraps the component and defines a fallback for when the component is loading. It comes as a named import from the `react` package. It takes a `fallback` prop that defines the fallback component.

## `Lazy Loading in React`

The `lazy()` function in React is used for code splitting and lazy loading of components. It allows you to load components asynchronously, i.e., only when they are actually needed, rather than loading all components upfront when the application initializes. This can significantly improve the initial loading time of your application, especially when dealing with large and complex React applications.

## `Scenarios for Using `lazy()` in React:`

1. **Reducing Initial Bundle Size:**
   - If your React application consists of multiple components, and you want to optimize the initial loading time, you can use `lazy()` to split the code into smaller chunks. This way, the browser only loads the code for the components that are needed initially, and the rest can be loaded on-demand.

2. **Improving Performance:**
   - Lazy loading is particularly beneficial in large applications where loading all components at once may lead to a slower initial load time. By lazy loading components, you can improve the performance of your application, especially on slower networks or devices.

3. **Optimizing User Experience:**
   - If there are certain parts of your application that are not immediately visible or accessible when the user first loads the page, lazy loading those components allows the initial rendering to happen more quickly. The user can then interact with the initial content while the additional components load in the background.

4. **Code Splitting for Routes:**
   - When using React Router or a similar routing solution, you can use `lazy()` to load components associated with specific routes only when those routes are navigated to. This is a common use case for lazy loading in React applications.

## Example Usage:

```javascript
import React, { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  );
}
```
## `When do we and why do we need suspense?`
Suspense in React is employed in scenarios involving asynchronous operations, like code-splitting using lazy() and data fetching. It allows us to specify a fallback UI to display while these asynchronous tasks are in progress, enhancing the user experience. For example, when using lazy() for component lazy loading or when fetching data, Suspense simplifies the management of loading states. It's a valuable tool for creating a smoother and more responsive user interface in React applications.

## `Code-Splitting in React: Advantages and Disadvantages`

### `Advantages`

| Advantage                                     | Description                                                                                                            |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Improved Initial Loading Performance          | Reduces the initial bundle size, leading to faster page loads, especially in large applications.                       |
| Deferred Loading of Less Critical Components   | Enhances the user experience by loading less critical components only when they are actually needed.                   |
| Better Maintenance                            | Changes to one part of the application are less likely to affect unrelated sections, improving maintainability.        |

### `Disadvantages`

| Disadvantage                                  | Description                                                                                                            |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Increased Complexity                         | Introduces complexity to the application architecture, potentially making the initial setup more challenging.           |
| Suboptimal Performance                        | Improperly splitting code can lead to suboptimal performance, defeating the purpose of the optimization.                |
| Delay When Navigating Between Code-Split Parts | May introduce a slight delay when navigating between code-split parts due to the need to fetch and load additional code.|

In summary, code-splitting is a powerful optimization technique in React, offering improved performance and maintainability. However, it requires careful implementation and consideration of trade-offs to ensure a positive impact on the overall user experience.
