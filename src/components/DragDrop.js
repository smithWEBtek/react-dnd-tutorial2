import React from "react";
import classes from "./DragDrop.module.css";
import cat from "../assets/cat.jpeg";
import dog from "../assets/dog.jpeg";
import fish from "../assets/fish.jpeg";
import Picture from "./Picture";

const PictureList = [
  {
    id: 0,
    name: "cat",
    url: cat,
  },
  {
    id: 1,
    name: "dog",
    url: dog,
  },
  {
    id: 2,
    name: "fish",
    url: fish,
  },
];

const renderedPictureList = PictureList.map((pic) => (
  <img
    className={classes.pet}
    src={pic.url}
    alt={`${pic.name} pic`}
    key={pic.id}
  />
));

const draggablePictures = PictureList.map((pic) => (
  <Picture
    id={pic.id}
    key={`${pic.id}${pic.name}`}
    name={pic.name}
    url={pic.url}
  />
));

function DragDrop() {
  return (
    <>
      <div className="pictures">renderedPictures: {renderedPictureList}</div>
      <div>draggablePictures: {draggablePictures}</div>
      <div className="board"></div>
    </>
  );
}

export default DragDrop;
