import React, {useState} from "react";
import cat from "../assets/cat.jpeg";
import dog from "../assets/dog.jpeg";
import fish from "../assets/fish.jpeg";
import Picture from "./Picture";
import "../App.css";
import {useDrop} from "react-dnd";

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

  const [{isOver}, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    // console.log("id: ", id);
    const draggedPicture = PictureList.filter(picture => picture.id === id)[0]
    console.log('draggedPicture: ', draggedPicture);
    setBoard([...board], PictureList.filter(picture => picture.id === id))
  };

  return (
    <>
      <div className="Pictures">{draggablePictures}</div>
      <div className="Board" ref={drop}>
        {board}
        {/* {board.map((pic) => (
          <Picture
            id={pic.id}
            key={`${pic.id}${pic.name}`}
            name={pic.name}
            url={pic.url}
          />
        ))} */}
      </div>
    </>
  );
}

export default DragDrop;
