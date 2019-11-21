export const FETCH_HOTELS = "FETCH_HOTELS";
export const FETCH_HOTEL_INFO = "FETCH_HOTEL_INFO";
export const UPDATE_HOTELS = "UPDATE_HOTELS";
export const UPDATE_HOTEL_INFO = "UPDATE_HOTEL_INFO";


export const fetchHotelListAction = () => {
    return { type: FETCH_HOTELS };
};

export const fetchHotelInfoAction = () => {
    return { type: FETCH_HOTEL_INFO };
};


export const updateHotelListAction = (values) => {
    return { type: UPDATE_HOTELS,payload: values };
};

export const updateHotelInfoAction = (values) => {
    return { type: UPDATE_HOTEL_INFO,payload: values };
};

