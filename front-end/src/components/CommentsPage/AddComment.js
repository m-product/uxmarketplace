import React, { useState, useContext } from "react";
import { CommentContext } from "./CommentContext";

const AddComment = () => {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const [comments, setComments] = useContext(CommentContext);

  const updateUser = (e) => {
    setUser(e.target.value);
  };
  const updateContent = (e) => {
    setContent(e.target.value);
  };
  const updateHeading = (e) => {
    setHeading(e.target.value);
  };

  const addComment = (e) => {
    e.preventDefault();
    setComments((prevComments) => [
      ...prevComments,
      { user: user, content: content, heading: heading },
    ]);
  };

  return (
    <form onSubmit={addComment}>
      <input type="text" name="user" value={user} onChange={updateUser} />
      <input
        type="text"
        name="heading"
        value={heading}
        onChange={updateHeading}
      />
      <input
        type="text"
        name="content"
        value={content}
        onChange={updateContent}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddComment;
