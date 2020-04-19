const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data

const books = [
  { name: "test", genre: "action", id: "1" },
  { name: "test2", genre: "fantasy", id: "2" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db
        const book = books.find((book) => book.id == args.id);
        return book;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
