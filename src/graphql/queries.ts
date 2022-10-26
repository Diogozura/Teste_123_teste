import { gql } from 'graphql-request'

export const GRAPHQL_QUERY = gql`
query {
  products {
    data {
      id
      image{
        original
        thumbnail
        id
        __typename
      }
      name
      categories{
        name
}
      shop{
name
      }
      
      price
      quantity
    }
    paginatorInfo{
      currentPage
      count
}
  }
}
`