import { put, takeLatest, call } from 'redux-saga/effects';

import { FETCH_HOTEL_INFO ,updateHotelInfoAction} from '../../actions/hotel';
import {
    requestHotelInfo
} from "../../service/api";

function* fetchHotelInfoSaga() {
    const response = yield call(requestHotelInfo);
    try {
        if (response) {
            yield put(updateHotelInfoAction(response))
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* watchHotelInfoSaga() {
    yield takeLatest(FETCH_HOTEL_INFO, fetchHotelInfoSaga);
}
