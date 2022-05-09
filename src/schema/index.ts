export {}

const { gql } = require("apollo-server-express");

const Scalars = gql`
  scalar Date
`

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

const UserProfile = gql`
  type UserProfile {
    id: String!
    username: String!
  }
`


const UserMedia = gql`
  type UserMedia {
    id: String
    caption: String
    media_type: String
    media_url: String
    permalink: String
    thumbnail_url: String
    timestamp: Date
    username: String
    children: UserMediaData
  }
`

const UserMediaData = gql`
  type UserMediaData {
    data: [UserMedia]
  }
`

const Query = gql`
  type Query {
    getShortLivedAccessToken: ShortLivedAccessToken
    getLongLivedAccessToken: LongLivedAccessToken
    getUserProfileData: UserProfile
    getUserMediaData: UserMediaData
  }
`

module.exports = [ Scalars, ShortLivedAccessToken, LongLivedAccessToken, UserProfile, UserMedia,  UserMediaData, Query ]