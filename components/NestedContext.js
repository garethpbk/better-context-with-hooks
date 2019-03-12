import React, { createContext } from 'react';

const ContextOne = createContext();
const ContextTwo = createContext();
const ContextThree = createContext();

class ContextOneParent extends React.Component {
  state = {
    firstValue: 'First Value',
  };

  render() {
    return (
      <div style={{ backgroundColor: 'seagreen', padding: '25px' }}>
        <ContextOne.Provider value={this.state.firstValue}>
          <ContextTwoParent />
        </ContextOne.Provider>
      </div>
    );
  }
}

class ContextTwoParent extends React.Component {
  state = {
    secondValue: 'Second Value',
  };

  render() {
    return (
      <div style={{ backgroundColor: 'steelblue', padding: '25px' }}>
        <ContextTwo.Provider value={this.state.secondValue}>
          <ContextThreeParent />
        </ContextTwo.Provider>
      </div>
    );
  }
}

class ContextThreeParent extends React.Component {
  state = {
    thirdValue: 'Third Value',
  };

  render() {
    return (
      <div style={{ backgroundColor: 'peru', padding: '25px' }}>
        <ContextThree.Provider value={this.state.thirdValue}>
          <ContextChild />
        </ContextThree.Provider>
      </div>
    );
  }
}

function ContextChild() {
  return (
    <div style={{ backgroundColor: 'firebrick', padding: '25px' }}>
      <ContextOne.Consumer>
        {value => (
          <div>
            <p>{value}</p>
            <ContextTwo.Consumer>
              {value => (
                <div>
                  <p>{value}</p>
                  <ContextThree.Consumer>
                    {value => (
                      <div>
                        <p>{value}</p>
                      </div>
                    )}
                  </ContextThree.Consumer>
                </div>
              )}
            </ContextTwo.Consumer>
          </div>
        )}
      </ContextOne.Consumer>
    </div>
  );
}

export default ContextOneParent;
