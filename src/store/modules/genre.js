/* eslint-disable no-shadow,no-underscore-dangle,no-unused-vars */
import axios from 'axios';
import * as actionTypes from '../action-types';
import * as mutationTypes from '../mutation-types';

// initial state
const state = {
  errors: [],
  genres: [],
  genre: {},
};

// getters
const getters = {
  getGenreList: state => state.genres,
  getGenre: state => state.genre,
};

// actions
const actions = {
  async [actionTypes.LOAD_ALL_GENRES](state) {
    try {
      const res = await axios.get('http://localhost:8888/library/genres');
      this.commit(mutationTypes.SET_GENRES, { genres: res.data });
    } catch (err) {
      this.commit(mutationTypes.SET_ERROR, { error: err });
    }
  },
  async [actionTypes.LOAD_GENRE](state, genreId) {
    try {
      const res = await axios.get(`http://localhost:8888/library/genres/${genreId}`);
      this.commit(mutationTypes.SET_GENRE, { genre: res.data });
    } catch (err) {
      console.log(err);
      this.commit(mutationTypes.SET_ERROR, { error: err });
    }
  },
};

const mutations = {
  [mutationTypes.SET_ERROR](state, { error }) {
    state.errors.push(error);
  },
  [mutationTypes.SET_GENRE](state, { genre }) {
    state.genre = genre;
  },
  [mutationTypes.SET_GENRES](state, { genres }) {
    state.genres = genres;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
