import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import {CountdownClock} from './CountdownClock';

ReactDOM.render(<CountdownClock deadlineTime = "Apr 30, 2018 16:50:25"/>, document.getElementById('root'));
                            registerServiceWorker();
