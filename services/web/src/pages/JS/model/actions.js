//get customers
export const FETCH_CUSTOMERS = "FETCH_JS_CUSTOMERS";
export const UPDATE_CUSTOMERS = "UPDATE_JS_CUSTOMERS";

export const UPDATE_FILTERED_CUSTOMERS = "UPDATE_FILTERED_JS_CUSTOMERS";

export const fetchCustomersAction = () => {
  return { type: FETCH_CUSTOMERS };
};
export const updateCustomersAction = values => {
  return { type: UPDATE_CUSTOMERS, payload: values };
};

export const updateFilteredCustomersAction = values => {
  return { type: UPDATE_FILTERED_CUSTOMERS, payload: values };
};
