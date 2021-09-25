import React, { Component } from 'react';

//Apollo GraphQL
import { Query } from '@apollo/react-components';
import { QUERY_SINGLE_PRODUCT } from '../graphql/productQuery';

//SCSS
import '../assets/sass/ProductPage.scss';

//HTML React Parse
import parser from 'html-react-parser';

export default class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageIndex: 0
        }
    }

    switchImage = (index) => {
        this.setState({
            imageIndex: index
        })
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <Query query={ QUERY_SINGLE_PRODUCT } variables={ { id } }>
                {/*Here we will pass the data into the components as props if we have large jsx*/}
                {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                
                return (
                    <main className="container" key={data.product.id}>
                        <div className="productWrapper">
                            <div className="imagesWrapper">
                                <div className="smallImagesWrapper">
                                    {
                                        data.product.gallery.map((image, index) => (
                                            <div 
                                            onClick={() => this.switchImage(index)}
                                            key={index}
                                            className="smallImages"
                                            >
                                                <img 
                                                    src={image} 
                                                    alt={data.product.name} 
                                                />
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="bigImage">
                                    <img
                                        src={data.product.gallery[this.state.imageIndex]} 
                                        alt={data.product.name}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="productText">
                                        <div className="productTextBlock">
                                            <h4>{data.product.brand}</h4>
                                            <h4>{data.product.name}</h4>
                                        </div>
                                        {/*MAKE SURE TO LIFT THE ATTRIBUTES STATE TO THE APP.js I Order to use it in this and other components (Shopping Cart)*/}
                                        <div className="attributesBlock productTextBlock">
                                        {
                                            data.product.attributes.map((attributes, index) => {
                                                return (
                                                    <div key={index}>
                                                        <h5 className="robotoText">{attributes.name.toUpperCase()}:</h5>
                                                        <div className="attributesBlockSquares">
                                                            {
                                                                this.props.returnAttributes(data.product.id, attributes.items, attributes.name)
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>

                                        <div className="productTextBlock">
                                            <h5 className="robotoText">PRICE:</h5>
                                            <h5>
                                                {this.props.returnSymbol(data.product.prices[this.props.currencyIndex].currency)} 
                                                {data.product.prices[this.props.currencyIndex].amount}
                                            </h5>
                                        </div>
                                        
                                        <div className="productTextBlock">
                                            <button
                                                className="addToCart"
                                                onClick={() => this.props.ADD_TO_CART(data.product)}
                                            >ADD TO CART</button>
                                        </div>

                                        <div className="productDescription productTextBlock">
                                            {
                                                parser(data.product.description)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                )
                }}
            </Query>
        )
    }
};


