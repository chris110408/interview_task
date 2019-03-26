import React from "react";

import PropTypes from "prop-types";
import { Tag, Icon, Input } from "antd";
import { InterestsDiv } from "./styles";

const InterestContent = ({
  Interests,
  inputValue,
  inputVisible,
  newTags,
  showInput,
  handleInputChange,
  handleInputConfirm
}) => {
  return (
    <InterestsDiv>
      <div className="InterestTitle">Interests</div>
      {Interests.concat(newTags).map(item => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {inputVisible && (
        <Input
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{ background: "#fff", borderStyle: "dashed" }}
        >
          <Icon type="plus" />
        </Tag>
      )}
    </InterestsDiv>
  );
};

InterestContent.propTypes = {
  Interests: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputVisible: PropTypes.bool.isRequired,
  newTags: PropTypes.array.isRequired,
  showInput: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputConfirm: PropTypes.func.isRequired
};

export { InterestContent };
