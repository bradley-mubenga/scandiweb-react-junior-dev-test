import React, { Component } from 'react';

//SCSS
import '../assets/scss/productPage.scss';

export default class ProductPage extends Component {
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

    returnHTML(string) {
        var dom = document.createElement('div');
        dom.innerHTML = string;
        return dom;
    }

    //
    carosel(imageArray, imageIndex) {
        return (
            <img src={imageArray[imageIndex]} alt="main-product"/>
        )
    }

    //
    moveCarosel(imageIndex) {
        this.setState({
            imageIndex: imageIndex
        })
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

    

    //
    findProduct(products, id) {
        let productArray = products.filter((product) => product.id === id)

        return productArray.map((product, key) => 
            <main className="product" key={key}>
                <div>
                    <div className="productPage">
                        <div className="carousel">
                            <div className="smallPicturesDesktop">
                                {
                                    product.gallery.map((imageLink, key) =>
                                        <img onClick={() => this.moveCarosel(key)} src={imageLink} alt="product" className="smallPicture" key={key} />
                                    )
                                }
                            </div>
                            <div className="bigPicture">
                                {
                                    this.carosel(product.gallery, this.state.imageIndex)
                                }
                            </div>
                            <div className="smallPicturesMobile">
                                {
                                    product.gallery.map((imageLink, key) =>
                                        <img onClick={() => this.moveCarosel(key)} src={imageLink} alt="product" className="smallPicture" key={key} />
                                    )
                                }
                            </div>
                        </div>

                        <div className="description">
                            <div>
                                <h2 className="brandName">{product.brand}</h2>
                                <h2>{product.name}</h2>
                            </div>

                            {
                                product.attributes.map((attribute, keyIndex) => 
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

                            <div className="price">
                                <h4 className="priceWord">PRICE:</h4>
                                <h5 className="priceWord">{this.props.currencySymbol(product.prices[this.props.currencyIndex].currency)} {product.prices[this.props.currencyIndex].amount}</h5>

                                {
                                    (this.props.shoppingCart.some(p => p.item.id === product.id)) ? <button className="removeButton" onClick={() => this.props.removeFromCart(products, product.id)}>Remove From Cart</button> : <button className="greenButton" onClick={() => this.props.addToCart(products, product.id)}>Add To Cart</button>
                                }
                            </div>

                            <div className="descriptionText" dangerouslySetInnerHTML={{__html: product.description}} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    render() {
        let id = window.location.pathname.slice(1);

        return (
            <section>
                {
                    this.findProduct(this.props.products, id)
                }
            </section>
        )
    }
}
