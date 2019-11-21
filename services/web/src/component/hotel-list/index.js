import React, { memo } from "react";
import PropTypes from "prop-types";
import HotelListElement from "./hotel-list-style";
import Spinner from "react-spinkit";

const HotelList = ({ hotels, isLoading }) => {

  // use hash key to get uniq value
  const getUniqAndSortedHotels = hotelslist => {
    return hotelslist
      ? hotelslist.reduce(
          (obj, c) => {
            if (obj.hashKeys.indexOf(c.code) < 0) {
              obj.hashkeys = obj.hashKeys.push(c.code);
              obj.newArray = obj.newArray.concat(c);
            }

            return obj;
          },
          { hashKeys: [], newArray: [] }
        ).newArray.sort((a, b) => {
            return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
        })
      : [];
  };

  const renderList = hotels => {
    return hotels
      ? getUniqAndSortedHotels(hotels)
          .map(i => {
            return (
              <li className='vegas-hotels-list__item' key={i.code}>
                <div className='vegas-hotels-list__item-name'>{i.name}</div>
                <div className='vegas-hotels-list__item-price'>
                  ${i.price.toFixed(2)}
                </div>
              </li>
            );
          })
      : null;
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
        <HotelListElement>
          <ol className='vegas-hotels-list-container'>{renderList(hotels)}</ol>
        </HotelListElement>
      )}
    </>
  );
};

HotelList.propTypes = {
  hotels: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default memo(HotelList);
