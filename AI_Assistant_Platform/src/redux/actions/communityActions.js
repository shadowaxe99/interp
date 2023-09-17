
import { gql } from '@apollo/client';

export const GET_COMMUNITY_DATA = 'GET_COMMUNITY_DATA';
export const SET_COMMUNITY_DATA = 'SET_COMMUNITY_DATA';

const GET_COMMUNITY_QUERY = gql`
  query GetCommunity {
    community {
      id
      name
      members {
        id
        name
      }
      posts {
        id
        title
        content
        author {
          id
          name
        }
      }
    }
  }
`;

export const getCommunityData = () => async (dispatch, getState, client) => {
  const { data } = await client.query({ query: GET_COMMUNITY_QUERY });
  dispatch({ type: GET_COMMUNITY_DATA, payload: data.community });
};

export const setCommunityData = (communityData) => ({
  type: SET_COMMUNITY_DATA,
  payload: communityData,
});
