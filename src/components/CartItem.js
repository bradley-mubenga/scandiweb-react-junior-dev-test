import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

export default class CartItem extends Component {
    render() {
        return (
            <div className="cartItem">
                <div className="cartItemText">
                    <div className="cartLink">
                        <h6>
                            <Link 
                                to={ `/product/${this.props.product.id}`}
                                onClick={() => {
                                    this.props.handleCart(false)
                                    this.props.overlayChange(!this.props.overlay)
                                }}
                            >
                            {this.props.product.brand} {this.props.product.name}
                            </Link>
                        </h6>
                    </div>

                    <h4>
                        {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                        {this.props.product.prices[this.props.currencyIndex].amount}
                    </h4>
                    <div >
                        {
                            this.props.product.attributes.map((attributes, index) => {
                                return (
                                    <div key={index}>
                                        <div className="attributesBlock">
                                            {
                                                this.props.returnAttributes(this.props.product.id, attributes.items, attributes.name)
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="itemQtyAndImage">
                    <div className="qtyButtons">
                        <button onClick={() => this.props.INCREMENT_CART(this.props.product)}>+</button>
                        <h6>{this.props.product.qty}</h6>
                        <button onClick={() => this.props.DECREMENT_CART(this.props.product)}>-</button>
                    </div>
                    <div className="cartItemImageWrapper">
                        <img 
                        src={this.props.product.gallery[0]} 
                        className="responsiveImage" 
                        alt={this.props.product.name}
                        />

                        <div className="qtyButtons">
                            <button onClick={() => this.props.REMOVE_FROM_CART(this.props.product)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

