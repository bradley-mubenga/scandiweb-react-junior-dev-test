import React, { Component } from 'react';
//Apollo Client
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://localhost:4000',
});
//Context API
const AppContext = React.createContext(client);

import Test from './Test';
class App extends Component {
  render() {
    return (
      <AppContext.Provider value={client}>
        <div className="App">
          <h1>HELLO WORLD</h1>
          <Test />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
