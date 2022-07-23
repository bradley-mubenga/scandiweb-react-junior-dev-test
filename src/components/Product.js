import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

//Images
import addToCart from '../assets/images/add-to-cart.png';

export default class Product extends Component {
    render() {
        return (
            <div className={
                this.props.product.inStock
                ? ("product")
                : ("product out-of-stock")
            }>
                <div>          
                    <div className="productImageWrapper">
                        <div>
                            <img
                                alt={this.props.product.name} src={this.props.product.gallery[0]}
                                className="productCardImage"
                            />
                            {
                                this.props.product.inStock
                                ? ("")
                                : (<h5 className="outOfStock">OUT OF STOCK</h5>)
                            }
                        </div>

                        {
                            this.props.product.inStock
                            ? (
                                <span>
                                    <img src={addToCart} className="addToCartButton" alt=""/>
                                </span>
                            )
                            : ("")
                        }
                    </div>

                    {
                        this.props.overlay
                        ? (
                        <div className="productText">
                            <h4>{this.props.product.brand} {this.props.product.name}</h4>
                            <h5>
                                {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                                {this.props.product.prices[this.props.currencyIndex].amount
                            }</h5>
                        </div>
                        )
                        : (
                        <Link to={ `/product/${this.props.product.id}`}>
                            <div className="productText">
                                <h4>{this.props.product.brand} {this.props.product.name}</h4>
                                <h5>
                                    {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                                    {this.props.product.prices[this.props.currencyIndex].amount
                                }</h5>
                            </div>
                        </Link>
                        )
                    }
                </div>
            </div>
        )
    }
}
