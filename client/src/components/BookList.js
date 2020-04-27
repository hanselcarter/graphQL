import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book, i) => (
          <li key={book.id}>{book.name}</li>
        ))}
        <li>book</li>
      </ul>
    </div>
  );
};

export default BookList;
