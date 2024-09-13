import React from 'react';
import ReactDOM from 'react-dom/client';

import studentStyle from './student.module.css';
import teacherStyle from './teacher.module.css';

function People()  {
    return (
        <div>
          <h1>List of people</h1>

          <ul>
            <li className={studentStyle.person}>Ole Olsen</li>
            <li className={teacherStyle.person}>Anne Annesen</li>
          </ul>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<People />);
