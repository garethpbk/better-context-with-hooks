import React from 'react';

import ChildOne from './ChildOne';
import ExampleKey from './ExampleKey';

export const MyContext = React.createContext();

class Parent extends React.Component {
  constructor() {
    super();

    this.fetch = this.fetch.bind(this);
  }

  state = {
    name: 'Fido',
    hasBall: false,
  };

  fetch() {
    this.setState({ hasBall: !this.state.hasBall });
  }

  render() {
    const values = { name: this.state.name, hasBall: this.state.hasBall, fetch: this.fetch };
    return (
      <div style={{ backgroundColor: this.state.hasBall ? 'tomato' : 'rebeccapurple', padding: '50px' }}>
        <MyContext.Provider value={values}>
          <ChildOne />
          <ExampleKey />
        </MyContext.Provider>
      </div>
    );
  }
}

export default Parent;
