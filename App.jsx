 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import App from './App.jsx';
    // const heading = React.createElement('h1', {id:'heading'}, 'hello from react'); 
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading);

    // console.log(heading) //gives an object

// <div id='parent'>
//     <div id='child'>
//         <h1>i am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
//     <div id='child2'>
//         <h1>i am h1 tag</h1>
//         <h1>I am h1 tag</h1>
//     </div>
// </div>

// React element(object) => HTML (Browser understands)

const header = React.createElement('div', {id:'parent'}, [
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{},'I am a H1 Tag'),
        React.createElement('h1',{},'I am a H1 Tag')
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h1',{},'I am a H1 Tag'),
        React.createElement('h1',{},'I am a H1 Tag')
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(header);