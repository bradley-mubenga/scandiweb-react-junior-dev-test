import React, { Component } from 'react';

//SCSS
import '../src/assets/sass/_global.scss';

//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//React Components
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

export default class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          category: 'all'
      }
  }

  switchCategory = (category) => {
      this.setState({
          category
      })
  }

  render() {
    return (
      <Router>
        <Header
          switchCategory={this.switchCategory}
          category={this.state.category}
        />
        
        <Switch>
          <Route exact path="/">
            <CategoryPage category={this.state.category}/>
          </Route>
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
      </Router>
    )
  }
}

