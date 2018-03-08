const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_HAS_STARTED':
      return true;
    case 'FETCH_PEOPLE_HAS_FINISHED':
      return false;
    default:
      return state;
  }
}

export default loadingReducer;