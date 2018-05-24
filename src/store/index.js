import Vue from "vue";
import Vuex from "vuex";

import { movieService } from "./../service/MovieService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 1,
    searchTerm: "",
    movies: []
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getSearchTerm(state) {
      return state.searchTerm;
    },
    getMovies(state) {
      return state.movies;
    }
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
    setMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    fetchMovies(store) {
      movieService.getAll().then(response => {
        let movies = response.data.map(movie => {
          movie.duration = Number(movie.duration);
          return movie;
        });
        store.commit("setMovies", movies);
      });
    }
  }
});
