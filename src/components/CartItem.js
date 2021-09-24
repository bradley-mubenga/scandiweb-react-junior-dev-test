import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

export default class CartItem extends Component {
    //We must save this state in the Context API
    constructor(props){
        super(props)
        this.state = {
            attributes: []
        }
    }

    returnAttributes = (productName, items, attributeType) => {
        if (attributeType === "Size" || attributeType === "Capacity") {
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

            return items.map((attr, index) => (
                <button
                    onClick={
                        () => this.addAttribute(productName, items, attributeType, index)
                    }

                    className={
                        (result) ? (
                            result.activeIndex === index
                            ? "attributeActive"
                            : ""
                        ) : ("")
                    }
                >{attr.value}</button>
            ));
        }

        else if (attributeType === "Color") {
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType);

            return items.map((attr, index) => (
                <button 
                    style={{
                        background: attr.value,
                        color: attr.value === "#000000" ? ("White") : ("Black")
                    }}

                    onClick={
                        () => this.addAttribute(productName, items, attributeType, index)
                    }

                    className={
                        (result) ? (
                            result.activeIndex === index
                            ? "attributeActive"
                            : ""
                        ) : ("")
                    }
                >
                </button>
            ));
        }
    }

    addAttribute = (productName, attributesArray, attributeType, activeIndex) => {
        let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );

        if (result === undefined) {
            this.setState({
                attributes: [
                    ...this.state.attributes,
                    { 
                        productName: productName, 
                        attributeType: attributeType, 
                        attributes: attributesArray, 
                        activeIndex: activeIndex
                    }
                ]
            })
        }

        else {
            //Check if its in cart
            const doesExist = this.state.attributes.some(product => product.productName === productName && product.attributeType === attributeType );
            let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );
            
            //Decrementing The Cart Quantity If It Exists
            if (doesExist) {
                let index = this.state.attributes.findIndex(product => product.productName === productName && product.attributeType === attributeType );

                this.setState({
                    attributes: [
                    ...this.state.attributes.slice(0,index),
                    Object.assign(
                        {}, 
                        this.state.attributes[index], 
                        {...result, activeIndex: activeIndex}
                        ),
                    ...this.state.attributes.slice(index+1)
                    ]
                });
            }
        }
    }

    render() {
        return (
            <div className="cartItem" key={this.props.index}>
                <div className="cartItemText">
                    <div className="cartLink">
                        <h6>
                            <Link 
                                to={ `/product/${this.props.product.id}`}
                                onClick={() => {
                                    this.props.handleCart(false)
                                    this.props.overlayChange(!this.props.overlay)
                                }}
                            >
                            {this.props.product.brand} {this.props.product.name}
                            </Link>
                        </h6>
                    </div>

                    <h4>
                        {this.props.returnSymbol(this.props.product.prices[this.props.currencyIndex].currency)} 
                        {this.props.product.prices[this.props.currencyIndex].amount}
                    </h4>
                    <div >
                        {
                            this.props.product.attributes.map((attributes, index) => {
                                return (
                                    <div key={index}>
                                        <div className="attributesBlock">
                                            {
                                                this.returnAttributes(this.props.product.id, attributes.items, attributes.name)
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

