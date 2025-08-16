<template>
    <section class="league-list container">
        <div v-if="loading"><el-skeleton :rows="6" animated /></div>

        <el-empty v-else-if="!loading && filtered.length===0" description="Sin resultados" />

        <el-row v-else :gutter="16">
            <el-col :sm="12" :md="8" :lg="6" v-for="league in filtered" :key="league.idLeague">
                {{ league.strLeague }}
            </el-col>
        </el-row>
    </section>
</template>

<script>
export default {
    computed: {
      loading(){ return this.$store.state.leagues.loading; },
      filtered(){ return this.$store.getters['leagues/filtered']; }
    },

    created() { 
        this.$store.dispatch('leagues/loadAll'); 
    }
}
</script>

<style lang="scss" scoped>
.container { 
    width: min(1200px, 100%); 
    margin: 0 auto; 
    padding: 1rem; 
}
</style>