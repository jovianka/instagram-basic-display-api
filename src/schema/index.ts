export {}

const { gql } = require("apollo-server-express");

const ShortLivedAccessToken = gql`
  type ShortLivedAccessToken {
    access_token: String!
    user_id: Float!
  }
`
const LongLivedAccessToken = gql`
  type LongLivedAccessToken {
    access_token: String!
    token_type: String!
    expires_in: Float!
  }
`

const Query = gql`
  type Query {
    getShortLivedAccessToken: ShortLivedAccessToken
    getLongLivedAccessToken: LongLivedAccessToken
  }
`

module.exports = [ ShortLivedAccessToken, LongLivedAccessToken, Query ]