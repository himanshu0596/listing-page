import { all, fork } from "redux-saga/effects";

import list from "./listingSagas";

export default function* root() {
  yield all([fork(list)]);
}
