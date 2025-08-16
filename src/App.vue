<template>
    <div class="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from './components/header.vue';

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style lang="scss">
.app { 
    margin: 0;
    padding: 0;
}
</style>
  