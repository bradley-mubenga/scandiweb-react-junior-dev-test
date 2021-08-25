import gql from 'graphql-tag';

const getAllProducts = gql`
query {
  category{
    name
    products {
      id
      name
      inStock
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

const getTechProducts = gql`
    query {
        category (input: {title: "tech"}) {
            name
            products {
                id
                name
                inStock
                description
                prices {
                    currency
                    amount
                }
            }
        }
    }
`;

const getClothesProducts = gql`
    query {
        category (input: {title: "clothes"}) {
            name
            products {
                id
                name
                inStock
                description
                prices {
                    currency
                    amount
                }
            }
        }
    }  
`;

export { getAllProducts, getTechProducts, getClothesProducts }
