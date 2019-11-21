import styled from "styled-components";
import baseCss from "../styles/configs";

const { StarColor, priceHeaderColor, HeaderFontColor } = baseCss;

const HotelInfoHeaderStyle = styled.div`
  .vegas-hotel-info_header {
    display: flex;
    justify-content: space-between;
    color: ${HeaderFontColor};
    margin-bottom: 8px;
  }

  .vegas-hotel-info_header-overall {
  }

  .vegas-hotel-info_header-overall-top {
  }

  span.vegas-hotel-info_header-overall-top-name {
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .vegas-hotel-info_header-overall-top_star-group {
    display: inline-block;
    margin: 10px;
    position: relative;
    top: 15px;
    color: ${StarColor};
  }
  .vegas-hotel-info_header-overall-top_star {
    margin: 0 1px;
  }

  .vegas-hotel-info_header-price {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 15px 0 5px;
    top: 10px;
  }

  .vegas-hotel-info_header-price-value {
    font-size: 50px;
    line-height: 40px;
    font-weight: 400;
    color: ${priceHeaderColor};
  }
  .vegas-hotel-info_header-price-desc {
    margin: 5px 0 0 20px;
    font-size: 12px;
    font-weight: 200;
    text-transform: uppercase;
  }

  .vegas-hotel-info_header-overall-top {
    display: flex;
  }

  .vegas-hotel-info_header-overall-bottom {
    margin: 10px 0 5px -8px;
    display: flex;
    align-items: center;
    font-weight: 200;
  }

  .vegas-hotel-info_header-overall-bottom-item {
    margin: 0 5px;
    display: inline-block;
  }

  .vegas-hotel-info_header-overall-bottom-item-icon {
    margin: 0 3px;
    position: relative;
    top: 2px;
  }
  .vegas-hotel-info_header-overall-bottom-button {
    cursor: pointer;
    text-decoration: none;
    color: ${HeaderFontColor};
  }
`;

export default HotelInfoHeaderStyle;
