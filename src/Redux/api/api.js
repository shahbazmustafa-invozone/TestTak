import {fetchSuccessAction,fetchFailedAction,fetchDetailSuccessAction,fetchDetailFailedAction} from '../../Redux/action/index';

export const moviesList = (filter, pageNumber, value) => {
  let urlGetMovies;
  if (value?.length ? value.length : String > 0) {
    urlGetMovies =
      'https://c734b72f1069.ngrok.io/api/' +
      filter +
      '?value=' +
      value +
      '&page[number]=' +
      pageNumber;
  } else {
    urlGetMovies =
      'https://c734b72f1069.ngrok.io/api/' +
      filter +
      '?page[number]=' +
      pageNumber;
  }

  console.log(urlGetMovies);
  return dispatch => {
    return fetch(urlGetMovies, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        let data = JSON.parse(json);
        let recievedMovies = data.entries;
        dispatch(fetchSuccessAction(recievedMovies)); // our action is called here
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchFailedAction(err))
      });
  };
};

// import {fetchSuccessAction,fetchFailedAction} from '../../Redux/action/index';

export const movieDetails = (id) => {
  let urlGetMovies="https://c734b72f1069.ngrok.io/api/getMovieByID?id="+id;
  console.log(urlGetMovies);
  return dispatch => {
    return fetch(urlGetMovies, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        let data = JSON.parse(json);
        let recievedMovies = data.entries;
        // console.log(recievedMovies)
        dispatch(fetchDetailSuccessAction(recievedMovies)); // our action is called here
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchDetailFailedAction(err))
      });
  };
};
