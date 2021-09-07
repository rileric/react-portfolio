import React from 'react';
import ReactDOM from 'react-dom';
import ContactLinks from './ContactLinks';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ContactLinks />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})