import React, { Component } from 'react';

//Apollo GraphQL
import { Query } from '@apollo/react-components';
import { QUERY_SINGLE_PRODUCT } from '../graphql/productQuery';

export default class ProductPage extends Component {
    render() {
        const { id } = this.props.match.params;

        return (
            <Query query={ QUERY_SINGLE_PRODUCT } variables={ { id } }>
                {/*Here we will pass the data into the components as props if we have large jsx*/}
                {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                
                return (
                    <div>
                    <h1>{data.product.name}</h1>
                    </div>
                )
                }}
            </Query>
        )
    }
}
