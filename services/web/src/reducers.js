/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import { routerReducer } from "react-router-redux";
import { USER_LOGGED_IN } from "./pages/Login/model/actions";
import { SET_COLLAPSED, SET_ISMOBILE } from "./layouts/model/actions";
/*
 * rootReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// The initial state of the App
const initialState = fromJS({
  userinfo: {
    login: "",
    Email: "na",
    name: "na",
    phone: "na",
    mobile: "na",
    Since: "na",
    Location: "na",
    interests: [],
    orders: []
  }
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return state
        .setIn(["userinfo", "login"], action.payload.login)
        .setIn(["userinfo", "Email"], action.payload.Email)
        .setIn(["userinfo", "name"], action.payload.name)
        .setIn(["userinfo", "phone"], action.payload.phone)
        .setIn(["userinfo", "mobile"], action.payload.mobile)
        .setIn(["userinfo", "Since"], action.payload.Since)
        .setIn(["userinfo", "Location"], action.payload.Location)
        .setIn(["userinfo", "interests"], action.payload.interests)
        .setIn(["userinfo", "orders"], action.payload.orders);

    default:
      return state;
  }
};

const initialLayoutState = fromJS({
  collapsed: false,
  ismobile: false
});

const LayoutReducer = (state = initialLayoutState, action) => {
  switch (action.type) {
    case SET_COLLAPSED:
      return state
        .set("collapsed", action.payload.collapsed)
        .set("ismobile", action.payload.ismobile);
    case SET_ISMOBILE:
      return state.set("collapsed", action.payload.collapsed);
    default:
      return state;
  }
};

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    routerReducer,
    user: userReducer,
    layout: LayoutReducer,
    ...injectedReducers
  });
}
