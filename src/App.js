import React, { Component } from 'react';

//React Compponents
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

//SCSS
import './assets/scss/_global.scss';


export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CategoryPage />

        <h1>Router And Components Here</h1>
      </>
    )
  }
}

