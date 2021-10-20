import React, { Component } from 'react';
//React Router
import { Link } from 'react-router-dom';
//Images
import logo from '../assets/images/logo transparent.png';
//Components
import ShoppingCart from './ShoppingCart';
import CurrencySelector from './CurrencySelector';

export default class DesktopNavigation extends Component {
    render() {
        return (
            <>
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
                                click={this.props.click}
                                handleCurrency={this.props.handleCurrency}
                                returnSymbol={this.props.returnSymbol}
                                selectCurrency={this.props.selectCurrency}
                                overlayChange={this.props.overlayChange}
                                overlay={this.props.overlay}
                            />
                        </li>
                        <li>
                            <ShoppingCart 
                                cartClick={this.props.cartClick}
                                handleCart={this.props.handleCart}
                                shoppingCart={this.props.shoppingCart}
                                currencyIndex={this.props.currencyIndex}
                                returnSymbol={this.props.returnSymbol}
                                INCREMENT_CART={this.props.INCREMENT_CART}
                                DECREMENT_CART={this.props.DECREMENT_CART}
                                REMOVE_FROM_CART={this.props.REMOVE_FROM_CART}
                                overlayChange={this.props.overlayChange}
                                overlay={this.props.overlay}
                                returnAttributes={this.props.returnAttributes}
                            />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
