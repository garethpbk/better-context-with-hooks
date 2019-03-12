import React from 'react';

import HookProvider from './HookProvider';
import HookFirstChild from './HookFirstChild';

const HookContainer = () => (
  <div style={{ backgroundColor: 'dodgerblue', padding: '50px' }}>
    <HookProvider>
      <HookFirstChild />
    </HookProvider>
  </div>
);

export default HookContainer;
