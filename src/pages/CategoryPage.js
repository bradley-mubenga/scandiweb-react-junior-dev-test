import React, { Component } from 'react'

//React Router
import { Link } from "react-router-dom"
//Apollo GraphQL
import { Query } from '@apollo/react-components';

//GraphQL Query
import { QUERY_ALL, QUERY_CLOTHES, QUERY_TECH } from '../graphql/productQuery';

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

                        return <>
                            {
                                data.category.products.map((product, index) => (
                                    <div key={index}>
                                        <div>          
                                        <h1>{product.name}</h1>
                                        <Link to={ `/product/${product.id}`}>Producto!</Link>
                                        </div>
                                    </div>
                                    ))
                            }
                        </>
                    }
                }
            </Query>
        )
    }
}
