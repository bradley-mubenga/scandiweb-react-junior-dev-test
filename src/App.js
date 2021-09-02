import React, { Component } from 'react';

//React Router
import { Route, Switch } from 'react-router-dom';

//GraphQL & Apollo
import { graphql } from '@apollo/client/react/hoc';
import { getAllProducts } from './graphql/queries';

//React Compponents
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart'; 

//SCSS
import './assets/scss/_global.scss';
import './assets/scss/responsive.scss';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      category: 'clothes',
      currencyIndex: 0,
      shoppingCart: []
    }
  }

  //
  switchCategory = (categoryType) => {
    this.setState({
      category: categoryType
    })
  }

  //
  switchCurrency = (index) => {
    this.setState({
      currencyIndex: index
    })
  }

  //
  currencySymbol(isoCode) {
      let symbol = '';

      switch (isoCode) {
          case 'USD':
              symbol = '$'
              break;
          case 'GBP':
              symbol = '£'
              break;
          case 'AUD':
              symbol = 'A$'
              break;
          case 'JPY':
              symbol = '¥'
              break;
          case 'RUB':
              symbol = '₽'
              break;
          default:
              break;
      }

      return symbol;
  }

  //
  addToCart = (products, productID) => {
    let [ product ] = products.filter(product => product.id === productID)
    this.setState({
      shoppingCart: [product, ...this.state.shoppingCart]
    })
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <Header switchCategory={this.switchCategory} switchCurrency={this.switchCurrency} shoppingCart={this.state.shoppingCart} currencyIndex={this.state.currencyIndex} currencySymbol={this.currencySymbol}/>
        {
          this.props.data.loading ? (<h1>Loading</h1>) : (
            <>
              <Switch>
                  <Route exact path="/">
                    <CategoryPage products={this.props.data.category.products} category={this.state.category} currencyIndex={this.state.currencyIndex} addToCart={this.addToCart} currencySymbol={this.currencySymbol} />
                  </Route>

                  <Route exact path="/:id">
                    <ProductPage products={this.props.data.category.products} addToCart={this.addToCart} currencyIndex={this.state.currencyIndex} currencySymbol={this.currencySymbol} />
                  </Route>

                  <Route exact path="/shoppingCart">
                    <ShoppingCart products={this.props.data.category.products} addToCart={this.addToCart} currencyIndex={this.state.currencyIndex} currencySymbol={this.currencySymbol} />
                  </Route>
              </Switch>
            </>
          )
        }
      </>
    )
  }
}

//GraphQL HOC Client
export default graphql(getAllProducts)(App);

