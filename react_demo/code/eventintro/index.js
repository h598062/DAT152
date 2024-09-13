import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';


function handleEvent(event) {
    window.alert(`Event ${event.type} on ${event.currentTarget.tagName}`);
}

function EventIntro() {
    return (
        <React.Fragment>
            <h1>Event demo</h1>
            <p><button onClick={handleEvent}>Click me</button></p>
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EventIntro />);
