import React from "react";
import PropTypes from "prop-types";

const Banner2 = (props) => {
  return (
    <div>
      <h1 className="Date color">{props.Date}</h1>
    </div>
  );
};
Banner2.propTypes = {
  Date: PropTypes.string.isRequired,
};

export default Banner2;
