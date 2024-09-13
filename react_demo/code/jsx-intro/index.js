import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function Demo1() {
    const element = <p>Pi is approximately 3,14.</p>;

    return (element);
}

function Demo2() {
    const element = <span><em>One</em> <em>two</em></span>
    return (element);
}


function Demo3() {
    const element = <React.Fragment><em>One</em> <em>two</em></React.Fragment>
    return (element);
}

function Demo4() {
    const element = <><em>One</em> <em>two</em></>
    return (element);
}

function JSXEmbedded() {
    return (
        <div>
            <h1>Examples with JSX and embedded expressions</h1>

            <Demo1/>

            <p><Demo2/></p>

            <p><Demo3/></p>

            <p><Demo4/></p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JSXEmbedded />);
