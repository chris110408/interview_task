import React from "react";

import PropTypes from "prop-types";
import { DetailItem } from "./DetaiItem";

import { DetailDiv } from "./styles";

const DetailContent = ({ Email, phone, mobile, Since, Location }) => {
  return (
    <DetailDiv>
      <DetailItem promptText="mail" IconType="mail" DetailInfo={Email} />
      <DetailItem promptText="phone" IconType="phone" DetailInfo={phone} />
      <DetailItem promptText="mobile" IconType="mobile" DetailInfo={mobile} />

      <DetailItem promptText="Since" IconType="calendar" DetailInfo={Since} />
      <DetailItem
        promptText="Location"
        IconType="compass"
        DetailInfo={Location}
      />
    </DetailDiv>
  );
};

DetailContent.propTypes = {
  Email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  Since: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired
};

export { DetailContent };
