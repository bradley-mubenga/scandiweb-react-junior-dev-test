import gql from 'graphql-tag';

const getAllProducts = gql`
query {
  category{
    name
    products {
      id
      name
      inStock
      gallery
      attributes {
        id
        name
        type
          items {
              displayValue
              value
              id
            }
          }
      description
      category
      prices {
        currency
        amount
      }
      brand
    }
  }
}`

export { getAllProducts }
