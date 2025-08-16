import Vue from 'vue';
import Vuex from 'vuex';
import leagues from './modules/leagues';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { leagues }
});
