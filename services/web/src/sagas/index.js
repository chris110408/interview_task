import { all, fork } from 'redux-saga/effects';
import watchHotelsSaga from './watchers/getHotels'
import watchHotelInfoSaga from './watchers/getHotelInfo'

export default function* root() {
    yield all([
        fork(watchHotelsSaga),fork(watchHotelInfoSaga)
    ]);
}
