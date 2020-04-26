import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book, i) => (
          <li key={i}>{book.name}</li>
        ))}
        <li>book</li>
      </ul>
    </div>
  );
};

export default BookList;
