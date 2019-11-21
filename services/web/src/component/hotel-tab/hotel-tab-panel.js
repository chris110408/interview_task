import React, { useState, Suspense } from "react";
import PropTypes from "prop-types";
import HotelTabPanelStyle from "./hotel-tab-panel-style";
import ButtonComponent from "../button/button-component";
import classNames from "classnames";
import Spinner from "react-spinkit";

const HotelMapImage = React.lazy(() => import("../../component/hotel-map-img"));
const ShowTabPanelContext = ({ activeTab, hotel, src, isLoading }) => {
  const [isDescLessHeight, toggleDescTabHeight] = useState(true);
  const [isDetailLessHeight, toggleDetailTabHeight] = useState(true);
  const Panel = showRightPannel(
    activeTab,
    hotel,
    isDescLessHeight,
    toggleDescTabHeight,
    isDetailLessHeight,
    toggleDetailTabHeight,
    src
  );

  return (
    <>
      {isLoading ? (
        <Spinner
          name='ball-beat'
          color='olive'
          style={{ textAlign: "center" }}
        />
      ) : (
        <HotelTabPanelStyle>{Panel}</HotelTabPanelStyle>
      )}
    </>
  );
};

const showRightPannel = (
  activeTab,
  hotel,
  isDescLessHeight,
  toggleDescTabHeight,
  isDetailLessHeight,
  toggleDetailTabHeight,
  src
) => {
  const { description, details, location } = hotel;
  if (activeTab === "descTab") {
    return DescTabPanel(description, isDescLessHeight, toggleDescTabHeight);
  }
  if (activeTab === "detailTab") {
    return DetailTabPanel(details, isDetailLessHeight, toggleDetailTabHeight);
  }
  if (activeTab === "locationTab") {
    return LocationTabPanel(location, src);
  }
  return null;
};

const customizePrefixCls = "vegas";

const DescTabPanel = (description, isLessHeight, toggleTabHeight) => {
  const prefixCls = `${customizePrefixCls}-hotel-info-tab-panel`;
  const Class = classNames(prefixCls, `${prefixCls}-desc`, {
    [`${prefixCls}-hidden`]: isLessHeight
  });

  return (
    <div>
      <div id='desc' className={Class}>
        {description}
      </div>
      <div className='vegas-hotel-info-tab-panel-button'>
        {isLessHeight ? (
          <ButtonComponent
            iconArrowName='icon-down'
            customizePrefixCls={customizePrefixCls}
            buttonText='SHOW FULL DESCRIPTION'
            isRightIcon
            clickFunction={() => {
              toggleTabHeight(false);
            }}
          />
        ) : (
          <ButtonComponent
            iconArrowName='icon-up'
            customizePrefixCls={customizePrefixCls}
            buttonText='HIDE FULL DESCRIPTION'
            isRightIcon
            clickFunction={() => {
              toggleTabHeight(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

const DetailTabPanel = (detail, isLessHeight, toggleTabHeight) => {
  const prefixCls = `${customizePrefixCls}-hotel-info-tab-panel`;
  const Class = classNames(prefixCls, `${prefixCls}-detail`, {
    [`${prefixCls}-hidden`]: isLessHeight
  });
  return (
    <div>
      <div id='detail' className={Class}>
        {detail
          ? detail.map((i, index) => {
              return (
                <div
                  className='vegas-hotel-info-tab-panel-detail-group'
                  key={index}
                >
                  <div className='vegas-hotel-info-tab-panel-detail-lable'>
                    {i.label}:{" "}
                  </div>
                  <div className='vegas-hotel-info-tab-panel-detail-value'>
                    {i.value}
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className='vegas-hotel-info-tab-panel-button'>
        {isLessHeight ? (
          <ButtonComponent
            iconArrowName='icon-down'
            customizePrefixCls={customizePrefixCls}
            buttonText='VIEW MORE DETAILS'
            isRightIcon
            clickFunction={() => {
              toggleTabHeight(false);
            }}
          />
        ) : (
          <ButtonComponent
            iconArrowName='icon-up'
            customizePrefixCls={customizePrefixCls}
            buttonText='VIEW FEWER DETAILS'
            isRightIcon
            clickFunction={() => {
              toggleTabHeight(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

const LocationTabPanel = (location, src) => {
  return (
    <div className='vegas-hotel-info-tab-panel vegas-hotel-info-tab-location'>
      <div className='vegas-hotel-info-tab-location-address'>
        <span className='vegas-hotel-info-tab-location-address icon-mark' />
        {location
          ? location.address +
            "," +
            location.city +
            "," +
            location.state +
            " " +
            location.postalCode
          : null}
      </div>
      <div className='vegas-hotel-info-tab-location-map'>
        <Suspense fallback='Loading...'>
          <HotelMapImage src={src} />
        </Suspense>
      </div>
    </div>
  );
};

ShowTabPanelContext.propTypes = {
  activeTab: PropTypes.string.isRequired,
  hotel: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};
export default ShowTabPanelContext;
