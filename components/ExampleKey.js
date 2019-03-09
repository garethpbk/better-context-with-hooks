import React from 'react';

import { MyContext } from './Parent';

const ExampleKey = () => (
  <MyContext.Consumer>
    {({ hasBall }) => (
      <div style={{ backgroundColor: '#111', padding: '25px' }}>
        <h3 style={{ color: hasBall ? 'tomato' : 'rebeccapurple' }}>Parent</h3>
        <h3 style={{ color: 'steelblue' }}>ChildOne</h3>
        <h3 style={{ color: 'seagreen' }}>ChildTwo</h3>
      </div>
    )}
  </MyContext.Consumer>
);

export default ExampleKey;
