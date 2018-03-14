/* eslint-disable no-shadow,no-underscore-dangle,no-unused-vars */
import axios from 'axios';
import * as actionTypes from '../action-types';
import * as mutationTypes from '../mutation-types';

// initial state
const state = {
  errors: [],
  records: [],
  record: {},
};

// getters
const getters = {
  getRecordList: state => state.records,
  getRecord: state => state.record,
};

// actions
const actions = {
  async [actionTypes.LOAD_ALL_RECORDS](state) {
    try {
      const res = await axios.get('http://localhost:8888/library/records');
      this.commit(mutationTypes.SET_RECORDS, { records: res.data });
    } catch (err) {
      this.commit(mutationTypes.SET_ERROR, { error: err });
    }
  },
  async [actionTypes.LOAD_RECORD](state, recordId) {
    try {
      const res = await axios.get(`http://localhost:8888/library/records/${recordId}`);
      this.commit(mutationTypes.SET_RECORD, { record: res.data });
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
  [mutationTypes.SET_RECORD](state, { record }) {
    state.record = record;
  },
  [mutationTypes.SET_RECORDS](state, { records }) {
    state.records = records;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
