import React, { Component } from 'react'

export default class ProductPage extends Component {
    constructor(props){
        super(props);
    }

    returnHTML(string) {
        var dom = document.createElement('div');
        dom.innerHTML = string;
        return dom;
    }

    //
    carosel(imagesArray) {
    }

    //
    findProduct(products, id) {
        let productArray = this.props.products.filter((product, key) => product.id === id)

        return productArray.map((product, key) => 
            <main className="" key={key}>
                <div>
                    <div>
                        <button onClick={() => this.carosel(product.gallery)}>CLICK ME</button>
                        <div className="carousel">
                            <div className="smallPictures"></div>
                            <div className="bigPicture"></div>
                        </div>

                        <div className="description">
                            <h4>{product.name}</h4>

                            <div className="sizes"></div>

                            <div className="price">
                                <h5>PRICE:</h5>
                                <h5>{this.props.currencySymbol(product.prices[this.props.currencyIndex].currency)} {product.prices[this.props.currencyIndex].amount}</h5>
                                
                                <div>
                                    <button>Add To Cart</button>
                                </div>
                            </div>

                            <div dangerouslySetInnerHTML={{__html: product.description}} />
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
