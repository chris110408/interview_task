import React from "react";
import PropTypes from "prop-types";
import IconComponent from "./icon-component";
import classNames from "classnames";
import Wrapper from "./buttonstyle-wrapper";

class ButtonComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: this.props.isLoading
    };
  }

  handleClick(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }
    const { clickFunction } = this.props;
    if (clickFunction) {
      clickFunction();
    }
  }

  render() {
    const {
      customizePrefixCls,
      iconArrowName,
      buttonText,
      isRightIcon
    } = this.props;
    const prefixCls = `${customizePrefixCls}-btn`;
    const classes = classNames(prefixCls);
    const getIcon = (iconArrowName, customizePrefixCls, isRightIcon) => {
      return (
        <IconComponent
          iconArrowName={iconArrowName}
          customizePrefixCls={customizePrefixCls}
          isRightIcon={isRightIcon}
        />
      );
    };
    return (
      <Wrapper>
        <button className={classes} type='button' onClick={this.handleClick}>
          {isRightIcon ? null : getIcon(iconArrowName, customizePrefixCls)}
          {buttonText}
          {isRightIcon
            ? getIcon(iconArrowName, customizePrefixCls, isRightIcon)
            : null}
        </button>
      </Wrapper>
    );
  }
}

ButtonComponent.propTypes = {
  iconArrowName: PropTypes.string.isRequired,
  customizePrefixCls: PropTypes.string,
  buttonText: PropTypes.string,
  isRightIcon: PropTypes.bool
};

ButtonComponent.defaultProps = {
  customizePrefixCls: "vegas",
  buttonText: "button",
  isRightIcon: false
};

export default ButtonComponent;
