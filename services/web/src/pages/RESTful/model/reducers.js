// The initial state of the App
import {
  SET_VISIBLE,
  SET_SUBMITTED,
  SET_CUSTOMER,
  UPDATE_CUSTOMERS
} from "./actions";
import { fromJS } from "immutable";
import injectReducer from "../../../utils/injectReducer";

export const initialRestFulState = fromJS({
  visible: false,
  success: false,
  customer: {},
  customers: []
});

export const RestFulReducer = (state = initialRestFulState, action) => {
  switch (action.type) {
    case SET_VISIBLE:
      return state.set("visible", action.payload);
    case SET_SUBMITTED:
      return state.set("success", action.payload);
    case SET_CUSTOMER:
      return state.set("customer", action.payload);
    case UPDATE_CUSTOMERS:
      return state.set("customers", action.payload);
    default:
      return state;
  }
};

export const withRESTfulReducer = injectReducer({
  key: "restful",
  reducer: RestFulReducer
});
