import styled from "styled-components";
import color from "../styles/configs";

const { mainBackGroundColor, purpleLetterColor, listPriceColor } = color;

const HotelListStyle = styled.div`
  .vegas-hotels-list-container {
    width: 190px;
    background: ${mainBackGroundColor};
    list-style: none;
    margin: 5px 0 10px 5px;
    padding: 10px 0;
  }

  .vegas-hotels-list__item {
    display: flex;
    list-style: none;
    font-size: 10px;
    font-weight: 50;
    line-height: 10px;
    padding: 5px;
  }
  .vegas-hotels-list__item-name {
    width: 13rem;
    word-wrap: break-word;
    margin: 4px 5px 0 5px;
    color: ${purpleLetterColor};
  }
  .vegas-hotels-list__item-price {
    margin: 4px 5px 0 5px;
    color: ${listPriceColor};
  }
`;

export default HotelListStyle;
