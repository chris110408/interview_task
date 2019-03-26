import React from "react";
import PropTypes from "prop-types";
import { Tooltip, Icon } from "antd";

const DetailItem = ({ promptText, IconType, DetailInfo }) => {
  return (
    <p>
      <Tooltip title={promptText}>
        <Icon type={IconType} />
      </Tooltip>
      {DetailInfo}
    </p>
  );
};

DetailItem.propTypes = {
  promptText: PropTypes.string.isRequired,
  IconType: PropTypes.string.isRequired,
  DetailInfo: PropTypes.string.isRequired
};

export { DetailItem };
