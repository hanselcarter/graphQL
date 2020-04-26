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

  if (!loading) {
    console.log(data, "data");
  }
  return (
    <div>
      <ul id="book-list">
        <li>book</li>
      </ul>
    </div>
  );
};

export default BookList;
