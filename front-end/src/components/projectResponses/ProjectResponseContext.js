import React, { useState, createContext } from "react";

export const ProjectResponseContext = createContext();

export const ProjectResponseProvider = (props) => {
  const [responses, setResponses] = useState([
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "1",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "2",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "3",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "4",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "5",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "6",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "7",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "8",
    },
    {
      username: "user",
      likes: 7,
      comments: 7,
      image: "../assets/placeholder.png",
      id: "9",
    },
  ]);
  return (
    <ProjectResponseContext.Provider value={[responses, setResponses]}>
      {props.children}
    </ProjectResponseContext.Provider>
  );
};
