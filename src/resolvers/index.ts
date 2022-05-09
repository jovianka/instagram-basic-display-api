export {}

const { getLongLivedAccessToken, getShortLivedAccessToken, getUserProfileData, getUserMediaData } = require("./instagram");
const Query = {
  Query: {
    getShortLivedAccessToken: () => getShortLivedAccessToken(),
    getLongLivedAccessToken: () => getLongLivedAccessToken(),
    getUserProfileData: () => getUserProfileData(),
    getUserMediaData: () => getUserMediaData(),
  }
}

module.exports = Query