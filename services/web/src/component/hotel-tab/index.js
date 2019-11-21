import React from "react";
import PropTypes from "prop-types";
import HotelTabStyle from "./hotel-tab-style";
import Tabs from "./tabs";

const HotelTab = ({ activeTab, onChange }) => {
  return (
    <HotelTabStyle>
      <Tabs active={activeTab} onChange={onChange}>
        <span key='descTab'>description</span>
        <span key='detailTab'>DETAILS</span>
        <span key='locationTab'>LOCATION</span>
      </Tabs>
    </HotelTabStyle>
  );
};

HotelTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default HotelTab;
