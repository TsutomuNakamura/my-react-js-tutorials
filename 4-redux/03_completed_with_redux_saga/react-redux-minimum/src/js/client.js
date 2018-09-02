import { put, call, fork, takeEvery, all } from 'redux-saga/effects'
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const fetchUser = () => axios.get('http://localhost:18080');

function* watchFetchUser() {
  yield takeEvery("FETCH_USERS", helloSaga);
}

function* rootSaga() {
  yield fork(watchFetchUser);
  //yield all([watchFetchUser(), ...]);
}

function* helloSaga() {
  yield put({type: "FETCH_USERS_START"});

  try {
    const response = yield call(fetchUser);
    yield put({type: "RECEIVE_USERS", payload: response});
  } catch (e) {
    yield put({type: "FETCH_USERS_ERROR", payload: e});
  }
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return {...state, fetching: true};
    case "FETCH_USERS_ERROR":
      return {...state, fetching :false, error: action.payload};
    case "RECEIVE_USERS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
  }
  return state;
};

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, createLogger());
const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);

store.dispatch({type: "FETCH_USERS"});
