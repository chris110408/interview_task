import styled from "styled-components";
import color from "../styles/configs";

const {WhiteColor,buttonBackGround,pinkColor} = color

const HotelTabStyle = styled.div`
  .vegas-hotel-info-tab-group {
    display: flex;
    text-transform: uppercase;
    height: 48px;
    text-align: center;
  }

  .vegas-hotel-info-tab_button {
    font-size: 20px;
    padding: 10px;
    background: ${buttonBackGround};
    color: ${pinkColor};
    cursor: pointer;
    flex: 1;
  }
  .vegas-hotel-info-tab_button:hover,
  .vegas-hotel-info-tab_button--active {
    color: ${WhiteColor};
    border-bottom: 4px solid #5f026f;
  }
`;

export default HotelTabStyle;
