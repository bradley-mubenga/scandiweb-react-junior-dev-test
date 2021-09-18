import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

export default class CartItem extends Component {
    returnAttributes = (items, attributeType) => {
        if (attributeType === "Size" || attributeType === "Capacity") {
            return items.map((attr) => (
                <button>{attr.value}</button>
            ));
        }

        else if (attributeType === "Color") {
            return items.map((attr) => (
                <button style={{
                    background: attr.value,
                    color: attr.value === "#000000" ? ("White") : ("Black")
                }}>
                </button>
            ));
        }
    }

    render() {
        return (
            <div className="cartItem" key={this.props.index}>
                <div className="cartItemText">
                    <div className="cartLink">
                        <Link 
                            to={ `/product/${this.props.product.id}`}
                            onClick={() => {
                                this.props.handleCart(false)
                                this.props.overlayChange(!this.props.overlay)
                            }}
                        >
                            <h5>{this.props.product.brand} {this.props.product.name}</h5>
                        </Link>
                    </div>

                    <h4>
                        {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                        {this.props.product.prices[this.props.currencyIndex].amount}
                    </h4>
                    <div >
                        {
                            this.props.product.attributes.map((attributes, index) => {
                                return (
                                    <div>
                                        <div className="attributesBlock">
                                            {
                                                this.returnAttributes(attributes.items, attributes.name)
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

