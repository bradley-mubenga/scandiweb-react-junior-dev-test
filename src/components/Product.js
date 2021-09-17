import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

//Images
import addToCart from '../assets/images/add-to-cart.png'

export default class Product extends Component {
    render() {
        return (
            <div className="product" key={this.props.index}>
                <div>          
                    <div className="productImageWrapper">
                        <img
                            alt={this.props.product.name} src={this.props.product.gallery[0]}
                            className="responsiveImage"
                        />
                        
                        <span className="">
                            <img src={addToCart} className="addToCartButton" alt=""/>
                        </span>
                    </div>

                    <Link to={ `/product/${this.props.product.id}`}>
                        <div className="productText">
                            <h4>{this.props.product.brand} {this.props.product.name}</h4>
                            {/*Have A Function With A Switch Statement That Takes The Case Of The Currency ISO And Returns The Currency Symbol*/}
                            <h5>
                                {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                                {this.props.product.prices[this.props.currencyIndex].amount
                            }</h5>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
