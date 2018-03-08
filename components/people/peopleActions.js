export const FETCH_PEOPLE_HAS_STARTED = 'FETCH_PEOPLE_HAS_STARTED';
export const FETCH_PEOPLE_HAS_FINISHED = 'FETCH_PEOPLE_HAS_FINISHED';

const listOfPeople = [
  {
    id: 1,
    name: 'Peter',
    age: 21,
  }, {
    id: 2,
    name: 'John',
    age: 22,
  }, {
    id: 3,
    name: 'Jeremy',
    age: 19,
  }, {
    id: 4,
    name: 'Matt',
    age: 30,
  }, {
    id: 5,
    name: 'Chris',
    age: 72,
  },
];

// Mock the API call
const delayPromise = (time) => (data) => new Promise((resolve) => {
  setTimeout(() => resolve(data), time)
});

const callToApi = new Promise(resolve => resolve(listOfPeople));

const fetchPeopleHasStarted = () => ({
  type: FETCH_PEOPLE_HAS_STARTED,
})

const fetchPeopleHasFinished = (data) => ({
  type: FETCH_PEOPLE_HAS_FINISHED,
  data
});

export const fetchPeople = () => {
  return (dispatch) => {
    // We are going to use this to show a loader
    dispatch(fetchPeopleHasStarted());
    // Call the API, it returns a promise
    callToApi
      .then(delayPromise(3000))
      .then(data => {
        // Only dispatch this action when the API call returns
        dispatch(fetchPeopleHasFinished(data))
      });
  }
}