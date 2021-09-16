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
          category: 'all',
          shoppingCart: []
      }
  }

  switchCategory = (category) => {
      this.setState({
          category
      })
  }

  ADD_TO_CART = (product) => {
    //Check if its in cart
    const doesExist = this.state.shoppingCart.some(item => item.id === product.id);
    
    //Incrementing The Cart Quantity If It Exists
    if (doesExist) {
        let index = this.state.shoppingCart.findIndex(item => item.id === product.id);
        if (index === -1) {
            console.log("Error, Product Not Found")
        }
        else {
            this.setState({
                shoppingCart: [
                   ...this.state.shoppingCart.slice(0,index),
                   Object.assign(
                       {}, 
                       this.state.shoppingCart[index], 
                       {...product, qty: this.state.shoppingCart[index].qty + 1}
                    ),
                   ...this.state.shoppingCart.slice(index+1)
                ]
            });
        }
    }

    else if (doesExist === false) {
        this.setState({
            ...this.state,
            shoppingCart: [
                ...this.state.shoppingCart,
                {...product, qty: 1}
            ]
        });
    }

  }

  REMOVE_FROM_CART = (product) => {
      //Check if its in cart
      const doesExist = this.state.shoppingCart.some(item => item.id === product.id);
      
      //Incrementing The Cart Quantity If It Exists
      if (doesExist) {
          let index = this.state.shoppingCart.filter(item => item.id !== product.id);
          this.setState({
              shoppingCart: [ ...index ]
          });
      }
  }

  INCREMENT_CART = (product) => {
      //Check if its in cart
      const doesExist = this.state.shoppingCart.some(item => item.id === product.id);
      
      //Incrementing The Cart Quantity If It Exists
      if (doesExist) {
          let index = this.state.shoppingCart.filter(item => item.id !== product.id);
          this.setState({
              shoppingCart: [ ...index ]
          });
      }
  }

  DECREMENT_CART = (product) => {
      //Check if its in cart
      const doesExist = this.state.shoppingCart.some(item => item.id === product.id);
      
      //Incrementing The Cart Quantity If It Exists
      if (doesExist) {
          let index = this.state.shoppingCart.filter(item => item.id !== product.id);
          this.setState({
              shoppingCart: [ ...index ]
          });
      }
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

