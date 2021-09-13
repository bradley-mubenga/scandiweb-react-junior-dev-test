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
import MobileNavigation from './MobileNavigation';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            currencyClick: false,
            cartClick: false,
            mobile: false,
            shoppingCart: []
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

    handleMobile = (state) => {
        this.setState({
            mobile: state
        })
    }

    ADD_TO_CART = (product) => {
        //Check if its in cart
        const doesExist = this.state.shoppingCart.some(item => item.id === product.id);
        if (doesExist) {
        }

        else if (doesExist === false) {
            this.setState({
                ...this.state,
                shoppingCart: [
                    ...this.state.shoppingCart,
                    {...product, qty: 1}
                ]
            });
        }

    }

    //Put the navigation JSX in another file, navigation.js
    render() {
        return (
            <nav>
                <div className="navigationWrapper">
                    <div className="navigationDesktop">
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
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => this.ADD_TO_CART({id: 3, j: 22})}
                                >check</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div className="logoWrapper">
                            <img src={logo} alt="e-commerce-logo" className="logoImage"/>
                        </div>
                    </div>

                    <div className="navigationDesktop">
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

                    <MobileNavigation 
                        mobile={this.state.mobile}
                        handleMobile={this.handleMobile}
                        category={this.props.category}
                        switchCategory={this.props.switchCategory}
                    />
                </div>
            </nav>
        )
    }
}
