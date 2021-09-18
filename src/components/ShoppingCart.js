import React, { Component } from 'react';

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
                </div>
                
                <div
                    className={
                        this.props.cartClick 
                        ? "dropdownCart cartShow" 
                        : "dropdownCart"
                    }
                >
                    <h5><span>My Bag</span>, {this.itemsInCart(this.props.shoppingCart)} items</h5>
                    <div >
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
                        index={index}
                        overlayChange={this.props.overlayChange}
                        overlay={this.props.overlay}
                        />
                    ))}
                    </div>
                    <div className="cartTotal">
                        <h5>Total</h5>
                        <h5>
                            {this.cartTotal(this.props.shoppingCart, this.props.currencyIndex)}
                        </h5>
                    </div>
                </div>
            </>
        )
    }
}
