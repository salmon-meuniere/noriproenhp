<template>
    <div class="body-mv">
        <Gnav />
        <main class="main">
            <section class="section page-mv" id="page-mv" data-section="page-mv">
                <div class="section__wrap">
                    <header class="sectionHeader">
                        <p class="sectionHeader__main">MV</p>
                        <h2 class="sectionHeader__sub" lang="en">Music Videos</h2>
                    </header>
                    <ul class="page-mv__list">
                        <li class="page-mv__item" v-for="id in mv" :key="id">
                            <iframe class="page-mv__iframe" :src="'https://www.youtube.com/embed/' + id + '?controls=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <!--p.page-mv__title #{item.title}-->
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        <Gfoot :atalents="allTalentData" />
    </div>
</template>
<script>
import mv from "@/assets/datas/mv.json"
export default {
    head: {
        title: "Music Videos"
    },
    async asyncData({$content, params}) {
        const allTalentData = await $content("talents")
            .only(['slug', 'name', 'gen'])
            .fetch();
        return {
            allTalentData
        };
    },

    data() {
        return {
            mv: mv
        }
    }
}
</script>