<template>
    <el-card class="league-card" shadow="hover" @click.native="openLeague">
        <div class="league-card-title">{{ league.strLeague }}</div>
        <div class="league-card-meta">
            <span>{{ league.strSport }}</span>
            <span v-if="league.strLeagueAlternate" :title="league.strLeagueAlternate"> • {{ league.strLeagueAlternate }}</span>
        </div>
    </el-card>
</template>

<script>
export default { 
    props: { 
        league: { type: Object, required: true } 
    },

    methods: {
        openLeague() {
            this.$emit('open', this.league);
        }
    }
}
</script>

<style lang="scss" scoped>
.league-card { 
    cursor: pointer; 

    &-title,
    &-meta {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &-title { 
        font-size: 1.6rem;
        font-weight:600;
    }
    &-meta{ 
        font-size: 1.2rem;
        opacity:.75;
    }
}
</style>
  