import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects'
import * as tweetsActions from '../actions/tweetsActions'
import * as userActions from '../actions/userActions'
import axios from "axios";

const fetchTweetsApi = () => axios.get('http://localhost:18080');

function* watchFetchTweets() {
  yield takeEvery("FETCH_TWEETS", fetchTweets);
}

function* fetchTweets() {
  yield put({type: "FETCH_USERS_START"});

  try {
    const posts = yield call(fetchTweetsApi)
    yield put({type: "FETCH_TWEETS_FULFILLED", payload: posts.data});
  } catch(e) {
    yield put({type: "FETCH_TWEETS_REJECTED", payload: e});
  }
}

export default function* rootSaga() {
  yield fork(watchFetchTweets);
}

