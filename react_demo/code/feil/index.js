import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Header extends React.Component {
    render() {
        return(<h1>Status of tasks</h1>);
    }
}

class Tasklist extends React.Component {
    render(props) {
        return(
            <table>
                {props.children}    
            </table>
        );
    }
}

class TaskList extends React.Component {
    render() {
        return (
            <div>
              <Header />

                <Tasklist>
                    <tr><td>Wash windows</td><td>ACTIVE</td></tr>,
                    <tr><td>Clean floor</td><td>DONE</td></tr>,
                    <tr><td>Paint roof</td><td>WAITING</td></tr>
                </Tasklist>
            </div>
        );
    }
}

ReactDOM.render(
    <TaskList />,
    document.getElementById('root')
);
