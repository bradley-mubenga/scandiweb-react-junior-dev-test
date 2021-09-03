import React, { Component } from 'react';

//React Router
import { Link, NavLink } from 'react-router-dom';

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
    };

    //
    totalAmount(shoppingCart, currencyIndex) {
        let totalAmount = 0;
        let currencySymbol = '$';

        for (let i = 0; i < shoppingCart.length; i++){
            currencySymbol = this.props.currencySymbol(shoppingCart[i].item.prices[this.props.currencyIndex].currency)
            totalAmount += shoppingCart[i].item.prices[currencyIndex].amount;
        }

        return `${currencySymbol} ${Math.round(totalAmount)}`;
    }

    render() {
        return (
            <header id="header">
                <nav>
                    <ul>
                        <NavLink to="/" className="" onClick={() => this.props.switchCategory('clothes')}>Clothes</NavLink>
                        <NavLink to="/" className="" onClick={() => this.props.switchCategory('tech')}>Tech</NavLink>
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
                                <a onClick={()=> this.props.switchCurrency(2)}>A$ AUD</a>
                                <a onClick={()=> this.props.switchCurrency(3)}>¥ JPY</a>
                                <a onClick={()=> this.props.switchCurrency(4)}>₽ RUB</a>
                            </ul>
                        </li>

                        <li className="dropdownCart">
                            <div className="shoppingCartIcon">
                                <img src={cart} alt="shopping-cart-vector"/>
                                <span>{this.props.shoppingCart.length}</span>
                            </div>


                            <ul className="dropdown-cart">
                                {
                                    this.props.shoppingCart.slice(0, 2).map(product => 
                                        <div className="cartItem">
                                            <div className="">
                                                <h5>{product.item.name}</h5>
                                                <p>{this.props.currencySymbol(product.item.prices[this.props.currencyIndex].currency)} {product.item.prices[this.props.currencyIndex].amount}</p>
                                            </div>
                                            <span>
                                                <button>+</button>
                                                <p>{product.amount}</p>
                                                <button>-</button>
                                            </span>
                                            <div className="">
                                                <img src={product.item.gallery[0]} alt="product" className="cartProductImage"/>
                                            </div>
                                        </div>
                                    )
                                }

                                <div>
                                    <h5>Total: {this.totalAmount(this.props.shoppingCart, this.props.currencyIndex)}</h5>
                                </div>

                                <div className="shoppingCartLinks">
                                    <Link to="/shop/cart">View Bag</Link>
                                    <button className='checkoutButton'>Checkout</button>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
