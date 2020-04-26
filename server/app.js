const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose.connect(
  "mongodb+srv://hanselcarter:hanselrock14@cluster0-p3vjg.gcp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  () => console.log("connected to db")
);

app.listen(4000, () => {
  console.log("listening to port 4000");
});
