import React, { Component } from 'react';

//React Router
import { Link } from "react-router-dom";

//A Function that takes the index of a item
//Places a active class on the item with the specific index


export default class CartItem extends Component {
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

    addAttribute = (productName, attributesArray, attributeType, index) => {
        let result = this.state.attributes.find((product) => product.productName === productName && product.attributeType === attributeType );

        if (result === undefined) {
            this.setState({
                attributes: [
                    ...this.state.attributes,
                    { 
                        productName: productName, 
                        attributeType: attributeType, 
                        attributes: attributesArray, 
                        activeIndex: index
                    }
                ]
            })
        }

        else {
            //Bug is here for some reason the other attributes returns an empty array. Check the definition of filter and the !== or != operands.
            let otherAttributes = this.state.attributes.filter(product => product.productName !== productName && product.attributeType !== attributeType );

            console.log("Other attri", otherAttributes)
            
            this.setState({
                attributes: [
                    ...otherAttributes,
                    { 
                        productName: productName, 
                        attributeType: attributeType, 
                        attributes: attributesArray, 
                        activeIndex: index
                    }
                ]
            })
        }
    }

    //Create a function that will loop through the attributes state.
    
    //find the attribute object with the same id as the cart item.
    //Check if the active index macthes the current index of the button (attribute value).
    //Add active class if so, don't add active class if not.
    //Change the activeIndex to match the index of the button (attribute value).

    componentDidUpdate() {
        console.log(this.state.attributes)
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

