import React from "react";
import PropTypes from 'prop-types';
import classes from "./Picture.module.css";

function Picture({id, url, name}) {
  return <img src={url} key={id} className={classes.pet} alt={`${name} pic`} />;
}

Picture.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Picture;
