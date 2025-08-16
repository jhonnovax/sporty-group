<template>
    <el-input
        placeholder="Search league..."
        v-model="search"
        clearable
        prefix-icon="el-icon-search"
    />
</template>

<script>
export default {
    computed: {
        search: {
            get() { 
                return this.$store.state.leagues.search; 
            },
            set(value) { 
                this.$store.commit('leagues/setSearch', value); 
            }
        }
    }
}
</script>  