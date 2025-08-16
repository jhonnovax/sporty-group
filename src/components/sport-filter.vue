<template>
    <el-select v-model="sport" clearable placeholder="Filter by sport">
        <el-option v-for="sport in sports" :key="sport" :label="sport" :value="sport" />
    </el-select>
</template>

<script>
export default {
    computed: {
        sports() { 
            return this.$store.getters['leagues/sports']; 
        },
        sport: {
            get() { 
                return this.$store.state.leagues.sport; 
            },
            set(value) { 
                this.$store.commit('leagues/setSport', value); 
            }
        }
    }
}
</script>
  