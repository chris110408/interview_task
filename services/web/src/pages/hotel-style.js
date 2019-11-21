import styled from "styled-components";
import color from "../component/styles/configs";

const {WhiteColor} = color

const HotelStyle = styled.div`
 .vegas-container {
  max-width: 1000px;
  min-width: 800px;
  margin: 40px 40px 40px 40px;
  background: ${WhiteColor};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
  min-height: 50px;
}

.vegas-header {
  height: 25px;
  margin: 5px;
  padding-top: 10px;
}

.vegas-content {
  display: flex;
}

.vegas-sidebar {
  flex: 0;
}
.vegas-hotel-info {
  flex: 1;
  margin: 0 10px;
}
`;

export default HotelStyle;
