import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`

  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }

`;