import React, { Component } from 'react';

//
import { graphql } from '@apollo/client/react/hoc';
import gql from 'graphql-tag';

class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                <h1>Check Console</h1>
                {console.log(data.category)}
            </div>
        )
    }
}

//GraphQL HOC Client
export default graphql(gql`
    query {
        category{
            name
            products {
                id
                name
                inStock
                gallery
            }
        }
    }
`)(CategoryPage)
