import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { notification } from "antd";

import {
  FETCH_CUSTOMERS,
  updateCustomersAction,
  updateFilteredCustomersAction
} from "./actions";
import { requestMockCustomers } from "../../../service/api";

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
  const response = yield call(requestMockCustomers);
  try {
    if (response) {
      yield put(updateCustomersAction(response));
      yield put(updateFilteredCustomersAction(response));
    }
  } catch (e) {
    yield call(openNotificationWithIcon, "error");
  }

  // else push to 404
}

export function* fetchCustomersWatcher() {
  yield takeLatest(FETCH_CUSTOMERS, fetchCustomers);
}

/**
 * Root saga
 */

export default function* root() {
  yield all([fork(fetchCustomersWatcher)]);
}

export const withSaga = injectSaga({
  key: "search",
  saga: root,
  mode: DAEMON
});
