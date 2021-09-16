import React, { Component } from 'react'

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
                            />
                        </li>
                        <li>
                            <ShoppingCart 
                                cartClick={this.props.cartClick}
                                handleCart={this.props.handleCart}
                            />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
