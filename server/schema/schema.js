const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

//dummy data

const books = [
  { name: "tes1", genre: "action", id: "1", authorId: "2" },
  { name: "test2", genre: "fantasy", id: "2", authorId: "2" },
  { name: "test3", genre: "fantasy", id: "3", authorId: "1" },
  { name: "tes4", genre: "action", id: "4", authorId: "2" },
  { name: "test5", genre: "fantasy", id: "5", authorId: "2" },
  { name: "test6", genre: "fantasy", id: "6", authorId: "1" },
];

const authors = [
  { name: "author1", age: 34, id: "1" },
  { name: "author2", age: 35, id: "2" },
];

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        const booksFiltered = books.filter(
          (book) => book.authorId == parent.id
        );
        return booksFiltered;
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        const author = authors.find((author) => author.id == parent.authorId);
        return author;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        const book = books.find((book) => book.id == args.id);
        return book;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        const author = authors.find((author) => author.id == args.id);
        return author;
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return authors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
