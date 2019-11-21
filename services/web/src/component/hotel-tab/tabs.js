import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ children, active, onChange }) => {
  return (
    <div className='vegas-hotel-info-tab-group'>
      {React.Children.map(children, (child, i) => {
        let className = `vegas-hotel-info-tab_button`;
        if (child.key === active) {
          className = `${className} vegas-hotel-info-tab_button--active`;
        }
        return (
          <div
            className={className}
            onClick={() => {
              onChange(child.key);
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Tabs;
