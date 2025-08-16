<template>
    <section class="league-detail">
        <header class="header">
            <el-button type="primary" class="back-button" @click="$router.back()">
                <i class="el-icon-arrow-left"></i> Go back
            </el-button>
            <h1>{{ leagueName }}</h1>
        </header>
        
        <div v-if="loading"><el-skeleton :rows="4" animated /></div>
        <div v-else-if="leagueBadge"><el-image :src="leagueBadge" fit="contain" class="badge-image"/></div>
        <el-empty v-else description="No badge available" />
    </section>
</template>

<script>
export default {
    data: () => ({ 
        loading: false, 
    }),

    computed: { 
        leagueId() {
            return this.$route.params.id;
        },

        leagueDetail() {
            const filteredLeagues = this.$store.getters['leagues/filtered']; 

            return filteredLeagues.find(league => league.idLeague === this.leagueId);
        },

        leagueName() { 
            return this.leagueDetail?.strLeague || 'Badge';
        },

        leagueBadge() {
            const badgeByLeagueId = this.$store.state.leagues.badgeByLeagueId;
            const seasons = badgeByLeagueId[this.leagueId]?.seasons || [];
            const firstSeasonWithBadge = Array.isArray(seasons) ? seasons.find(s => s.strBadge) : null;

            return firstSeasonWithBadge?.strBadge || '';
        }
    },

    created() {
        this.loadLeagueDetail();
    },

    methods: {
        async loadLeagueDetail() {
            this.loading = true; 
            await this.$store.dispatch('leagues/loadBadge', this.leagueId);
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
            font-size: 2rem;
            font-weight: 600;
            margin: 0;
            margin-left: 1rem;
        }
    }

    .badge-image { 
        width: 300px;
        max-width: 100%;
    }

    @media (width > 640px) { 
        .header h1 { 
            font-size: 3rem;
        }
    }
}
</style>