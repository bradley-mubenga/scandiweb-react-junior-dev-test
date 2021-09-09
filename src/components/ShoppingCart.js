import React, { Component } from 'react';

//Images
import cart from '../assets/images/shopping-cart.png';

export default class Dropdown extends Component {
    render() {
        return (
            <>
                <div 
                    className="shoppingCart" 
                    onClick={() => this.props.handleCart(!this.props.click)}
                >
                    <img className="cartImage" src={cart} alt="shopping-cart" />
                </div>
                
                <ul
                    className={this.props.click ? "dropdownMenu show" : "dropdownMenu"}
                >
                    <li onClick={() => this.props.handleCart(false)}>Shopping Cart</li>
                </ul>   
            </>
        )
    }
}
