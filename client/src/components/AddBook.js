import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getAuthorsQuery } from "../queries/queries";

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <form>
      <div className="field">
        <label>Book Name</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author</label>
        <select>
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
      <button>+</button>
    </form>
  );
};

export default AddBook;
