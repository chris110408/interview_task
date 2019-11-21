import styled from "styled-components";

const HotelTabPanelStyle = styled.div`
  .vegas-hotel-info-tab-panel {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    color: #6d6d7d;
    padding: 20px;
  }

  .vegas-hotel-info-tab-panel-detail {
    font-weight: 200;
    line-height: 20px;
    font-weight: 300;
    font-size: 15px;
  }

  .vegas-hotel-info-tab-panel-detail-lable {
    font-weight: 600;
  }

  .vegas-hotel-info-tab-panel-desc {
    line-height: 20px;
    font-weight: 200;
    font-size: 15px;
  }

  .vegas-hotel-info-tab-panel-hidden {
    overflow: hidden;
    max-height: 200px;
  }

  .vegas-hotel-info-tab-location-address {
    color: black;
    font-weight: 300;
  }

  .vegas-hotel-info-tab-location-address.icon-mark {
    margin-right: 5px;
  }
  .vegas-hotel-info-tab-panel-button {
    margin: 15px;
  }
  .vegas-hotel-info-tab-panel-detail-group {
    margin: 10px 0;
  }
`;

export default HotelTabPanelStyle;
