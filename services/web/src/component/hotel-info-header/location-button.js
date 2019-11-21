import React, { memo } from "react";
import PropTypes from "prop-types";

const LocationButton = ({ location, changeActive }) => {
  return (
    <a
      href='#map'
      className='vegas-hotel-info_header-overall-bottom-button'
      onClick={() => {
        changeActive("locationTab");
      }}
    >
      <i className='icon-mark vegas-hotel-info_header-overall-bottom-item-icon' />
      <span>{location}</span>
    </a>
  );
};
LocationButton.propTypes = {
  location: PropTypes.string.isRequired,
  changeActive: PropTypes.func.isRequired
};

export default memo(LocationButton);
