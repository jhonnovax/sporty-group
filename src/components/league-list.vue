<template>
    <section class="league-list">

        <header class="toolbar">
            <SearchBar />
            <SportFilter />
        </header>

        <div v-if="loading"><el-skeleton :rows="6" animated /></div>

        <el-empty v-else-if="!loading && filtered.length===0" description="Sin resultados" />

        <el-row v-else :gutter="16">
            <el-col :sm="12" :md="8" :lg="6" v-for="league in filtered" :key="league.idLeague">
                <LeagueCard :league="league" @open="open(league)" />
            </el-col>
        </el-row>
    </section>
</template>

<script>
import LeagueCard from './league-card.vue';
import SearchBar from './search-bar.vue';
import SportFilter from './sport-filter.vue';

export default {
    components: { 
        LeagueCard,
        SearchBar,
        SportFilter
    },

    computed: {
        loading(){ 
            return this.$store.state.leagues.loading; 
        },

        filtered(){ 
            return this.$store.getters['leagues/filtered']; 
        }
    },

    created() { 
        this.$store.dispatch('leagues/loadAll'); 
    },

    methods: {
        open(league){
            this.$router.push({ name: 'league', params: { id: league.idLeague }});
        }
    }
}
</script>

<style lang="scss" scoped>
.league-list { 
    width: min(1200px, 100%); 
    margin: 0 auto; 
    padding: 1rem; 
}

.toolbar { 
    display: grid; 
    grid-template-columns: 1fr 280px; 
    gap: .75rem; 
    margin-bottom: 1rem; 
}

@media (max-width: 640px) { 
    .toolbar { 
        grid-template-columns: 1fr; 
    } 
}
</style>