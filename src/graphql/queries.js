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
