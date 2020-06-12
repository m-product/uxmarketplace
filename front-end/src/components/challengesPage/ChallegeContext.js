import React, { useState, createContext } from "react";

export const ChallengeContext = createContext();

export const ChallegeProvider = (props) => {
  const [challenges, setChallenges] = useState([
    {
      title: "Project 1",
      brief:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed. Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed.",
      image:
        "/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png",
      id: "1",
    },
    {
      title: "Project 2",
      brief:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed. Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed.",
      image:
        "/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png",
      id: "2",
    },
    {
      title: "Project 3",
      brief:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed. Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed.",
      image:
        "/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png",
      id: "3",
    },
    {
      title: "Project 4",
      brief:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed. Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed.",
      image:
        "/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png",
      id: "4",
    },
    {
      title: "Project 5",
      brief:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed. Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed.",
      image:
        "/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png",
      id: "5",
    },
    {
      title: "Project 6",
      brief:
        "A brief description Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed. Nullam a neque pretium, fermentum nunc at, tempus risus. Vestibulum vitae sapien libero. Sed non odio in ipsum consectetur cursus. Phasellus sed nisl et leo consequat ultricies. In justo dolor, congue in ipsum sed, lacinia cursus est. Ut non pharetra lacus. Sed vel diam mauris. Donec lectus velit, lobortis sed consectetur non, tempor id purus. Nulla maximus mauris massa, vitae ultricies ligula consectetur sed. Mauris convallis blandit sapien sit amet viverra. Morbi fringilla malesuada sem, a dapibus mi tincidunt sed.",
      image:
        "/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png",
      id: "6",
    },
  ]);
  return (
    <ChallengeContext.Provider value={[challenges, setChallenges]}>
      {props.children}
    </ChallengeContext.Provider>
  );
};
