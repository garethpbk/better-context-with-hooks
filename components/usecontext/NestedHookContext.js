import React, { createContext, useContext, useState } from 'react';

const ContextOne = createContext();
const ContextTwo = createContext();
const ContextThree = createContext();

function ContextOneHookParent() {
  const [firstValue] = useState('1st Value');

  return (
    <div style={{ backgroundColor: 'seagreen', padding: '25px' }}>
      <ContextOne.Provider value={firstValue}>
        <ContextTwoHookParent />
      </ContextOne.Provider>
    </div>
  );
}

class ContextTwoHookParent extends React.Component {
  state = {
    secondValue: '2nd Value',
  };

  render() {
    return (
      <div style={{ backgroundColor: 'steelblue', padding: '25px' }}>
        <ContextTwo.Provider value={this.state.secondValue}>
          <ContextThreeHookParent />
        </ContextTwo.Provider>
      </div>
    );
  }
}

const ContextThreeHookParent = () => {
  const [thirdValue] = useState('3rd Value');

  return (
    <div style={{ backgroundColor: 'peru', padding: '25px' }}>
      <ContextThree.Provider value={thirdValue}>
        <ContextHookChild />
      </ContextThree.Provider>
    </div>
  );
};

function ContextHookChild() {
  const firstValue = useContext(ContextOne);
  const secondValue = useContext(ContextTwo);
  const thirdValue = useContext(ContextThree);

  return (
    <div style={{ backgroundColor: 'firebrick', padding: '25px' }}>
      <p>{firstValue}</p>
      <p>{secondValue}</p>
      <p>{thirdValue}</p>
    </div>
  );
}

export default ContextOneHookParent;
