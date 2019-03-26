import { call, put, takeLatest, all, fork, select } from "redux-saga/effects";
import { notification } from "antd";

import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  updateCustomersAction,
  setVisibleAction
} from "./actions";
import {
  requestCustomers,
  addCustomer,
  updateCustomer,
  removeCustomer
} from "../../../service/api";

import injectSaga from "../../../utils/injectSaga";

import { DAEMON } from "../../../utils/constants";

const messageMap = {
  error: {
    message: "Your submit has been failed",
    description:
      "if it is not a common error, please contact admin - Chris Chen SOS",
    duration: 8
  },
  success: {
    message: "Success Saved",
    description: "The Customer has been saved",
    duration: 8
  },

  info: {
    message: "Success Delete",
    description: "The Customer has been deleted",
    duration: 8
  }
};

const openNotificationWithIcon = (type, option) => {
  const message = messageMap[type];

  if (option) {
    notification[type](option);
  } else {
    notification[type](message);
  }
};
// eslint-disable-next-line
export function* fetchCustomers(action) {
  const response = yield call(requestCustomers);
  try {
    if (response) {
      yield put(updateCustomersAction(response));
    }
  } catch (e) {
    yield call(openNotificationWithIcon, "error");
  }

  // else push to 404
}

export function* editCustomer(action) {
  const customer = action.payload;
  let response;
  try {
    //call api to update the customer
    response = yield call(updateCustomer, customer);
    if (response.errors) {
      //if error pop up error notice
      yield call(openNotificationWithIcon, "error", response.errors);
    } else {
      // if success edit the current customer state and pop up success notification
      const tempList = yield select(state =>
        state.get("restful").get("customers")
      );
      const customers = tempList.map(item => {
        if (item._id === customer.id) {
          return { customer, ...item };
        }
        return item;
      });
      yield call(openNotificationWithIcon, "success");
      yield put(updateCustomersAction(customers));
      yield put(setVisibleAction(false));
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    yield call(openNotificationWithIcon, "error");
  }
}

export function* createCustomer(action) {
  const customer = action.payload;
  let response;
  try {
    //call api to update the customer
    response = yield call(addCustomer, customer);

    if (response.errors) {
      //if error pop up error notice
      yield call(openNotificationWithIcon, "error", response.errors);
    } else {
      // if success edit the current customer state and pop up success notification
      // eslint-disable-next-line
      const { __v, ...resCustomer } = response;

      const tempList = yield select(state =>
        state.get("restful").get("customers")
      );
      const customers = tempList.concat(resCustomer);
      yield call(openNotificationWithIcon, "success");
      yield put(updateCustomersAction(customers));
      yield put(setVisibleAction(false));
    }
  } catch (e) {
    //catch all other errors
    yield call(openNotificationWithIcon, "error");
  }
}

export function* deleteCustomer(action) {
  const id = action.payload;
  let response;
  try {
    //call api to update the customer
    response = yield call(removeCustomer, id);

    if (response.errors) {
      //if error pop up error notice
      yield call(openNotificationWithIcon, "error", response.errors);
    } else {
      // if success edit the current customer state and pop up success notification
      const tempList = yield select(state =>
        state.get("restful").get("customers")
      );
      const customers = tempList.filter(item => item._id != id);
      yield call(openNotificationWithIcon, "info");
      yield put(updateCustomersAction(customers));
      yield put(setVisibleAction(false));
    }
  } catch (e) {
    //catch all other errors
    yield call(openNotificationWithIcon, "error");
  }
}

export function* fetchCustomersWatcher() {
  yield takeLatest(FETCH_CUSTOMERS, fetchCustomers);
}

export function* createCustomerWatcher() {
  yield takeLatest(CREATE_CUSTOMER, createCustomer);
}

export function* editCustomerWatcher() {
  yield takeLatest(UPDATE_CUSTOMER, editCustomer);
}

export function* deleteCustomerWatcher() {
  yield takeLatest(DELETE_CUSTOMER, deleteCustomer);
}

/**
 * Root saga
 */

export default function* root() {
  yield all([
    fork(fetchCustomersWatcher),
    fork(createCustomerWatcher),
    fork(editCustomerWatcher),
    fork(deleteCustomerWatcher)
  ]);
}

export const withSaga = injectSaga({
  key: "restful",
  saga: root,
  mode: DAEMON
});
