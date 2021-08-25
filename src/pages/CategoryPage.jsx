import React, { Component } from 'react';

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }

    //
    findProducts(productsProp) {
        let array = productsProp.filter(product => product.category === this.props.category);
        return array.map((product, key) => 
            <div className="" key={key}>
                <h1>{product.name}</h1>
                <p>{product.prices[this.props.currencyIndex].currency} 
                {product.prices[this.props.currencyIndex].amount}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.findProducts(this.props.products)
                }
            </div>
        )
    }
}