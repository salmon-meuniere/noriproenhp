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
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#about" data-scroll>
                        <p class="globalHeader__navLabelMain">ABOUT US</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#talent" data-scroll>
                        <p class="globalHeader__navLabelMain">TALENTS</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#comic" data-scroll>
                        <p class="globalHeader__navLabelMain">COMIC</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#mv" data-scroll>
                        <p class="globalHeader__navLabelMain">MV</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#goods" data-scroll>
                        <p class="globalHeader__navLabelMain">MERCH</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#news" data-scroll>
                        <p class="globalHeader__navLabelMain">NEWS</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#faq" data-scroll>
                        <p class="globalHeader__navLabelMain">FAQ</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
                <li class="globalHeader__navItem">
                    <nuxt-link class="globalHeader__navLink" to="/#contact" data-scroll>
                        <p class="globalHeader__navLabelMain">CONTACT</p>
                        <p class="globalHeader__navLabelSub"></p>
                    </nuxt-link>
                </li>
            </ul>
        </nav>
        <button class="globalHeader__menuButton" @click="isExpanded = !isExpanded" type="button" aria-label="Toggle Navigation">
            <i class="globalHeader__menuIcon"></i>
        </button>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isExpanded: false
        }
    }
}
</script>