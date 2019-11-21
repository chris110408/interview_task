import { put, takeLatest, call } from 'redux-saga/effects';

import {FETCH_HOTELS, updateHotelListAction} from '../../actions/hotel';
import {
    requestHotelsList
} from "../../service/api";


function* fetchHotelsListSaga() {
    const response = yield call(requestHotelsList);
    try {
        if (response.list) {
            yield put(updateHotelListAction(response.list))
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* watchHotelsSaga() {
    yield takeLatest(FETCH_HOTELS, fetchHotelsListSaga);
}
