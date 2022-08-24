import { Query } from '@apollo/react-components';
import { gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
{
    categories {
      name
      products {
        name
        description
      }
    }
  }
`

  import React, { Component } from 'react'
  
  export default class Example extends Component {
    render() {
      return (
        <Query
        query={EXCHANGE_RATES}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
    
          return data.categories.map(({ name, products }) => (
            <div key={name}>
                <p>{products[0].name}</p>
                <p>{products[0].description}</p>
            </div>
          ));
        }}
      </Query>
      )
    }
  }
  