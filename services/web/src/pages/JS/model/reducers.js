// The initial state of the App
import { UPDATE_CUSTOMERS, UPDATE_FILTERED_CUSTOMERS } from "./actions";
import { fromJS } from "immutable";
import injectReducer from "../../../utils/injectReducer";

export const initialSearchState = fromJS({
  customers: [],
  filtered_customers: []
});

export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMERS:
      return state.set("customers", action.payload);
    case UPDATE_FILTERED_CUSTOMERS:
      return state.set("filtered_customers", action.payload);
    default:
      return state;
  }
};

export const withSearchReducer = injectReducer({
  key: "search",
  reducer: searchReducer
});
