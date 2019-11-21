import React, { memo } from "react";
import PropTypes from "prop-types";
import HotelImgStyle from "./hotel-img-style";
import Image from "../image";
import Spinner from "react-spinkit";
import ErrorImage from "../../images/errorHotel.png";

const HotelImage = ({ src, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Spinner
          name='ball-beat'
          color='olive'
          style={{ textAlign: "center" }}
        />
      ) : (
        <HotelImgStyle>
          <Image
            className='vegas-hotel-img'
            src={src}
            alt='img'
            loader={
              <Spinner
                name='ball-beat'
                color='olive'
                style={{ textAlign: "center" }}
              />
            }
            errloader={
              <img className='vegas-hotel-img' src={ErrorImage} alt='err' />
            }
          />
        </HotelImgStyle>
      )}
    </>
  );
};

HotelImage.propTypes = {
  src: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default memo(HotelImage);
