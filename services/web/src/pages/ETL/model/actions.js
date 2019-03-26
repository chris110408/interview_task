export const UPDATE_CUSTOMERS = "UPDATE_ETL_CUSTOMERS";

export const UPDATE_COLUMNS = "UPDATE_ETL_COLUMNS";

export const updateCustomersAction = values => {
  return { type: UPDATE_CUSTOMERS, payload: values };
};

export const updateColumnsAction = values => {
  return { type: UPDATE_COLUMNS, payload: values };
};
