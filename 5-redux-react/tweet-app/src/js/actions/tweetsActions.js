import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});
    axios.get("http://localhost:18080")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      });
  };
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text
    }
  };
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text
    }
  };
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id};
}
