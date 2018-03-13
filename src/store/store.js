import Vue from 'vue';
import Vuex from 'vuex';

import artist from './modules/artist';
import genre from './modules/genre';
import record from './modules/record';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    artist,
    genre,
    record,
  },
});
