import React from 'react';

import HookSecondChild from './HookSecondChild';

const HookFirstChild = () => (
  <div style={{ backgroundColor: 'darkorchid', padding: '50px' }}>
    <HookSecondChild />
  </div>
);

export default HookFirstChild;
