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
  cartData;

  constructor (props) {
    super(props);

    this.state = {
      category: 'clothes',
      currencyIndex: 0,
      shoppingCart: [],
      isCart: false
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
  currencySymbol = (isoCode) => {
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
    let [ product ] = products.filter(product => product.id === productID);
    let newProduct = { amount: 1, item: product }
    
    if (this.state.shoppingCart.some(p => p.item.id === newProduct.item.id)) {
      return null;
    }
    else {
      this.setState({
        shoppingCart: [newProduct, ...this.state.shoppingCart]
      })
    }
  }

  //
  removeFromCart = (products, productID) => {
    let [ product ] = products.filter(product => product.id === productID);
    let newProduct = { amount: 1, item: product }
    
    if (this.state.shoppingCart.some(p => p.item.id === newProduct.item.id)) {
      let newCartState = this.state.shoppingCart.filter(product => product.item.id !== newProduct.item.id)

      this.setState({
        shoppingCart: newCartState
      })
    }
    else {
      return null;
    }
  }

  //
  incrementQuantity = (theCartState, index) => {
        let cartState = theCartState;
        let singleProduct = theCartState[index];
        singleProduct.amount++;
        theCartState[index] = singleProduct;
        
        //Setting State
        this.setState({
          shoppingCart: cartState
        });
  }

  //
  decrementQuantity = (theCartState, index) => {
        let cartState = theCartState;
        let singleProduct = theCartState[index];

        if (singleProduct.amount > 1) {
          singleProduct.amount--;
          theCartState[index] = singleProduct;
          
          //Setting State
          this.setState({
            shoppingCart: cartState
          });
        }
  }

  //
  setOpacity = (state) => {
    this.setState({
      isCart: state
    })
  }

  componentDidMount() {
    this.cartData = JSON.parse(localStorage.getItem('shoppingCart'));

    if (localStorage.getItem('shoppingCart')){
      this.setState({
        shoppingCart: this.cartData
      })
    }

    else {
      this.setState({
        shoppingCart: []
      })
    }
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('shoppingCart', JSON.stringify(nextState.shoppingCart))
  }

  render() {
    return (
      <>
        <Header switchCategory={this.switchCategory} switchCurrency={this.switchCurrency} shoppingCart={this.state.shoppingCart} currencyIndex={this.state.currencyIndex} currencySymbol={this.currencySymbol} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} category={this.state.category} setOpacity={this.setOpacity} isCart={this.state.isCart}/>

        {
          this.props.data.loading ? (<h1>Loading</h1>) : (
            <>
              <Switch>
                  <Route exact path="/">
                    <CategoryPage products={this.props.data.category.products} category={this.state.category} currencyIndex={this.state.currencyIndex} addToCart={this.addToCart} currencySymbol={this.currencySymbol} isCart={this.state.isCart} shoppingCart={this.state.shoppingCart} removeFromCart={this.removeFromCart}/>
                  </Route>

                  <Route exact path="/:id">
                    <ProductPage products={this.props.data.category.products} removeFromCart={this.removeFromCart} addToCart={this.addToCart} currencyIndex={this.state.currencyIndex} currencySymbol={this.currencySymbol} category={this.state.category} shoppingCart={this.state.shoppingCart}/>
                  </Route>

                  <Route exact path="/shop/cart">
                    <ShoppingCart shoppingCart={this.state.shoppingCart} currencyIndex={this.state.currencyIndex} removeFromCart={this.removeFromCart} addToCart={this.addToCart} currencySymbol={this.currencySymbol} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} products={this.props.data.category.products} />
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

