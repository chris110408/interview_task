export const SET_VISIBLE = "SET_VISIBLE";
export const SET_SUBMITTED = "SET_SUBMITTED";
export const SET_CUSTOMER = "SET_CUSTOMER";
export const CREATE_CUSTOMER = "CREATE_CUSTOMER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";

//get customers
export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS";
export const UPDATE_CUSTOMERS = "UPDATE_CUSTOMERS";

export const fetchCustomersAction = () => {
  return { type: FETCH_CUSTOMERS };
};
export const updateCustomersAction = values => {
  return { type: UPDATE_CUSTOMERS, payload: values };
};

export const createCustomerAction = values => {
  return { type: CREATE_CUSTOMER, payload: values };
};

export const updateCustomerAction = values => {
  return { type: UPDATE_CUSTOMER, payload: values };
};

export const deleteCustomerAction = values => {
  return { type: DELETE_CUSTOMER, payload: values };
};

export const setVisibleAction = values => {
  return { type: SET_VISIBLE, payload: values };
};

export const setSubmittedAction = values => {
  return { type: SET_SUBMITTED, payload: values };
};

export const setCustomerAction = values => {
  return { type: SET_CUSTOMER, payload: values };
};
