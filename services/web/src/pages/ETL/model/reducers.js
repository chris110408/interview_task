// The initial state of the App
import { UPDATE_CUSTOMERS, UPDATE_COLUMNS } from "./actions";
import { fromJS } from "immutable";
import injectReducer from "../../../utils/injectReducer";

export const initialSearchState = fromJS({
  customers: [],
  columns_item: []
});

export const etlReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case UPDATE_CUSTOMERS:
      return state.set("customers", action.payload);
    case UPDATE_COLUMNS:
      return state.set("columns_item", action.payload);
    default:
      return state;
  }
};

export const withETLReducer = injectReducer({
  key: "etl",
  reducer: etlReducer
});
