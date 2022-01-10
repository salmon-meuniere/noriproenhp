<template>
    <section class="cover" id="cover" data-section="cover">
        <p class="cover__logo"><img class="cover__logoImg" src="/img/common/logo_mono.svg" alt="のりプロ"></p>
        <p class="cover__text">A place where everyone's dreams<br class="br">can come true together<br class="br">with your dearest friends.</p>
        <div class="cover__mask"></div>
        <div class="cover__image">
            <client-only>
                <picture>
                    <source class="cover__imageImg" type="image/webp" media="(orientation: landscape)" :srcset="'/img/cover/cover_landscape_' + chosenCover + '.webp'" decoding="async">
                    <source class="cover__imageImg" type="image/webp" media="(orientation: portrait)" :srcset="'/img/cover/cover_portrait_' + chosenCover + '.webp'" decoding="async">
                    <img class="cover__imageImg" :src="'/img/cover/cover_landscape_' + chosenCover + '.jpg'" decoding="async" alt="のりプロウェブサイトのメインビジュアル">
                </picture>
            </client-only>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            coverLimit: 1,
            chosenCover: '00'
        }
    },
    created() {
        if(process.browser) {
            this.chosenCover = Math.round(Math.random() * this.coverLimit).toString().padStart(2, "0");
        }
    }
}
</script>