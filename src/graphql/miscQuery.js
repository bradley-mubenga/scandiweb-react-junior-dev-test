import { gql } from 'apollo-boost';

export const GET_CURRENCY = gql`
    query getCurriencies{
        currencies
    }
`;