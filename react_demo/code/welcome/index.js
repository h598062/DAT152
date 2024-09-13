import React from 'react';
import ReactDOM from 'react-dom/client';

/* Below is an example of CSS modules*/
import './index.css';

function Welcome({courseName}) {
    return (
        /* Below is an example of JSX */
        <h1 className="courseintro">Welcome to {courseName}</h1>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* Below is an example of JSX */
    <Welcome courseName='DAT152' />
);
