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

mongoose.connect("Your connection string", { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

app.listen(4000, () => {
  console.log("listening to port 4000");
});
