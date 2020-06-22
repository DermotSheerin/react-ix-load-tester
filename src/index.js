import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// This attaches the App component (and its subordinates) to the browser's DOM at the element with id 'root'. This element was declared by create-react-app in the body of public/index.html:
ReactDOM.render(<App />, document.getElementById('root'));

// The tool's development server treats public/index.html as a template. On starting the server it performs the following tasks:

// - Merges all the JS code, starting at src/index.js, into one JS asset. This includes your custom code, React and other third party libraries.
// - Inserts a script tag into the body of index.html to reference the merged asset.