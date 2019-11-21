import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const IconComponent = ({ iconArrowName, customizePrefixCls, isRightIcon }) => {
  const prefixClsIcon = `${customizePrefixCls}-icon`;
  const prefixClsWrapper = `${prefixClsIcon}-wrapper`;
  const iconClasses = classNames(prefixClsIcon, `${iconArrowName}`);
  const WrapperClasses = classNames(prefixClsWrapper, { right: isRightIcon });

  return (
    <div className={WrapperClasses}>
      <i className={iconClasses} />
    </div>
  );
};

IconComponent.propTypes = {
  iconArrowName: PropTypes.string.isRequired,
  customizePrefixCls: PropTypes.string.isRequired,
  isRightIcon: PropTypes.bool
};

IconComponent.defaultProps = {
  isLoading: false,
  isRightIcon: false
};

export default memo(IconComponent);
