import React, { Component } from 'react'

export default class CartItem extends Component {
    componentDidMount() {
        console.log(this.props.shoppingCart)
    }

    render() {
        return (
            <div className="cartItem" key={this.props.index}>
                <div className="cartItemText">
                    <h5>{this.props.product.brand} {this.props.product.name}</h5>
                    <h4>
                        {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                        {this.props.product.prices[this.props.currencyIndex].amount}
                    </h4>
                    <div>
                        <h6>Attributes</h6>
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
                    </div>
                </div>
            </div>
        )
    }
}

