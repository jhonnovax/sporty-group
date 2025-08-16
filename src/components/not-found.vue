<template>
    <div class="not-found">
        <h1>Not Found</h1>
        <div class="actions">
            <router-link to="/">Go to Home</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    margin: 1rem auto;
    padding: 1rem;
    text-align: center;

    h1 {
        font-size: 4rem;
    }

    .actions {
        margin-top: 1rem;
        font-size: 1.8rem;
    }
}
</style>