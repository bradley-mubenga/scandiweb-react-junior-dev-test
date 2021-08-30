import React, { Component } from 'react'

export default class ProductPage extends Component {
    constructor(props){
        super(props);
    }

    //
    findProduct(products, id) {
        let productArray = this.props.products.filter((product, key) => product.id === id)

        return productArray.map((product, key) => 
            <h1>{product.name}</h1>
        )
    }

    render() {
        let id = window.location.pathname.slice(1);

        return (
            <main>
                {
                    this.findProduct(this.props.products, id)
                }
            </main>
        )
    }
}
