import React, { createContext, useState } from 'react';

export const HookContext = createContext();

function HookProvider(props) {
  const [name, setName] = useState('Fido');
  const [item, setItem] = useState('BALL');

  const fetchItem = item => {
    const capitalizedItem = item.toUpperCase();

    setItem(capitalizedItem);
  };

  const contextValues = {
    state: {
      name,
      item,
    },
    functions: {
      setName,
      fetchItem,
    },
  };

  return (
    <HookContext.Provider value={contextValues}>
      <div style={{ backgroundColor: 'papayawhip', padding: '50px' }}>
        {props.children}
      </div>
    </HookContext.Provider>
  );
}

export default HookProvider;
