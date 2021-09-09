import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

//SCSS
import '../assets/sass/header.scss';

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
                                <Link to="/" onClick={() => this.props.switchCategory('all')}>All</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => this.props.switchCategory('tech')}>Tech</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => this.props.switchCategory('clothes')}>Clothes</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Link to="/">
                            <img src={""} alt="e-commerce-logo"/>
                        </Link>
                    </div>

                    <div>
                        <ul className="navigationLinks">
                            <li>
                                <ShoppingCart 
                                    click={this.state.cartClick}
                                    handleCart={this.handleCart}
                                />
                            </li>

                            <li>
                                <CurrencySelector 
                                    click={this.state.currencyClick}
                                    handleCurrency={this.handleCurrency}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
