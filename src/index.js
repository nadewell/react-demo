import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user){
    return user.firstName+' '+user.lastName;
}
const user = {
    firstName:'Nishant',
    lastName:'Shaligram'
};
const element = <h1>Hello, {formatName(user)}!</h1>;
root.render(element);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
