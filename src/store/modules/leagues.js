import { fetchAllLeagues, fetchBadgeByLeagueId } from '@/services/leagues-service';

const state = () => ({
  items: [],
  loading: false,
  error: null,
  search: '',
  sport: '',
  badgeByLeagueId: {}
});

const getters = {
  sports: s => [...new Set(s.items.map(l => l.strSport))].sort(),
  filtered: s => s.items.filter(l => {
    const byName = l.strLeague.toLowerCase().includes(s.search.toLowerCase());
    const bySport = !s.sport || l.strSport === s.sport;
    return byName && bySport;
  })
};

const mutations = {
  setLoading: (s, v) => (s.loading = v),
  setError: (s, e) => (s.error = e),
  setItems: (s, arr) => (s.items = arr || []),
  setSearch: (s, q) => (s.search = q),
  setSport: (s, sp) => (s.sport = sp),
  setBadge: (s, { id, data }) => (s.badgeByLeagueId = { ...s.badgeByLeagueId, [id]: data })
};

const actions = {
  async loadAll({ commit }) {
    commit('setLoading', true);
    commit('setError', null);
    try {
      const { leagues } = await fetchAllLeagues();
      commit('setItems', leagues || []);
    } catch (e) {
      commit('setError', `Error loading leagues ${e.message}`);
    } finally {
      commit('setLoading', false);
    }
  },
  async loadBadge({ commit, state }, id) {
    if (state.badgeByLeagueId[id]) return state.badgeByLeagueId[id];
    const data = await fetchBadgeByLeagueId(id);
    commit('setBadge', { id, data });
    return data;
  }
};

export default { namespaced: true, state, getters, mutations, actions };
