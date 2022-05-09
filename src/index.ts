require("dotenv").config();
const express = require("express");
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const PORT: any = process.env.PORT || "4000";

const app = express();
const httpServer = http.createServer(app);

( async function startApolloServer(){ 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  plugins: [ ApolloServerPluginDrainHttpServer({ httpServer })]
}); 

  await server.start();
  server.applyMiddleware({app});
  console.log("Apollo server has started!");

})();

app.get("/", (req: any, res: any) => {
  res.send(`Server is running!`);
});

app.get("/auth", (req: any, res: any) => {
  res.send(`<a href="https://api.instagram.com/oauth/authorize\
?client_id=${process.env.INSTAGRAM_APP_ID}\
&redirect_uri=${process.env.REDIRECT_URI}\
&scope=user_profile,user_media\
&response_type=code"\
>\
Authorize\
<a/>\
  `);
});

httpServer.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));