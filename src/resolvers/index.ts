export {}

const { getLongLivedAccessToken, getShortLivedAccessToken, getUserProfileData } = require("./instagram");
const Query = {
  Query: {
    getShortLivedAccessToken: () => getShortLivedAccessToken(),
    getLongLivedAccessToken: () => getLongLivedAccessToken(),
    getUserProfileData: () => getUserProfileData(),
  }
}

module.exports = Query