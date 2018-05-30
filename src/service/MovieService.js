import axios from "axios";
export default class MovieService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
  }
  getAll(term = "") {
    return axios.get("movies", { params: { term } });
  }
  store(movie) {
    return axios.post("movies", movie);
  }
  getOne(id) {
    return axios.get(`movies/${id}`, id);
  }
}
export const movieService = new MovieService();
