import Vue from 'vue';
import Router from 'vue-router';
import LeagueList from '@/components/league-list.vue';
import LeagueDetail from '@/components/league-detail.vue';
import NotFound from '@/components/not-found.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: LeagueList },
        { path: '/league/:id', name: 'league', component: LeagueDetail },
        { path: '*', name: 'not-found', component: NotFound }
    ]
});
