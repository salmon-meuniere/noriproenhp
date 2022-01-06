<template>
    <div class="body-index">
        <Gnav />
        <main class="main">
            <IndexTalentsSection :parentLoaded="Lstatus" :talents="realTalents" />
        </main>
        <Gfoot :atalents="talents" />
    </div>
</template>
<script>
import g from "@/assets/datas/generations.json"
export default {
    name: 'TalentsIndex',
    head: {
        title: "Talents",
    },
    data() {
        return {
            Lstatus: false
        }
    },
    async asyncData({$content}) {
        let talents = await $content("talents")
                .only(['slug', 'name', 'gen'])
                .fetch();
        return {
            talents,
        };
    },
    computed: {
        realTalents() {
            let self = this;
            let out = {};
            g.forEach(function (e) {
                out[e.id] = self.talents.filter(function (v) {
                    return v.gen == e.id;
                });
            });
            return out;
        }
    }
}
</script>
