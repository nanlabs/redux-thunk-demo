import {
  FETCH_PEOPLE_HAS_FINISHED,
} from './peopleActions';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PEOPLE_HAS_FINISHED:
      return action.data;
    default:
      return state;
  }
}

export default peopleReducer;
