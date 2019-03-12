import React, { useContext } from 'react';

import { HookContext } from './HookProvider';

const HookSecondChild = () => {
  const { state, functions } = useContext(HookContext);

  return (
    <div style={{ backgroundColor: 'forestgreen', padding: '50px' }}>
      <p>
        <strong>{state.name}</strong> fetches the <em>{state.item}</em>.
      </p>
      <div>
        <label htmlFor="name">Set Name</label>
        <br />
        <input type="text" name="name" onChange={e => functions.setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="item">Set Item</label>
        <br />
        <input type="text" name="item" onChange={e => functions.fetchItem(e.target.value)} />
      </div>
    </div>
  );
};

export default HookSecondChild;
