<template>
    <footer class="globalFooter">
        <div class="globalFooter__wrap">
            <div class="globalFooter__about">
                <p class="globalFooter__logo">
                    <nuxt-link class="globalFooter__logoLink" to="/"><img class="globalFooter__logoImg" src="/img/common/logo_mono.svg" alt="のりプロ" loading="lazy"></nuxt-link>
                </p>
                <p class="globalFooter__description">【非公式翻訳】NoriPro Website English Mirror</p>
                <ul class="globalFooter__accountList">
                    <li class="globalFooter__accountItem">
                        <a class="globalFooter__accountLink" href="https://twitter.com/noriopro" target="_blank" aria-label="Twitter" rel="noopener">
                            <p class="globalFooter__accountIcon"><svg viewBox="0 0 250 203.14" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m78.62 203.14c94.38 0 145.94-78.14 145.94-145.94 0-2.22 0-4.43-.15-6.63a104.36 104.36 0 0 0 25.59-26.57 102.24 102.24 0 0 1 -29.46 8.07 51.46 51.46 0 0 0 22.55-28.35 103 103 0 0 1 -32.57 12.45 51.34 51.34 0
                    0 0 -87.41 46.83 145.63 145.63 0 0 1 -105.71-53.64 51.33 51.33 0 0 0 15.88 68.47 51 51 0 0 1 -23.28-6.42v.65a51.32 51.32 0 0 0 41.15 50.28 51.2 51.2 0 0 1 -23.16.88 51.36 51.36 0 0 0 47.92 35.62 103 103 0 0 1 -63.7 22 106 106 0 0 1 -12.21-.74
                    145.22 145.22 0 0 0 78.62 23" />
                                </svg>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="globalFooter__nav">
                <h2 class="globalFooter__label">Menu</h2>
                <ul class="globalFooter__navList">
                    <li class="globalFooter__navItem" v-for="item in navCont" :key="item.title">
                        <nuxt-link v-if="item.to != null" class="globalFooter__navLink" :to="item.to">{{item.title}}</nuxt-link>
                        <a v-else class="globalFooter__navLink" :href="item.href" target="_blank" rel="noopener">{{item.title}}</a>
                    </li>
                </ul>
            </div>
            <div class="globalFooter__talent">
                <h2 class="globalFooter__label">Talents</h2>
                <ul class="globalFooter__talentList">
                    <li v-for="item in allTalents" :key="item.slug" :class="'globalFooter__talentItem ' + item.slug"><nuxt-link class="globalFooter__talentLink" :to="'/talents/' + item.slug">{{item.name.en}}</nuxt-link></li>
                </ul>
            </div>
            <div class="globalFooter__information">
                <p class="globalFooter__copyright"><small class="globalFooter__copyrightText">&copy; NoriPro</small></p>
                <ul class="globalFooter__internalList">
                    <li class="globalFooter__internalItem"><a class="globalFooter__internalLink" target="_blank" rel="noopener" href="https://noripro.jp/privacypolicy">Privacy Policy (NoriPro Official)</a></li>
                    <li class="globalFooter__internalItem"><a class="globalFooter__internalLink" target="_blank" rel="noopener" href="https://schedule.noripromatome.ml/en/docs/privacy-policy">Privacy Policy (NoriProMatome.ml)</a></li>
                    <li class="globalFooter__internalItem"><a class="globalFooter__internalLink" target="_blank" rel="noopener" href="https://noripro.jp/report">Report Offensive Behavior</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
import navCont from "@/assets/datas/nav.json";
export default {
    props: [
        "talents",
        "atalents"
    ],
    data() {
        return {
            navCont
        }
    },
    computed: {
        allTalents() {
            if(this.atalents != null || this.atalents != [] || typeof this.atalents != "object") {
                return this.atalents;
            }
            return Object.values(this.talents).flat();
        }
    }
}
</script>