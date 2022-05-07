export {}

const { UserInputError } = require("apollo-server-express");
require("dotenv").config();

async function getShortLivedAccessToken() {
 
  const params = new Map([
    ["client_id", process.env.INSTAGRAM_APP_ID],
    ["client_secret", process.env.INSTAGRAM_APP_SECRET],
    ["code", process.env.AUTH_CODE],
    ["grant_type", "authorization_code"],
    ["redirect_uri", process.env.REDIRECT_URI]
  ]);

  const formData = new FormData();
  for (const [param, value] of params) {
    formData.append(param, value);
  }

  let response: Response = await fetch(`https://api.instagram.com/oauth/access_token`, {
    method: "POST",
    headers: {
      Host: "api.instagram.com"
    },
    body: formData
  });
  
  let data = await response.json();

  return response.ok ? data : new UserInputError(data.error_message)
}

async function getLongLivedAccessToken() {
  const params =
  `\
grant_type=ig_exchange_token\
&client_secret=${process.env.INSTAGRAM_APP_SECRET}\
&access_token=${process.env.SHORT_LIVED_AT}\
  `;

  let response: Response = await fetch(`https://graph.instagram.com/access_token?${params}`)

  let data = await response.json();

  return response.ok? data : new UserInputError(data.error_message);
}

module.exports = { getShortLivedAccessToken, getLongLivedAccessToken }