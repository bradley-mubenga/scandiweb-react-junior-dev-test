//Apollo GraphQL
import { gql } from '@apollo/client';
//All Products Query
export const ALL_CATEGORIES = gql`
{
    category(input: {title: ""}) {
      name
      products {
        id
        name
        inStock
        gallery
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;
//Tech Products Query
export const TECH_CATEGORY = gql`
{
    category(input: {title: "tech"}) {
      name
      products {
        id
        name
        inStock
        gallery
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;
//Clothing Products Query
export const CLOTHES_CATEGORY = gql`
{
    category(input: {title: "clothes"}) {
      name
      products {
        id
        name
        inStock
        gallery
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;