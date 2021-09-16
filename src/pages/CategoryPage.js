import React, { Component } from 'react'

//Apollo GraphQL
import { Query } from '@apollo/react-components';
import { QUERY_ALL, QUERY_CLOTHES, QUERY_TECH } from '../graphql/productQuery';

//Components
import Product from '../components/Product';

//SCSS
import '../assets/sass/CategoryPage.scss';

export default class ProductListingPage extends Component {
    render() {
        return (
             <Query query={
                 (this.props.category === 'all') ? QUERY_ALL
                 : (this.props.category === 'tech') ? QUERY_TECH
                 : (this.props.category === 'clothes') ? QUERY_CLOTHES
                 : (null)
             }>
                {/*Here we will pass the data into the components as props if we have large jsx*/}
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return (
                            <main className="container categoryPage">
                                <h1 className="categoryName">
                                    {this.props.category[0].toUpperCase() + this.props.category.slice(1)}
                                </h1>

                                <div className="products">
                                    {
                                        data.category.products.map((product, index) => (
                                            <Product
                                                product={product} 
                                                index={index} 
                                            />
                                        ))
                                    }
                                </div>
                            </main>
                        )
                    }
                }
            </Query>
        )
    }
}
