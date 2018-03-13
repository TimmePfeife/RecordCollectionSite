/* eslint-disable no-shadow,no-underscore-dangle,no-unused-vars */
import axios from 'axios';

// initial state
const state = {
  records: [],
  record: {},
  errors: [],
};

// getters
const getters = {
  getRecordList: state => state.records,
  getRecord: state => state.record,
};

// actions
const actions = {
  async LOAD_RECORDS(state) {
    try {
      const res = await axios.get('http://localhost:8888/library/records');
      this.commit('SET_RECORDS', { records: res.data });
    } catch (err) {
      this.commit('SET_ERROR', { error: err });
    }
  },
  async LOAD_RECORD(state, id) {
    try {
      const res = await axios.get(`http://localhost:8888/library/records/${id}`);
      this.commit('SET_RECORD', { record: res.data });
    } catch (err) {
      console.log(err);
      this.commit('SET_ERROR', { error: err });
    }
  },
};

const mutations = {
  SET_ERROR(state, { error }) {
    state.errors.push(error);
  },
  SET_RECORD(state, { record }) {
    state.record = record;
  },
  SET_RECORDS(state, { records }) {
    state.records = records;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
