import React, { Component } from 'react';

//React Router
import { Link } from 'react-router-dom';

//SCSS
import '../assets/scss/categoryPage.scss';

//Images
import shoppingCart from '../assets/images/shopping-cart-white.png';

export default class CategoryPage extends Component {
    //
    findProducts(productsProp) {
        let array = productsProp.filter(product => product.category === this.props.category);
        return array.map((product, key) =>
            <div className="productCard" key={key}>
                <div>
                    {
                        product.inStock ? ( <div className="productImage">
                        <img src={product.gallery[0]} className="image"  alt={product.name} />
                    </div> ) : ( <div className="productImage">
                    <img src={product.gallery[0]} alt={product.name} className="outImg" />
                        <div className="center">OUT OF STOCK</div>
                    </div> )
                    }

                    {
                        product.inStock ? ( <div className="productInfo">
                        <Link to={product.id} className="productLink">
                            <h5>{product.brand} {product.name}</h5>
                            <h6>{this.props.currencySymbol(product.prices[this.props.currencyIndex].currency)} {product.prices[this.props.currencyIndex].amount}</h6>
                        </Link>
                    </div> ) : ( <div className="productInfo">
                        <div to={product.id} className="productLinkNotActive">
                            <h5>{product.brand} {product.name}</h5>
                            <h6>{this.props.currencySymbol(product.prices[this.props.currencyIndex].currency)} {product.prices[this.props.currencyIndex].amount}</h6>
                        </div>
                    </div> )
                    }

                    {
                        product.inStock ? (
                            (this.props.shoppingCart.some(p => p.item.id === product.id)) ? <div className="removeCartButton" onClick={() => this.props.removeFromCart(array, product.id)}>
                            <img src={shoppingCart} alt="shopping-cart"/>
                        </div>: <div className="addToCartButton" onClick={() => this.props.addToCart(array, product.id)}>
                            <img src={shoppingCart} alt="shopping-cart"/>
                        </div>
                        ) : ""
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className={this.props.isCart ? "categorySection overlay" : "categorySection"} >
                <div>
                    <h1>{this.props.category[0].toUpperCase() + this.props.category.substring(1)}</h1>
                </div>

                <main className="products">
                    {
                        this.findProducts(this.props.products)
                    }
                </main>
            </section>
        )
    }
}