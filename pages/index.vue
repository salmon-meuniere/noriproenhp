<template>
    <div class="body-index">
        <Gnav />
        <main class="main">
            <Hero />
            <IndexAboutSection />
            <IndexTalentsSection :parentLoaded="Lstatus" :talents="realTalents" />
            <IndexComicSection />
            <IndexMVSection />
            <IndexMerchSection />
            <IndexNewsSection />
            <IndexQASection />
            <IndexContactSection />
        </main>
        <Gfoot :atalents="talents" />
    </div>
</template>

<script>
import g from "@/assets/datas/generations.json"
export default {
    name: 'Index',
    head: {
        title: "【非公式翻訳】NoriPro Website English Mirror",
        titleTemplate: ""
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
