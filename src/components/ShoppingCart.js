import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom'

//Images
import cart from '../assets/images/shopping-cart.png';
import CartItem from './CartItem';

export default class Dropdown extends Component {
    cartTotal = (cart, currencyIndex) => {
        let total = 0;
        let currencySymbol = "$";

        if (cart) {
            cart.forEach((item) => {
                currencySymbol = this.props.returnSymbol(item.prices[currencyIndex].currency)
                let singlePrice = item.prices[currencyIndex].amount * item.qty;
                total += singlePrice;
            })
        }

        return currencySymbol + total.toFixed(2)
    }

    itemsInCart = (cart) => {
        let total = 0;
        if (cart) {
            cart.forEach(item => {
                total += item.qty;
            });
        }

        return total;
    }

    render() {
        return (
            <>
                <div 
                    className="shoppingCart" 
                    onClick={() =>  {
                        this.props.handleCart(!this.props.cartClick)
                        this.props.overlayChange(!this.props.overlay)
                        }
                    }
                >
                    <img className="cartImage" src={cart} alt="shopping-cart" />
                    <div className="cartCounter">
                        <span id="circle">
                            {this.itemsInCart(this.props.shoppingCart)}
                        </span>
                    </div>
                </div>
                
                <div
                    className={
                        this.props.cartClick 
                        ? "dropdownCart cartShow" 
                        : "dropdownCart"
                    }
                >
                    {/*<h5><span className='boldBagText'></span>, </h5>*/}
                    <div className='cartCount'>
                        <p className='myBag'>My Bag, </p>
                        <p className='countNumber'>{this.itemsInCart(this.props.shoppingCart)} items</p>
                    </div>
                    <div>
                    {this.props.shoppingCart.slice(0, 2).map((product, index) => (
                        <CartItem
                        returnSymbol={this.props.returnSymbol}
                        currencyIndex={this.props.currencyIndex}
                        shoppingCart={this.props.shoppingCart}
                        INCREMENT_CART={this.props.INCREMENT_CART}
                        DECREMENT_CART={this.props.DECREMENT_CART}
                        REMOVE_FROM_CART={this.props.REMOVE_FROM_CART}
                        handleCart={this.props.handleCart}
                        product={product}
                        key={index}
                        overlayChange={this.props.overlayChange}
                        overlay={this.props.overlay}
                        returnAttributes={this.props.returnAttributes}
                        />
                    ))}
                    </div>
                    <div className="cartTotal">
                        <h5>Total</h5>
                        <h5>
                            {this.cartTotal(this.props.shoppingCart, this.props.currencyIndex)}
                        </h5>
                    </div>

                    <div className="cartButtons">
                        <Link 
                            to="/shopping-cart"
                            onClick={() =>  {
                                this.props.handleCart(!this.props.cartClick)
                                this.props.overlayChange(!this.props.overlay)
                                }
                            }
                        >
                            <button>VIEW CART</button>
                        </Link>
                        
                        <Link 
                            to="/checkout"
                            onClick={() =>  {
                                this.props.handleCart(!this.props.cartClick)
                                this.props.overlayChange(!this.props.overlay)
                                }
                            }
                        >
                            <button className="green">CHECKOUT</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
