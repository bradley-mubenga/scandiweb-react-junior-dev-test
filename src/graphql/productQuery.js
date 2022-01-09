//GraphQL
import { gql } from 'apollo-boost';

//Query All
export const QUERY_ALL = gql`
  query GetAllProducts {
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
  }
`;

//Query In Categories
export const QUERY_CATEGORY = gql`
  query GetTechProducts ($category: String!) {
    category(input: { title: $category }){
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
  }
`;

//Single Product Query
export const QUERY_SINGLE_PRODUCT = gql`
  query GetSingleProduct ($id: String!){
      product(id: $id) {
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
`;