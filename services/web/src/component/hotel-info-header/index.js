import React, { memo } from "react";
import PropTypes from "prop-types";
import HotelInfoHeaderStyle from "./hotel-info-header-style";
import LocationButton from "./location-button";
import Spinner from "react-spinkit";

const HotelInfoHeader = ({
  name,
  location,
  phone,
  price,
  starRating,
  changeActive,
  isLoading
}) => {
  const renderStar = star => {
    const iconArray = [];
    for (var index = 0; index < Math.round(star); index++) {
      iconArray.push(
        <i
          className='icon-star vegas-hotel-info_header-overall-top_star'
          key={index}
        />
      );
    }
    return iconArray;
  };
  return (
    <>
      {isLoading ? (
        <Spinner
          name='ball-beat'
          color='olive'
          style={{ textAlign: "center" }}
        />
      ) : (
        <HotelInfoHeaderStyle>
          <div className='vegas-hotel-info_header'>
            <div className='vegas-hotel-info_header-overall'>
              <div className='vegas-hotel-info_header-overall-top'>
                <span className='vegas-hotel-info_header-overall-top-name'>
                  {name}
                </span>
                <div className='vegas-hotel-info_header-overall-top_star-group'>
                  {starRating ? renderStar(starRating) : null}
                </div>
              </div>
              <div className='vegas-hotel-info_header-overall-bottom'>
                <div className='vegas-hotel-info_header-overall-bottom-item'>
                  <LocationButton
                    location={location}
                    changeActive={changeActive}
                  />
                </div>
                <div className='vegas-hotel-info_header-overall-bottom-item'>
                  <i className='icon-phone vegas-hotel-info_header-overall-bottom-item-icon' />
                  <span>{phone}</span>
                </div>
                <div className='vegas-hotel-info_header-overall-bottom-item'>
                  <i className='icon-like vegas-hotel-info_header-overall-bottom-item-icon' />
                  <span>Best Price Guarantee</span>
                </div>
              </div>
            </div>
            <div className='vegas-hotel-info_header-price'>
              <div className='vegas-hotel-info_header-price-value'>
                ${price}
              </div>
              <div className='vegas-hotel-info_header-price-desc'>
                Hotel ROOMS FROM
              </div>
            </div>
          </div>
        </HotelInfoHeaderStyle>
      )}
    </>
  );
};

HotelInfoHeader.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  changeActive: PropTypes.func.isRequired,
  phone: PropTypes.any,
  price: PropTypes.number,
  starRating: PropTypes.number,
  isLoading: PropTypes.bool.isRequired
};

HotelInfoHeader.defaultProps = {
  starRating: 0,
  price: 9999
};

export default memo(HotelInfoHeader);
