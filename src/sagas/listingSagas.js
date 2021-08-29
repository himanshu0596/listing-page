import { put, takeEvery, all } from "redux-saga/effects";
import actionTypes from "../actions/constants";

export function* handleListingReq({ payload }) {
  yield put({
    type: actionTypes.LISTING_ACTION_RES,
    list: payload.list,
  });
}

/*
    Not used let use root
*/
export function* watchDemoActions() {
  yield takeEvery(actionTypes.LISTING_ACTION_REQ, handleListingReq);
}

export default function* root() {
  yield all([takeEvery(actionTypes.LISTING_ACTION_REQ, handleListingReq)]);
}
