<template>
    <header class="header">
        <img src="https://sportygroup.com/images/logo.svg" alt="Logo" class="logo" title="Sporty Group" />
        <h1 class="sr-only">Sporty Group</h1>
    </header>
</template>

<script>

</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .logo {
        width: 200px;
    }

    h1 {
        visibility: hidden;
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
    }
}
</style>