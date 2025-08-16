<template>
    <section class="league-list container">
        <h1>League List</h1>
    </section>
</template>

<style lang="scss" scoped>
.container { 
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

@media (max-width: 640px){ 
    .toolbar{ grid-template-columns: 1fr; } 
}
</style>