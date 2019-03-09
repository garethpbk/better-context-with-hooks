import React from 'react';

import { MyContext } from './Parent';

const ChildTwo = () => (
  <div style={{ backgroundColor: 'seagreen', padding: '10px' }}>
    <MyContext.Consumer>
      {value => (
        <div>
          <h3>
            {value.name} {value.hasBall ? 'has' : 'does not have'} the ball.
          </h3>
          <button style={{ fontSize: '20px' }} onClick={() => value.fetch()}>
            Play Fetch
          </button>
        </div>
      )}
    </MyContext.Consumer>
  </div>
);

export default ChildTwo;
