import React, { Component } from 'react';

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.products.map((product, key) => 
                        <h1>{product.name}</h1>
                    )
                }
            </div>
        )
    }
}