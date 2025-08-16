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
    sports: state => [...new Set(state.items.map(league => league.strSport))].sort(),
    filtered: state => state.items.filter(league => {
        const byName = league.strLeague.toLowerCase().includes(state.search.toLowerCase());
        const bySport = !state.sport || league.strSport === state.sport;
        return byName && bySport;
    })
};

const mutations = {
    setLoading: (state, payload) => (state.loading = payload),
    setError: (state, payload) => (state.error = payload),
    setItems: (state, payload) => (state.items = payload || []),
    setSearch: (state, payload) => (state.search = payload),
    setSport: (state, payload) => (state.sport = payload),
    setBadge: (state, payload) => (state.badgeByLeagueId = { ...state.badgeByLeagueId, [payload.id]: payload.data })
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
        if (state.badgeByLeagueId[id]) {
            return state.badgeByLeagueId[id];
        }

        const data = await fetchBadgeByLeagueId(id);
        commit('setBadge', { id, data });

        return data;
    },

    setSearch({ commit }, payload) {
        commit('setSearch', payload);
    },

    setSport({ commit }, payload) {
        commit('setSport', payload);
    }
};

export default { namespaced: true, state, getters, mutations, actions };
