import React from "react";
import PropTypes from "prop-types";

const Banner1 = (props) => {
  return (
    <div>
      <h1 className="Header color">{props.Texto}</h1>
    </div>
  );
};
Banner1.propTypes = {
  Texto: PropTypes.string.isRequired,
};

export default Banner1;
