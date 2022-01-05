<template>
    <div class="body-talent">
        <Gnav />
        <main class="main">
            <section :class="['talentDetail', 'talentDetail__' + targetTalentId]" id="talentDetail">
                <div class="wrap">
                    <div class="container">
                        <header class="profile">
                            <h2 class="profile__name">{{talentsData.name.en}}</h2>
                            <p class="profile__group" v-if="talentsData.branch != null">{{talentsData.branch}}
                                Branch</p>
                            <p class="profile__title">{{talentsData.copy}}</p>
                            <ul class="profile__alias">
                                <li class="profile__aliasName profile__aliasName__en"
                                    v-if="talentsData.name.ja != null">{{talentsData.name.ja}}</li>
                                <li class="profile__aliasName profile__aliasName__cn"
                                    v-if="talentsData.name.zh != null">{{talentsData.name.zh}}</li>
                            </ul>
                        </header>
                        <div class="account">
                            <ul class="account__list">
                                <li :class="['account__item', 'account__item__' + key]"
                                    v-for="(item, key) in talentsData.links" :key="key">
                                    <a class="account__itemLink" :href="item.link" target="_blank" rel="noopener">
                                        <i class="account__itemIcon" v-if="key == 'twitter'"><svg viewBox="0 0 250 203.14" xmlns="http://www.w3.org/2000/svg"><path d="m78.62 203.14c94.38 0 145.94-78.14 145.94-145.94 0-2.22 0-4.43-.15-6.63a104.36 104.36 0 0 0 25.59-26.57 102.24 102.24 0 0 1 -29.46 8.07 51.46 51.46 0 0 0 22.55-28.35 103 103 0 0 1 -32.57 12.45 51.34 51.34 0 0 0 -87.41 46.83 145.63 145.63 0 0 1 -105.71-53.64 51.33 51.33 0 0 0 15.88 68.47 51 51 0 0 1 -23.28-6.42v.65a51.32 51.32 0 0 0 41.15 50.28 51.2 51.2 0 0 1 -23.16.88 51.36 51.36 0 0 0 47.92 35.62 103 103 0 0 1 -63.7 22 106 106 0 0 1 -12.21-.74 145.22 145.22 0 0 0 78.62 23" /></svg></i>
                                        <i class="account__itemIcon" v-if="key == 'youtube'"><svg enable-background="new 0 0 512 358.5" viewBox="0 0 512 358.5" xmlns="http://www.w3.org/2000/svg"><path d="m501.5 56.1c-6-22-23.1-39.1-45.1-45.1-40.1-11-200.4-11-200.4-11s-160.3 0-200.3 10.6c-22 6.3-39.1 23.5-45.1 45.5-10.6 40.1-10.6 123.1-10.6 123.1s0 83.5 10.5 123.1c6 22 23.1 39.2 45.1 45.1 40.5 11 200.3 11 200.3 11s160.3 0 200.3-10.5c22-6 39.2-23.1 45.1-45.1 10.7-40.1 10.7-123.1 10.7-123.1s.4-83.5-10.5-123.6zm-296.5 199.9v-153.5l133.3 76.8z"></path></svg></i>
                                        <i class="account__itemIcon" v-if="key == 'bilibili'"><svg viewBox="0 0 890.19 809" xmlns="http://www.w3.org/2000/svg"><path d="m737 136h-51l44-45q15-15 15-38t-15-38q-15-15-38-15t-39 15l-128 121h-153l-129-121q-15-15-38-15t-38 15q-15 15-15 38t15 38l44 45h-51q-69 2-113.5 47t-46.5 113v346q2 74 46.5 119.5t113.5 47.5h570q69-2 114-46.5t46-113.5v-353q3-68-40.5-113t-112.5-47zm45 506a60.57 60.57 0 0 1 -17.5 41q-16.5 17-40.5 17h-557a58 58 0 0 1 -58-58v-339q1-25 17-41t41-17h557q25 1 41 17t17 41zm-500-282q-24 1-40.51 17.5t-17.49 40.5v58q1 24 17 40.5t41 16.5q25 0 41-16.5t17-40.5v-58q-1-24-17.5-40.5t-40.5-17.5zm333 0q-24 1-40.5 17.5t-17.5 40.5v58q1 24 17 40.5t41 16.5q25 0 41-16.5t17-40.5v-58q-1-24-17.5-40.5t-40.5-17.5z"></path></svg></i>
                                        <p class="account__itemLabel">{{item.name}}</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="illustrator__wrap">
                            <p class="illustrator" v-for="item in talentsData.worker" :key="item.role">{{item.role}}: <span
                                    class="illustrator__name">{{item.name}}</span></p>
                        </div>
                        <div class="visualChange" v-if="talentsData.images.mainVisualCount > 1">
                            <ul class="visualChange__list">
                                <li class="visualChange__item" v-for="n of talentsData.images.mainVisualCount" :key="n">
                                    <button class="visualChange__itemWrap" aria-label="Switch visual"
                                        v-on:click="visualId = n">
                                        <picture>
                                            <source class="visualChange__itemImg" decoding="async" type="image/webp"
                                                :srcset="'/img/talent/' + targetTalentId + '/change_' + (n - 1) + '.webp'"
                                                alt="Thumbnail of visuals">
                                            <img class="visualChange__itemImg" decoding="async"
                                                :src="'/img/talent/' + targetTalentId + '/change_' + (n - 1) + '.png'"
                                                alt="Thumbnail of visuals">
                                        </picture>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="visualWrap">
                        <div class="visual">
                            <picture class="visual__picture visual__picture--visible">
                                <source class="visual__img" decoding="async" type="image/webp"
                                    :srcset="'/img/talent/' + targetTalentId + '/image_' + (visualId - 1) + '.webp'"
                                    alt="Visual">
                                <img class="visual__img" decoding="async"
                                    :src="'/img/talent/' + targetTalentId + '/image_' + (visualId - 1) + '.png'"
                                    alt="Visual">
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="description">
                    <p :style="{whiteSpace: 'pre-wrap'}" class="description__words">{{talentsData.descriptions.mainCopy}}</p>
                    <p :style="{whiteSpace: 'pre-wrap'}" class="text">{{talentsData.descriptions.subDescription}}</p>
                    <div class="mv" v-if="talentsData.mv.length > 0">
                        <h3 class="header-border">Discography</h3>
                        <ul class="mv__list">
                            <li class="mv__item" v-for="(item, key) in talentsData.mv" :key="key">
                                <iframe class="mv__iframe" :src="'https://www.youtube.com/embed/' + item + '?controls=0&hl=en'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                                <a class="mv__link"
                                    :href="'https://www.youtube.com/watch?v=' + item" target="_blank"
                                    rel="noopener">
                                    <i class="mv__icon">
                                        <svg viewBox="0 0 68 48">
                                            <path
                                                d="m66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19-5.31-1.42-27.1-1.55-27.1-1.55s-21.79.13-27.1 1.55c-2.93.78-4.63 3.26-5.42 6.19-1.42 5.31-1.48 16.26-1.48 16.26s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19 5.31 1.42 27.1 1.55 27.1 1.55s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19 1.42-5.31 1.48-16.26 1.48-16.26s-.06-10.95-1.48-16.26z">
                                            </path>
                                            <path d="m45 24-18-10v20" fill="#fff"></path>
                                        </svg>
                                    </i>
                                    <picture>
                                        <img class="mv__itemImg"
                                            decoding="async"
                                            :src="'https://img.youtube.com/vi/' + item + '/mqdefault.jpg'"
                                            alt="Music Video Thumbnail">
                                    </picture>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div class="talentList">
                <div class="talentList__wrap">
                    <h3 class="header-border">Our Talents</h3>
                    <ul class="p-talents__groupList">
                        <TalentCard v-for="(item, key) in allTalentData" :key="key" :tid="item.slug" :name="item.name.en" />
                    </ul>
                </div>
            </div>
        </main>
        <Gfoot :atalents="allTalentData" />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.talentsData.name.en
        }
    },
    data() {
        return {
            visualId: 1
        }
    },
    async asyncData({$content, params}) {
        const talentsData = await $content('talents', params.slug).fetch()
        const allTalentData = await $content("talents")
            .only(['slug', 'name', 'gen'])
            .fetch();
        return {
            talentsData,
            allTalentData
        };
    },
    computed: {
        targetTalentId() {
            return this.talentsData.slug;
        }
    },
}
</script>