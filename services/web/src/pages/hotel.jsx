import React, { useEffect, useState, Suspense } from "react";

import ButtonComponent from "../component/button/button-component";
import { connect } from "react-redux";
import { fetchHotelListAction, fetchHotelInfoAction } from "../actions/hotel";
import HotelList from "../component/hotel-list";
import Spinner from "react-spinkit";
import HotelStyle from "./hotel-style";

const HotelImage = React.lazy(() => import("../component/hotel-img"));
const HotelTab = React.lazy(() => import("../component/hotel-tab"));
const ShowTabPanelContext = React.lazy(() =>
  import("../component/hotel-tab/hotel-tab-panel")
);
const HotelInfoHeader = React.lazy(() =>
  import("../component/hotel-info-header")
);

const customizePrefixCls = "vegas";
const serverLoaction = "http://localhost:8888";

const isEmpty = obj => {
  for (let x in obj) {
    if (obj.hasOwnProperty(x)) return false;
  }
  return true;
};

const Hotel = ({ dispatch, hotel, hotels }) => {
  const [ActiveTab, setActiveTab] = useState("descTab");
  const [isHotelLoading, setIsHotelLoading] = useState(true);
  const [isHotelListLoading, setIsHotelListLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchHotelListAction());
    dispatch(fetchHotelInfoAction());
  }, [dispatch]);

  useEffect(() => {
    if (hotels.length !== 0) {
      setIsHotelListLoading(false);
    }
  }, [hotels]);
  useEffect(() => {
    if (!isEmpty(hotel)) {
      setIsHotelLoading(false);
    }
  }, [hotel]);

  return (
    <HotelStyle>
      <div className='vegas-container'>
        <header className='vegas-header'>
          <ButtonComponent
            iconArrowName='icon-left'
            customizePrefixCls={customizePrefixCls}
            buttonText='See all las vegas hotels'
            isRightIcon={false}
          />
        </header>
        <div className='vegas-content'>
          <div className='vegas-sidebar'>
            <Suspense
              fallback={
                <Spinner
                  name='ball-beat'
                  color='olive'
                  style={{ textAlign: "center" }}
                />
              }
            >
              <HotelImage
                src={hotel.media ? serverLoaction + hotel.media[0].href : "na"}
                isLoading={isHotelLoading}
              />
              <HotelList hotels={hotels} isLoading={isHotelListLoading} />
            </Suspense>
          </div>

          <div className='vegas-hotel-info'>
            <Suspense
              fallback={
                <Spinner
                  name='ball-beat'
                  color='olive'
                  style={{ textAlign: "center" }}
                />
              }
            >
              <HotelInfoHeader
                name={hotel.name ? hotel.name : ""}
                starRating={hotel.starRating ? hotel.starRating : 0}
                location={hotel.location ? hotel.location.areaName : ""}
                phone={hotel.phoneNumber ? hotel.phoneNumber : ""}
                price={hotel.price ? hotel.price : 0}
                changeActive={setActiveTab}
                isLoading={isHotelLoading}
              />
            </Suspense>

            <div className='vegas-hotel-info-tab'>
              <Suspense
                fallback={
                  <Spinner
                    name='ball-beat'
                    color='olive'
                    style={{ textAlign: "center" }}
                  />
                }
              >
                <HotelTab
                  activeTab={ActiveTab}
                  onChange={active => setActiveTab(active)}
                />

                {hotel ? (
                  <ShowTabPanelContext
                    activeTab={ActiveTab}
                    hotel={hotel}
                    src={hotel.media ? serverLoaction + hotel.media[1].href : "na"}
                    isLoading={isHotelLoading}
                  />
                ) : null}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </HotelStyle>
  );
};

function mapStateToProps(state) {
  return {
    hotel: state.hotel.hotel,
    hotels: state.hotel.hotels
  };
}

export default connect(mapStateToProps)(Hotel);
