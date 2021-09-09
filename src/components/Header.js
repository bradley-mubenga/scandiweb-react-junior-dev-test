import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

//SCSS
import '../assets/sass/header.scss';

//Images
import logo from '../assets/images/logo transparent.png';

//Components
import ShoppingCart from './ShoppingCart';
import CurrencySelector from './CurrencySelector';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            currencyClick: false,
            cartClick: false
        };
    }

    handleCart = (state) => {
        this.setState({
            currencyClick: false,
            cartClick: state,
        });
    }

    handleCurrency = (state) => {
        this.setState({
            currencyClick: state,
            cartClick: false
        });
    }

    render() {
        return (
            <nav>
                <div className="navigationWrapper">
                    <div>
                        <ul className="navigationLinks">
                            <li>
                                <Link
                                    to="/"
                                    className={(this.props.category === 'all') ? "active" : ""}
                                    onClick={() => this.props.switchCategory('all')}
                                >ALL</Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className={(this.props.category === 'tech') ? "active second" : "second"}
                                    onClick={() => this.props.switchCategory('tech')}
                                >TECH</Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className={(this.props.category === 'clothes') ? "active" : ""}
                                    onClick={() => this.props.switchCategory('clothes')}
                                >CLOTHES</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="logoWrapper">
                            <img src={logo} alt="e-commerce-logo" className="logoImage"/>
                        </div>
                    </div>

                    <div>
                        <ul className="navigationLinks">
                            <li>
                                <CurrencySelector 
                                    click={this.state.currencyClick}
                                    handleCurrency={this.handleCurrency}
                                />
                            </li>
                            <li>
                                <ShoppingCart 
                                    click={this.state.cartClick}
                                    handleCart={this.handleCart}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
