import React from 'react';
import ReactDOM from 'react-dom';
import {CountdownClock} from './CountdownClock';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountdownClock deadlineTime = "Apr 25, 2018 16:50:25"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  