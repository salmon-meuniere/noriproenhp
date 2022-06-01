<template>
    <section class="section mv" id="mv" data-section="mv">
        <div class="section__wrap">
            <header class="sectionHeader">
                <h2 class="sectionHeader__main">MV</h2>
                <p class="sectionHeader__sub" lang="en">Music Videos</p>
            </header>
            <div class="mv__wrap"><iframe class="iframe" :src="'https://www.youtube.com/embed/' + mv[0] + '?controls=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="more"><nuxt-link class="button-secondary" to="/mv">See more</nuxt-link></div>
        </div>
    </section>
</template>
<script>
import mv from "@/assets/datas/mv.json";
export default {
    data() {
        return {
            mv
        }
    }
}
</script>