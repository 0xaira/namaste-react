// Bundlers: webpack, parcel, vite

// Dev Dependencies
// Defination: Dependencies that are only required during development
// Dependencies are all the packages that are required for the application to run
// Packages means the code that is written by someone else and is available for us to use

// Diffrence betwwen pakacge.json and package-lock.json
// package.json: It contains the information about the project and the packages that are required for the project
// package-lock.json: It contains the information about the packages that are installed in the project. It tells us the exact version of the package that is installed in the project . It is used to make sure that the same version of the package is installed in the project when it is cloned by someone else. 
// It locks the version of the package that is installed in the project. You never put package-lock.json in the gitignore file. It is always pushed to the git repository. It has the hash of the package that is installed in the project. It is used to make sure that the same version of the package is installed in the project when it is cloned by someone else.

//node_modules: It contains all the packages that are installed in the project. It is created when we run npm install command. It is never pushed to the git repository. It is always added to the gitignore file.




/* 

npm init: It is used to create a package.json file
npm install: It is used to install all the dependencies that are mentioned in the package.json file
npm install <package-name>: It is used to install a particular package
npm install <package-name> --save-dev: It is used to install a particular package as a dev dependency
npm install <package-name> --save: It is used to install a particular package as a dependency
npm install <package-name> -D: It is used to install a particular package as a dev dependency
npx means node package execute
npx parcel index.html: It is used to run the parcel bundler on the index.html file in the project 

*/

// HRR : Hot Module Reloading
// It is used to reload the page automatically when we make any changes in the code


// Anything which can be generated automatically should not be pushed to the git repository. It should be added to the gitignore file. Example : node_modules, dist folder, .vscode folder, .parcel_cache



// Parcel:
/*
-- Hot Module Replacment- It reloads the page automatically when we make any changes in the code
--It minifies our code- It removes all the comments and spaces from our code
--It does clean our code- It removes all the unused code from our code
-- File Watcher algorithms- C++- It watches the files and when we make any changes in the files, it automatically rebuilds the project
--Manages dev and production build - It creates a dev build and a production build 
--Super fast build algorithms- It is very fast in building the project
--Images optimization - It optimizes the images in the project
--Caching while devlopment - It caches the files while development so that it does not have to rebuild the project again and again
--Compression- It compresses the files in the project 
--Compatible with older versions of browse 
--Port number- It runs on port number 1234 and can run simultaneously with other applications
--Consistent hashing algorithms- It creates a hash of the files in the project and if the hash of the file is same, it does not rebuild the project
--Transitive dependency- A depends on B and B depends on C. So A depends on C indirectly. React is dependent on parcel, parcel is dependent on npm packages , so react is dependent on npm packages indirectly. 
--It is a zero configuration bundler. It does not require any configuration.
--Tree shaking- It removes all the unused code from the project
*/ 


// Steps:-
/*
-- npm init : It is used to create a package.json file
-- npm install parcel -D: It is used to install parcel as a dev dependency
-- npx parcel index.html: It is used to run the parcel bundler on the index.html file in   the project(command to execute parcel)
-- npm i react react-dom: It is used to install react and react-dom packages

import react from "react": It is used to import react package
import react-dom from "react-dom": It is used to import react-dom package
make script tag to type module : It is used to make the script tag to type module

*/


// npm vs npx
/*
-- npm install: It is used to install all the dependencies that are mentioned in the package.json file
-- npx: It is used to run a particular package without installing it
*/

// We can modify scripts in package.json file
// "start": "parcel index.html": It is used to run the parcel bundler on the index.html file in the project 
// "build": "parcel build index.html": It is used to create a production build of the project
// "dev": "parcel index.html": It is used to create a dev build of the project


// We can install packages from npm website
// We need to configure the bundler to use the packages that we have installed from npm website 


// React Reconcliation: It is the process of updating the DOM when the state of the application changes 

// Keys : It is used to uniquely identify the elements in the array. It is used to make the process of react reconcliation faster and more efficient.

// React.createElement =>Object => HTML(DOM)

