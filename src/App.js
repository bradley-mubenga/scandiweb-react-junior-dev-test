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

//SCSS
import './assets/scss/_global.scss';
import { LocalState } from '@apollo/client/core/LocalState';

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
        <Header switchCategory={this.switchCategory} switchCurrency={this.switchCurrency} shoppingCart={this.state.shoppingCart}/>
        {
          this.props.data.loading ? (<h1>Loading</h1>) : (
            <>
              <Switch>
                  <Route exact path="/">
                    <CategoryPage products={this.props.data.category.products} category={this.state.category} currencyIndex={this.state.currencyIndex} />
                  </Route>

                  <Route exact path="/:id">
                    <ProductPage products={this.props.data.category.products} addToCart={this.addToCart} />
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

