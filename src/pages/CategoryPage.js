import React, { Component } from 'react'

//React Router
import { Link } from "react-router-dom"
//Apollo GraphQL
import { Query } from '@apollo/react-components';

//GraphQL Query
import { QUERY_ALL } from '../graphql/productQuery';

export default class ProductListingPage extends Component {
    render() {
        return (
             <Query query={QUERY_ALL}>
                {/*Here we will pass the data into the components as props if we have large jsx*/}
                {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.category.products.map((product, index) => (
                <div key={index}>
                    <div>          
                    <h1>{product.name}</h1>
                    <Link to={ `/product/${product.id}`}>Producto!</Link>
                    </div>
                </div>
                ))
                
                }}
            </Query>
        )
    }
}
