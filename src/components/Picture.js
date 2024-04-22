import React from "react";
import PropTypes from "prop-types";
import classes from "./Picture.module.css";
import {useDrag} from "react-dnd";
function Picture({id, url, name}) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      key={id}
      className={classes.pet}
      alt={`${name} pic`}
      style={{border: isDragging ? "4px solid lightgreen" : "0px"}}
    />
  );
}

Picture.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Picture;
