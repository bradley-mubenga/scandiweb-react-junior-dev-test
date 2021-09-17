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
          shoppingCart: [],
          currencyIndex: 0 //Make sure to save this to local storage as well.
      }
  }

  switchCategory = (category) => {
      this.setState({
          category
      });
  }

  selectCurrency = (isoCode) => {
    if (isoCode === "USD") {
        this.setState({
            currencyIndex: 0
        });
    } 

    else if (isoCode === "GBP") {
        this.setState({
            currencyIndex: 1
        });
    }

    else if (isoCode === "AUD") {
        this.setState({
            currencyIndex: 2
        });
    }

    else if (isoCode === "JPY") {
        this.setState({
            currencyIndex: 3
        });
    }

    else if (isoCode === "RUB") {
        this.setState({
            currencyIndex: 4
        });
    }
  }

  returnSymbol = (isoCode) => {
    if (isoCode === "USD") {
        return "$";
    } 
    else if (isoCode === "GBP") {
        return "£";
    }

    else if (isoCode === "AUD") {
        return "A$";
    }

    else if (isoCode === "JPY") {
        return "¥";
    }

    else if (isoCode === "RUB") {
        return "₽";
    }
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
          returnSymbol={this.returnSymbol}
          currencyIndex={this.state.currencyIndex}
          selectCurrency={this.selectCurrency}
        />
        
        <Switch>
          <Route exact path="/">
            <CategoryPage 
            category={this.state.category}
            returnSymbol={this.returnSymbol}
            currencyIndex={this.state.currencyIndex}
            />
          </Route>
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
      </Router>
    )
  }
}

