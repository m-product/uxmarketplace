import React, { useState, createContext } from "react";

export const CommentContext = createContext();

export const CommentProvider = (props) => {
  const [comments, setComments] = useState([
    {
      user: "saadat",
      heading: "cool",
      content:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "1",
    },
    {
      user: "ben",
      heading: "nice work",
      content:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "2",
    },
    {
      user: "max",
      heading: "good",
      content:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "3",
    },
    {
      user: "steven",
      heading: "nice",
      content:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      id: "4",
    },
  ]);
  return (
    <CommentContext.Provider value={[comments, setComments]}>
      {props.children}
    </CommentContext.Provider>
  );
};
