import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from '../actions/index';
import * as api from "../api/index";

function* getUsers() {
  try {
    const result = yield call(api.getData);
    if (result.data.length > 0) {
      yield put(actions.getUsersSuccess(result.data));
    }
    else {
      return getUsers();
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
