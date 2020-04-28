import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBook, { data: bookAddedData }] = useMutation(addBookMutation);
  const [bookName, setBookName] = React.useState("");
  const [bookGenre, setBookGenre] = React.useState("");
  const [selectedAuthorId, setSelectedAuthorId] = React.useState("");

  const onChangeBookName = (e) => {
    e.preventDefault();
    setBookName(e.target.value);
  };

  const onChangeBookGenre = (e) => {
    e.preventDefault();
    setBookGenre(e.target.value);
  };

  const onChangeAuthor = (e) => {
    e.preventDefault();
    setSelectedAuthorId(e.target.value);
  };

  const onClickAddBook = (e) => {
    e.preventDefault();
    if (bookName && bookGenre && selectedAuthorId) {
      addBook({
        variables: {
          name: bookName,
          genre: bookGenre,
          authorId: selectedAuthorId,
        },
        refetchQueries: [{ query: getBooksQuery }],
      });
    }
  };

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <form>
      <div className="field">
        <label>Book Name</label>
        <input type="text" onChange={onChangeBookName} />
      </div>
      <div className="field">
        <label>Genre</label>
        <input type="text" onChange={onChangeBookGenre} />
      </div>
      <div className="field">
        <label>Author</label>
        <select onChange={onChangeAuthor}>
          <option key="no valid" value={null}>
            Select author
          </option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onClickAddBook}>+</button>
    </form>
  );
};

export default AddBook;
