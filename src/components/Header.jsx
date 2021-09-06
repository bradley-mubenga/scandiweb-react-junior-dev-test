import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

//SCSS
import '../assets/scss/header.scss';
import '../assets/scss/shoppingCart.scss';

//Images
import logo from '../assets/images/logo.png';
import currency from '../assets/images/currency.png';
import chevron from '../assets/images/chevron.png';
import cart from '../assets/images/shopping-cart.png';

export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            attributeSize: 0,
            attributeColor: 0,
            attributeCapacity: 0,
            attributeMisc: 0
        }
    }

    //
    totalAmount(shoppingCart, currencyIndex) {
        let totalAmount = 0;
        let currencySymbol = '$';

        for (let i = 0; i < shoppingCart.length; i++){
            currencySymbol = this.props.currencySymbol(shoppingCart[i].item.prices[this.props.currencyIndex].currency)
            totalAmount += shoppingCart[i].item.prices[currencyIndex].amount;
        }

        return `${currencySymbol} ${Math.round(totalAmount)}`;
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
        //
        let clothesClass = (this.props.category === 'clothes') ? "active" : "";
        let techClass = (this.props.category === 'tech') ? "active" : "";

        return (
            <header id="header">
                <nav>
                    <ul>
                        <Link to="/" className={clothesClass} onClick={() => this.props.switchCategory('clothes')}>Clothes</Link>
                        <Link to="/" className={techClass} onClick={() => this.props.switchCategory('tech')}>Tech</Link>
                    </ul>
                </nav>

                <div>
                    <img src={logo} alt="e-commerce-store-logo"/>
                </div>

                <div>
                    <ul>                       
                        <li className="dropdown">
                            <div className="dropbtn">
                                <img src={currency} alt="dollar-sign"/>
                                <img src={chevron} alt="chevron-vector"/>
                            </div>

                            <ul className="dropdown-content">
                                <li onClick={()=> this.props.switchCurrency(0)}>$ USD</li>
                                <li onClick={()=> this.props.switchCurrency(1)}>£ GBP</li>
                                <li onClick={()=> this.props.switchCurrency(2)}>A$ AUD</li>
                                <li onClick={()=> this.props.switchCurrency(3)}>¥ JPY</li>
                                <li onClick={()=> this.props.switchCurrency(4)}>₽ RUB</li>
                            </ul>
                        </li>

                        <li className="dropdownCart dropdown-cartOn">
                            <div className="shoppingCartIcon">
                                <img src={cart} alt="shopping-cart-vector"/>

                                <div>
                                    <span>{this.props.shoppingCart.length}</span>
                                </div>
                            </div>


                            <ul className="dropdown-cart">
                                <div>
                                    <p><span>My Bag</span>, {this.props.shoppingCart.length} {(this.props.shoppingCart.length > 1) ? "items" : "item"}</p>
                                </div>
                                {
                                    this.props.shoppingCart.slice(0, 2).map((product, index) => 
                                        <div className="cartItem" key={index}>
                                            <div className="">
                                                <h5>{product.item.name}</h5>
                                                <p>{this.props.currencySymbol(product.item.prices[this.props.currencyIndex].currency)} {product.item.prices[this.props.currencyIndex].amount}</p>
                                                {
                                                    product.item.attributes.map((attribute, keyIndex) => 
                                                        <div className="productSizesCart" key={keyIndex}>
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
                                            </div>

                                            <div className="counterImage">
                                                <span>
                                                    <button className="blockButton" onClick={() => this.props.incrementQuantity(this.props.shoppingCart, index)}>+</button>
                                                    <p>{product.amount}</p>
                                                    <button className="blockButton" onClick={() => this.props.decrementQuantity(this.props.shoppingCart, index)}>-</button>
                                                </span>
                                                <div className="">
                                                    <img src={product.item.gallery[0]} alt="product" className="cartProductImage"/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                <div>
                                    <h5>Total: {this.totalAmount(this.props.shoppingCart, this.props.currencyIndex)}</h5>
                                </div>

                                <div className="shoppingCartLinks">
                                    <Link to="/shop/cart"><button className="whiteButton">VIEW BAG</button></Link>
                                    <div>
                                        <button className='checkoutButton'>CHECKOUT</button>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
