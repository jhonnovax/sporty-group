<template>
    <section class="league-detail">
        <header class="header">
            <el-button type="primary" class="back-button" @click="$router.back()">
                <i class="el-icon-arrow-left"></i> Go back
            </el-button>
            <h1>{{ title }}</h1>
        </header>
        
        <div v-if="loading"><el-skeleton :rows="4" animated /></div>
        <div v-else-if="badgeUrl"><el-image :src="badgeUrl" fit="contain" style="width:300px"/></div>
        <el-empty v-else description="No badge available" />
    </section>
</template>

<script>
export default {
    data: () => ({ 
        loading: false, 
        badgeUrl: '' 
    }),

    computed: { 
        leagueDetail() {
            const filteredLeagues = this.$store.getters['leagues/filtered']; 
            return filteredLeagues.find(l => l.idLeague === this.$route.params.id);
        },

        title() { 
            return this.leagueDetail?.strLeague || 'Badge';
        }
    },

    created() {
        this.loadLeagueDetail();
    },

    methods: {
        async loadLeagueDetail() {
            const leagueId = this.$route.params.id;
            this.loading = true; 
            this.badgeUrl = '';
            const data = await this.$store.dispatch('leagues/loadBadge', leagueId);
            // if API returns seasons, we take the first one that has a badge
            const seasons = data?.seasons || data || [];
            const firstSeasonWithBadge = Array.isArray(seasons) ? seasons.find(s => s.strBadge) : null;
            this.badgeUrl = firstSeasonWithBadge?.strBadge || '';
            this.loading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.league-detail {
    background-color: #fff;
    width: min(600px, 100%); 
    margin: 0 auto; 
    padding: 24px;
    text-align: center; 

    .header {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: 1rem;

        h1 {
            font-size: 3rem;
            font-weight: 600;
            margin: 0;
            margin-left: 1rem;
        }
    }
}
</style>