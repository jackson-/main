import React from 'react';
import ReactDOM from 'react-dom';
import New from './New';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<New />, div);
});
