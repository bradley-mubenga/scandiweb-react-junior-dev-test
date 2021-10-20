import React, { Component } from 'react';
//SCSS
import '../src/assets/sass/_global.scss';
import '../src/assets/sass/responsive.scss';
//React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//React Components
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './pages/ShoppingCart';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: 'all',
            shoppingCart: [], //Store this in local storage
            currencyIndex: 0, //Make sure to save this to local storage as well.
            overlay: false,
            attributes: [] //Save this in the local storage
        }
    }

    componentWillMount(){
        localStorage.getItem('shoppingCart') && this.setState({
            shoppingCart: JSON.parse(localStorage.getItem('shoppingCart'))
        });

        localStorage.getItem('attributes') && this.setState({
            attributes: JSON.parse(localStorage.getItem('attributes'))
        });

        localStorage.getItem('currencyIndex') && this.setState({
            currencyIndex: JSON.parse(localStorage.getItem('currencyIndex'))
        });
    }

    overlayChange = (state) => {
        this.setState({
            overlay: state
        })
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
                    {...product, qty: 1, attributes: product.attributes}
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
        let index = this.state.shoppingCart.findIndex(item => item.id === product.id);
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

    DECREMENT_CART = (product) => {
      //Check if its in cart
      const doesExist = this.state.shoppingCart.some(item => item.id === product.id);
      
      //Decrementing The Cart Quantity If It Exists
      if (doesExist) {
        let index = this.state.shoppingCart.findIndex(item => item.id === product.id);

        if (product.qty > 1) {
            this.setState({
                shoppingCart: [
                   ...this.state.shoppingCart.slice(0,index),
                   Object.assign(
                       {}, 
                       this.state.shoppingCart[index], 
                       {...product, qty: this.state.shoppingCart[index].qty - 1}
                    ),
                   ...this.state.shoppingCart.slice(index+1)
                ]
            });
        }
      }
    }

    addAttribute = (productName, attributesArray, attributeType, activeIndex) => {
        let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );

        if (result === undefined) {
            this.setState({
                attributes: [
                    ...this.state.attributes,
                    { 
                        productName: productName, 
                        attributeType: attributeType, 
                        attributes: attributesArray, 
                        activeIndex: activeIndex
                    }
                ]
            })
        }

        else {
            //Check if its in cart
            const doesExist = this.state.attributes.some(product => product.productName === productName && product.attributeType === attributeType );
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );
            
            //Decrementing The Cart Quantity If It Exists
            if (doesExist) {
                let index = this.state.attributes.findIndex(product => product.productName === productName && product.attributeType === attributeType );

                this.setState({
                    attributes: [
                    ...this.state.attributes.slice(0,index),
                    Object.assign(
                        {}, 
                        this.state.attributes[index], 
                        {...result, activeIndex: activeIndex}
                        ),
                    ...this.state.attributes.slice(index+1)
                    ]
                });
            }
        }
    }

    returnAttributes = (productName, items, attributeType) => {
        if (attributeType === "Size") {
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

            return items.map((attr, index) => (
                <button
                    onClick={
                        () => this.addAttribute(productName, items, attributeType, index)
                    }

                    className={
                        (result) ? (
                            result.activeIndex === index
                            ? "attributeActive"
                            : ""
                        ) : ("")
                    }

                    key={index}
                >{attr.value}</button>
            ));
        }

        else if (attributeType === "Capacity") {
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

            return items.map((attr, index) => (
                <button
                    onClick={
                        () => this.addAttribute(productName, items, attributeType, index)
                    }

                    className={
                        (result) ? (
                            result.activeIndex === index
                            ? "attributeActive"
                            : ""
                        ) : ("")
                    }

                    key={index}
                >{attr.value}</button>
            ));
        }

        else if (attributeType === "Color") {
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

            return items.map((attr, index) => (
                <button 
                    style={{
                        background: attr.value,
                        color: attr.value === "#000000" ? ("White") : ("Black")
                    }}

                    onClick={
                        () => this.addAttribute(productName, items, attributeType, index)
                    }

                    className={
                        (result) ? (
                            result.activeIndex === index
                            ? "attributeActiveColor"
                            : ""
                        ) : ("")
                    }

                    key={index}
                >
                </button>
            ));
        }

        else if (attributeType.length > 14) {
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

            return (
                <div className="miscAttribute">
                    <p>{attributeType}</p>

                    <div className="miscAttributeButton">
                        {
                            items.map((attr, index) => (
                                <button
                                    onClick={
                                        () => this.addAttribute(productName, items, attributeType, index)
                                    }
            
                                    className={
                                        (result) ? (
                                            result.activeIndex === index
                                            ? "attributeActive"
                                            : ""
                                        ) : ("")
                                    }
            
                                    key={index}
                                >{attr.value}</button>
                            ))
                        }
                    </div>
                </div>
            )
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('shoppingCart', JSON.stringify(nextState.shoppingCart));
        localStorage.setItem('attributes', JSON.stringify(nextState.attributes));
        localStorage.setItem('currencyIndex', JSON.stringify(nextState.currencyIndex));
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
          shoppingCart={this.state.shoppingCart}
          INCREMENT_CART={this.INCREMENT_CART}
          DECREMENT_CART={this.DECREMENT_CART}
          REMOVE_FROM_CART={this.REMOVE_FROM_CART}
          overlayChange={this.overlayChange}
          overlay={this.state.overlay}
          returnAttributes={this.returnAttributes}
        />
        
        <Switch>
          <Route exact path="/">
            <CategoryPage 
            category={this.state.category}
            returnSymbol={this.returnSymbol}
            currencyIndex={this.state.currencyIndex}
            ADD_TO_CART={this.ADD_TO_CART}
            REMOVE_FROM_CART={this.REMOVE_FROM_CART}
            INCREMENT_CART={this.INCREMENT_CART}
            DECREMENT_CART={this.DECREMENT_CART}
            overlay={this.state.overlay}
            overlayChange={this.overlayChange}
            returnAttributes={this.returnAttributes}
            />
          </Route>
          
          <Route 
            exact path="/product/:id" 
            render={(props) => 
                <ProductPage 
                    {...props}
                    returnSymbol={this.returnSymbol}
                    currencyIndex={this.state.currencyIndex}
                    ADD_TO_CART={this.ADD_TO_CART}
                    REMOVE_FROM_CART={this.REMOVE_FROM_CART}
                    INCREMENT_CART={this.INCREMENT_CART}
                    DECREMENT_CART={this.DECREMENT_CART}
                    returnAttributes={this.returnAttributes}
                />
            } 
          />
          <Route exact path="/shopping-cart">
              <ShoppingCart 
                returnSymbol={this.returnSymbol}
                currencyIndex={this.state.currencyIndex}
                ADD_TO_CART={this.ADD_TO_CART}
                REMOVE_FROM_CART={this.REMOVE_FROM_CART}
                INCREMENT_CART={this.INCREMENT_CART}
                DECREMENT_CART={this.DECREMENT_CART}
                returnAttributes={this.returnAttributes}
                shoppingCart={this.state.shoppingCart}
              />
          </Route>
        </Switch>
      </Router>
    )
  }
}

