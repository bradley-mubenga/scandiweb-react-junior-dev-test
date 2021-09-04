import React, { Component } from 'react'

class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <section>
                <div>
                {
                    this.props.shoppingCart.map((product, index) =>
                        <div>
                            <div>
                                <h3>{product.item.name}</h3>
                                <p>PRICE HERE</p>
                            </div>

                            <div>
                                <span>
                                    <button>+</button>
                                    <p>{product.amount}</p>
                                    <button>-</button>
                                </span>
                                <div>
                                    <img src={product.item.gallery[0]} alt={product.item.name} width="50px"/>
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