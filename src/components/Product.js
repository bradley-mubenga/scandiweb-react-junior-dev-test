import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

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
                    </div>
                    <Link to={ `/product/${this.props.product.id}`}>Producto!</Link>
                </div>
            </div>
        )
    }
}
