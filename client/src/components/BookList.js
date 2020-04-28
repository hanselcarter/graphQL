import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);
  const [selectedBookId, setSelectedBookId] = React.useState("");

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book, i) => (
          <li key={book.id} onClick={() => setSelectedBookId(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetail bookId={selectedBookId} />
    </div>
  );
};

export default BookList;
