import React, { Component } from 'react';

//SCSS
import '../assets/scss/header.scss';

//Images
import logo from '../assets/images/logo.png';
import currency from '../assets/images/currency.png';
import chevron from '../assets/images/chevron.png';
import cart from '../assets/images/shopping-cart.png';

export default class Header extends Component {
    //Component State
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: []
        };
    };

    render() {
        return (
            <header id="header">
                <nav>
                    <ul>
                        <li className="nav-link active">Women</li>
                        <li className="nav-link">Men</li>
                        <li className="nav-link">Kids</li>
                    </ul>
                </nav>

                <div>
                    <img src={logo} alt="e-commerce-store-logo"/>
                </div>

                <div>
                    <ul>                       
                        <li className="dropdown">
                            <div className="dropbtn">
                                <img src={currency} alt="dollar-sign"/>
                                <img src={chevron} alt="chevron-vector"/>
                            </div>

                            <ul className="dropdown-content">
                                <a>$ USD</a>
                                <a>€ EUR</a>
                                <a>¥ JPY</a>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <div>
                                <img src={cart} alt="shopping-cart-vector"/>
                            </div>

                            <ul className="dropdown-content">
                                <h2>Cart Items Baby!</h2>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
