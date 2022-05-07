export {}

const { getLongLivedAccessToken, getShortLivedAccessToken } = require("./instagram");
const Query = {
  Query: {
    getShortLivedAccessToken: () => getShortLivedAccessToken(),
    getLongLivedAccessToken: () => getLongLivedAccessToken()
  }
}

module.exports = Query