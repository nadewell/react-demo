import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user){
    return user.firstName+' '+user.lastName;
}
function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(user)}!</h1>;
    }else{
        return <h1>Hello, Stranger.</h1>;
    }
}
const user = {
    firstName:'Nishant',
    lastName:'Shaligram'
};
const element = React.createElement(
    'div',
    {
        className:'greeting',
        children: getGreeting(user)
    }
);
root.render(element);

const root2 = ReactDOM.createRoot(
    document.getElementById('root2')
);
const element2 = <h2>Hello, I am root2 element.</h2>
root2.render(element2);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
