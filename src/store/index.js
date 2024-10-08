import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import status from './modules/status';
import keymap from './modules/keymap';
import keycodes from './modules/keycodes';
import tester from './modules/tester';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    status,
    keymap,
    keycodes,
    tester
  },
  state: {},
  mutations: {},
  actions: {}
  // strict: process.env.NODE_ENV !== 'production'
});
