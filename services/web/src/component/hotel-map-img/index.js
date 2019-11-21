import React, { memo } from "react";
import PropTypes from "prop-types";

import HotelMapImgStyle from "./hotel-map-img-style";
import Image from "../image";
import Spinner from "react-spinkit";
import ErrorImage from "../../images/errorHotel.png";

const HotelMapImage = ({ src }) => {
  return (
    <HotelMapImgStyle>
      <Image
        id='map'
        className='vegas-hotel-info-tab-location-map-img'
        src={src}
        alt='img'
        loader={<Spinner name='circle' color='olive' />}
        errloader={
          <img
            className='vegas-hotel-info-tab-location-map-img'
            src={ErrorImage}
            alt='err'
          />
        }
      />

      {/*<img id="map" className='vegas-hotel-info-tab-location-map-img' src={src} alt='' />*/}
    </HotelMapImgStyle>
  );
};

HotelMapImage.propTypes = {
  src: PropTypes.string.isRequired
};
export default memo(HotelMapImage);
