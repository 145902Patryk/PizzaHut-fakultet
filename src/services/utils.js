const http = {
  get: (url) => fetch(url).then(resp => resp.json()),
};

export default http;
export const URL = `http://www.omdbapi.com/?apikey=2532d74a`;


