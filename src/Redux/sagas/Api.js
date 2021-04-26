const urlGetMovies = 'https://6fd31d814425.ngrok.io/api/getMovies?page[number]=1';

function* getMoviesFromApi() {
  const response = yield fetch(urlGetMovies, {
    method: 'GET',
  });
  console.log("response",response.status)
  const movies = yield response.status === '200'
    ? JSON.parse(response._bodyInit)
    : [];
  return movies;
}
export const Api = {
  getMoviesFromApi,
};
