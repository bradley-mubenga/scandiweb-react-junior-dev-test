import React, { Component } from 'react';

//SCSS
import '../assets/scss/header.scss';

export default class Header extends Component {
    constructor() {
        super();

        //Currency Drop Down State.
        this.state = {
            dropDown:  0
        } 
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
                    <img src="" alt="shopping-cart-logo"/>
                </div>

                <div>
                    <ul>
                        <li>
                            <a href="#">$</a>
                            <ul className="dropDown">
                                <li>$ USD</li>
                                <li>€ EUR</li>
                                <li> JPY</li>
                            </ul>
                        </li>

                        <li>Cart</li>
                    </ul>
                </div>
            </header>
        )
    }
}
