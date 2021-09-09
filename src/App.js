import React, { Component } from 'react';

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//React Components
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/">
            <CategoryPage />
          </Route>
          <Route path="/product/:id" component={ProductPage}/>
        </Switch>
      </Router>
    )
  }
}

