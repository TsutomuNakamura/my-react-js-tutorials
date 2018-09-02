export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      id: 0,
      name: "Tsutomu",
      age: 35
    }
  };
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name
  };
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age
  };
}
