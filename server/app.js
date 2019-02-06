const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross origin
app.use(cors());

mongoose
  .connect
  // Insert DB Key here, between quotes ""
  ();
mongoose.connection.once("open", () => {
  console.log("Connected to DB...");
});

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Listening...");
});
