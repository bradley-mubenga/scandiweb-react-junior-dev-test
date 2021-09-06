import React, { Component } from 'react';

//SCSS
import '../assets/scss/shoppingCart.scss';

class ShoppingCart extends Component {
    constructor(props){
        super(props);

        this.state = {
            imageIndex: 0,
            attributeSize: 0,
            attributeColor: 0,
            attributeCapacity: 0,
            attributeMisc: 0
        }
    }

    //
    attributeColor(index) {
        if (index === this.state.attributeColor) {
            return ("activeBlockButton")
        }
    }

    setColorState(value) {
        this.setState({
            attributeColor: value
        })
    }
    
    //
    attributeCapacity(index) {
        if (index === this.state.attributeCapacity) {
            return ("activeBlockButton")
        }
    }

    setCapacityState(value) {
        this.setState({
            attributeCapacity: value
        })
    }
    
    //
    attributeSize(index) {
        if (index === this.state.attributeSize) {
            return ("activeBlockButton")
        }
    }

    setSizeState(value) {
        this.setState({
            attributeSize: value
        })
    }

    //
    attributeMisc(index) {
        if (index === this.state.attributeMisc) {
            return ("activeBlockButton")
        }
    }

    setMiscState(value) {
        this.setState({
            attributeMisc: value
        })
    }

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

                                {
                                product.item.attributes.map((attribute, keyIndex) => 
                                    <div className="productSizes" key={keyIndex}>
                                        <div>
                                            <h3>{attribute.name}</h3>
                                        </div>
                                        <div>
                                        {   
                                            attribute.items.map((item, index) =>
                                            <div className={
                                                (attribute.id === 'Color') ? (this.attributeColor(index)) : (attribute.id === 'Capacity') ? (this.attributeCapacity(index)) : (attribute.id === 'Size') ? (this.attributeSize(index)) : (attribute.id) ? (this.attributeMisc(index)) : ("")
                                            } key={index}>
                                                <button className="blockButton" style={(attribute.type === 'swatch') ? ({ backgroundColor: item.value}) : ({})} onClick={
                                                (attribute.id === 'Color') ? () => this.setColorState(index) : (attribute.id === 'Capacity') ? () => this.setCapacityState(index) : (attribute.id === 'Size') ? () => this.setSizeState(index) : (attribute.id) ? () => this.setMiscState(index) : (() => {return ""})  
                                                }>{(attribute.type === 'swatch') ? "" : (item.displayValue)}</button>
                                            </div>
                                            )
                                        }
                                        </div>
                                    </div>
                                )
                                }

                                <div>
                                    {
                                        (this.props.shoppingCart.some(p => p.item.id === product.item.id)) ? <button className="greenButton" onClick={() => this.props.removeFromCart(this.props.products, product.item.id)}>Remove From Cart</button> : <button className="greenButton" onClick={() => this.props.addToCart(this.props.products, product.item.id)}>Add To Cart</button>
                                    }
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