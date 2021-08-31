import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

//SCSS
import '../assets/scss/categoryPage.scss';

//Images
import shoppingCart from '../assets/images/shopping-cart-white.png';

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }

    //
    currencySymbol(isoCode) {
        let symbol = '';

        switch (isoCode) {
            case 'USD':
                symbol = '$'
                break;
            case 'GBP':
                symbol = '£'
                break;
            case 'AUD':
                symbol = 'A$'
                break;
            case 'JPY':
                symbol = '¥'
                break;
            case 'RUB':
                symbol = '₽'
                break;
            default:
                break;
        }

        return symbol;
    }

    //
    findProducts(productsProp) {
        let array = productsProp.filter(product => product.category === this.props.category);
        return array.map((product, key) =>
            <div className="productCard" key={key}>
                <div>
                    <div className="productImage">
                        <img src={product.gallery[0]} className="image" />
                    </div>

                    <div className="productInfo">
                        <Link to={product.id} className="productLink">
                            <h5>{product.name}</h5>
                            <h6>{this.currencySymbol(product.prices[this.props.currencyIndex].currency)} {product.prices[this.props.currencyIndex].amount}</h6>
                        </Link>
                    </div>

                    <div className="addToCartButton" onClick={() => this.props.addToCart(array, product.id)}>
                        <img src={shoppingCart} alt="shopping-cart"/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="categorySection">
                <h1>{this.props.category[0].toUpperCase() + this.props.category.substring(1)}</h1>

                <main className="products">
                    {
                        this.findProducts(this.props.products)
                    }
                </main>
            </section>
        )
    }
}