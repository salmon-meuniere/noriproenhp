<template>
    <div class="body-notfound">
        <Gnav />
        <main class="main">
            <Hero />
        </main>
        <Gfoot :atalents="allTalentData" />
    </div>
</template>
<script>
export default {
    head: {
        title: "Page Not Found"
    },
    async asyncData({$content, params}) {
        const allTalentData = await $content("talents")
            .only(['slug', 'name', 'gen'])
            .fetch();
        return {
            allTalentData
        };
    },

}
</script>