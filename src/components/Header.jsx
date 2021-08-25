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
                        <li className="nav-link active" onClick={() => this.props.switchCategory('clothes')}>Clothes</li>
                        <li className="nav-link" onClick={() => this.props.switchCategory('tech')}>Tech</li>
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
                                <a onClick={()=> this.props.switchCurrency(0)}>$ USD</a>
                                <a onClick={()=> this.props.switchCurrency(1)}>£ GBP</a>
                                <a onClick={()=> this.props.switchCurrency(2)}>AUD</a>
                                <a onClick={()=> this.props.switchCurrency(3)}>JPY</a>
                                <a onClick={()=> this.props.switchCurrency(4)}>RUB</a>
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
