import React, {useState} from "react";
import cat from "../assets/cat.jpeg";
import dog from "../assets/dog.jpeg";
import fish from "../assets/fish.jpeg";
import Picture from "./Picture";
import "../App.css";
import {useDrop} from "react-dnd";

const PictureList = [
  {
    id: crypto.randomUUID(),
    name: "cat",
    url: cat,
  },
  {
    id: crypto.randomUUID(),
    name: "dog",
    url: dog,
  },
  {
    id: crypto.randomUUID(),
    name: "fish",
    url: fish,
  },
];

const draggablePictures = PictureList.map((pic) => (
  <Picture
    id={pic.id}
    key={`${pic.id}${pic.name}`}
    name={pic.name}
    url={pic.url}
  />
));

function DragDrop() {
  const [board, setBoard] = useState([]);

  // const [{isOver}, drop] = useDrop(() => ({
  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      // isOver: !!monitor.isOver(),
      isOver: monitor.isOver,
    }),
  }));

  const addImageToBoard = (id) => {
    const draggedPicture = PictureList.filter(
      (picture) => picture.id === id
    )[0];
    console.log("draggedPicture: ", draggedPicture);
    setBoard((board) => [...board, draggedPicture]);
  };

  const resetBoard = () => {
    setBoard([]);
  };

  return (
    <>
      <div className="Pictures">{draggablePictures}</div>
      <div className="Board" ref={drop}>
      <button onClick={resetBoard}>Reset Pet board</button>
      <h3>Pet board</h3>
        {board.map((pic) => (
          <Picture
            id={pic.id}
            key={`${pic.id}${pic.name}`}
            name={pic.name}
            // url={pic.url}
            url={pic.url}
          />
        ))}
      </div>
    </>
  );
}

export default DragDrop;
