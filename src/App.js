import React, { Component } from 'react';

//React Compponents
import Header from './components/Header';

//SCSS
import './assets/scss/_global.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Router And Components Here</h1>
      </>
    )
  }
}

