import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
/* eslint-disable */

const renderImg = (
  isLoadingState,
  isLoadedState,
  isFailedState,
  rest,
  imageObjState,
  loader,
  errloader
) => {
  if (isLoadedState) {
    const imgProps = {
      ...{ src: imageObjState.src },
      ...rest
    };
    return <img {...imgProps} />;
  }

  if (!isFailedState && isLoadingState) {
    return loader ? loader : <div>...loading</div>;
  }

  if (isFailedState) {
    return errloader ? errloader : <div>fail</div>;
  }
};

const ImageComponent = props => {
  const { src, loader, errloader, ...rest } = props;
  const [imageObjState, setImageObj] = useState(null);
  const [isLoadingState, setIsLoadingState] = useState(typeof src === "string");
  const [isLoadedState, setIsLoadedState] = useState(false);
  const [isFailedState, setIsFailedState] = useState(false);
  useEffect(() => {
    if (typeof src === "string") {
      fetchImage(src);
    }
    return () => {
      // Clean up the subscription
      clearEvents();
    };
  }, [src]);

  const onLoad = () => {
    setIsLoadingState(false);
    setIsLoadedState(true);
    setIsFailedState(false);
  };

  const onError = () => {
    clearEvents();
    setIsLoadingState(false);
    setIsFailedState(true);
  };

  const fetchImage = src => {
    const imageObj = new Image();
    imageObj.addEventListener("load", onLoad);
    imageObj.addEventListener("error", onError);
    imageObj.src = src;
    setImageObj(imageObj);
  };
  const clearEvents = () => {
    if (imageObjState) {
      imageObjState.removeEventListener("load", onLoad);
      imageObjState.removeEventListener("error", onError);
    }
  };

  return (
    <>
      {renderImg(
        isLoadingState,
        isLoadedState,
        isFailedState,
        rest,
        imageObjState,
        loader,
        errloader
      )}
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loader: PropTypes.node,
  errloader: PropTypes.node
};

export default memo(ImageComponent);
