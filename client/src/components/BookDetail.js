import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

const BookDetail = ({ bookId }) => {
  const { loading, data = {} } = useQuery(getBookQuery, {
    variables: { id: bookId },
    skip: !bookId,
  });

  const { book } = data;

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul>
            {book.author.books.map((bookByAuthor) => (
              <li key={bookByAuthor.id}>{bookByAuthor.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>{loading ? "...loading" : "No book selected"}</p>
      )}
      <div>
        <p>Output book details</p>
      </div>
    </div>
  );
};

export default BookDetail;
