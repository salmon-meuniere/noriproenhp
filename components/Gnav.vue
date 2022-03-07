<template>
    <header class="globalHeader" :data-disp-navmenu="isExpanded.toString()" data-header>
        <h1 class="globalHeader__logo">
            <nuxt-link class="globalHeader__logoLink" to="/">
                <picture class="globalHeader__logoImg">
                    <source srcset="/img/common/logo_mono.svg" media="(max-width: 760px)"><img class="globalHeader__logoImg" src="/img/common/logo.svg" alt="NoriPro">
                </picture>
            </nuxt-link>
        </h1>
        <nav class="globalHeader__nav">
            <ul class="globalHeader__navList">
                <li class="globalHeader__navItem" v-for="item in navCont" :key="item.title">
                    <nuxt-link v-if="item.to != null" @click.native="isExpanded = false" class="globalHeader__navLink" :to="item.to" data-scroll>
                        <p class="globalHeader__navLabelMain">{{item.title}}</p>
                        <p class="globalHeader__navLabelSub">{{item.subTitle}}</p>
                    </nuxt-link>
                    <a v-else @click="isExpanded = false" class="globalHeader__navLink" :href="item.href" target="_blank" rel="noopener">
                        <p class="globalHeader__navLabelMain">{{item.title}}</p>
                        <p class="globalHeader__navLabelMain">{{item.subTitle}}</p>
                    </a>
                </li>
            </ul>
        </nav>
        <button class="globalHeader__menuButton" @click="isExpanded = !isExpanded" type="button" aria-label="Toggle Navigation">
            <i class="globalHeader__menuIcon"></i>
        </button>
    </header>
</template>
<script>
import navCont from "@/assets/datas/nav.json";
export default {
    data() {
        return {
            isExpanded: false,
            navCont
        }
    }
}
</script>