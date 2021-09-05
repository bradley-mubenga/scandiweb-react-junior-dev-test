import React, { Component } from 'react';

//SCSS
import '../assets/scss/shoppingCart.scss';

class ShoppingCart extends Component {

    render() {
        return (
            <section>
                <div className="cartContainer">
                    <div>
                        <h2>CART</h2>
                    </div>

                {
                    this.props.shoppingCart.map((product, index) =>
                        <div className="shoppingCart" key={index}>
                            <div>
                                <h3>{product.item.brand}</h3>
                                <h3>{product.item.name}</h3>
                                <p>{this.props.currencySymbol(product.item.prices[this.props.currencyIndex].currency)} {product.item.prices[this.props.currencyIndex].amount}</p>

                                <div className="productSizes">
                                    <div>
                                        <button className="blockButton">S</button>
                                    </div>
                                    
                                    <div>
                                        <button className="blockButton">M</button>
                                    </div>
                                </div>
                            </div>

                            <div className="itemAndCounter">
                                <span>
                                    <button className="blockButton" onClick={() => this.props.incrementQuantity(this.props.shoppingCart, index)}>+</button>
                                    <p>{product.amount}</p>
                                    <button className="blockButton" onClick={() => this.props.decrementQuantity(this.props.shoppingCart, index)}>-</button>
                                </span>
                                <div>
                                    <img src={product.item.gallery[0]} alt={product.item.name} width="50px" />
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}

export default ShoppingCart;