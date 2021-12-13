import { gql } from '@apollo/client';

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      token
      error
    }
  }
`;

export {REFRESH_TOKEN};