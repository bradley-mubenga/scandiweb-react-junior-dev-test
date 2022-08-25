import React, { Component } from 'react';
//Apollo Client
import { Query } from '@apollo/react-components';
import { ALL_CATEGORIES, CLOTHES_CATEGORY, TECH_CATEGORY } from '../graphql/productQuery';
//
export default class Cat extends Component {
  render() {
    return (
      <Query query={ ALL_CATEGORIES }>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.category.products.map(({ id, name, brand, inStock, gallery, prices }) => (
          <div key={id}>
            <div>
              <img src={gallery[0]} alt={name} width="50px"/>
              <p>{inStock ? "INSTOCK" : "OUT OF STOCK"}</p>
              <p>{brand} {name}</p>
              <p>{prices[0].amount}</p>
            </div>
          </div>
        ));
      }}
    </Query>
    )
  }
}
