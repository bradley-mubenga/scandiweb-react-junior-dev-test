import React, { Component } from 'react';

//SCSS
import '../assets/scss/productPage.scss';

export default class ProductPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            imageIndex: 0
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
                                product.attributes.map((attribute, index) => 
                                    <div className="productSizes" key={index}>
                                        <div>
                                            <h3>{attribute.name}</h3>
                                        </div>
                                        <div>
                                        {
                                            attribute.items.map((item, index) =>
                                            <div className="displayValue" key={index}>
                                                <button className="blockButton" style={(attribute.type === 'swatch') ? ({ backgroundColor: item.value}) : ({})}>{(attribute.type === 'swatch') ? "" : (item.displayValue)}</button>
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
                                
                                <button className="greenButton"  onClick={() => this.props.addToCart(products, product.id)}>Add To Cart</button>
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
