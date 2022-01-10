<template>
    <section class="section news" id="news" data-section="news">
        <div class="section__wrap">
            <header class="sectionHeader">
                <h2 class="sectionHeader__main">NEWS</h2>
            </header>
            <client-only>
                <ul class="news__list">
                    <li class="news__item" v-for="item in news" :key="item.id">
                        <a class="news__link" target="_blank" rel="noopener" :href="item.link">
                            <div class="news__date">
                                <time class="news__date__datetime" :datetime="getDateTimeString(item.date_gmt)">
                                    <span class="news__date__year">{{getDateTimeStringArray(item.date_gmt)[0]}}</span>
                                    <span class="news__date__month-day">{{getDateTimeStringArray(item.date_gmt)[1]}}</span>
                                </time>                                    
                            </div>
                            <div class="news__title">{{item.title.rendered}}</div>
                        </a>
                    </li>
                </ul>
            </client-only>
            <div class="more">
                <a class="button-secondary" href="https://noripro.jp/news/archives/" target="_blank" rel="noopener">Show More</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    fetchOnServer: false,
    data() {
        return {
            news: []
        }
    },
    async fetch() {
        const n = new XMLHttpRequest();
        let self  = this;
        n.addEventListener("load", function() {
            if (this.status == 200 || this.status == 304) {
                self.news = JSON.parse(this.responseText);
            }
        });
        n.open("GET", "https://schedule-api.noripromatome.ml/client-api/npnews.php");
        n.send();
    },
    methods: {
        getDateTimeString(gmtT) {
            let realGmtT = gmtT;
            if(!gmtT.match(/Z$/)) {
                realGmtT = gmtT + "Z";
            }
            const h = new Date(realGmtT);
            return h.getFullYear().toString() + "-" + (h.getMonth() + 1).toString().padStart(2, "0") + "-" + h.getDate().toString().padStart(2, "0");
        },
        getDateTimeStringArray(gmtT) {
            let realGmtT = gmtT;
            if(!gmtT.match(/Z$/)) {
                realGmtT = gmtT + "Z";
            }
            const h = new Date(realGmtT);
            return [
                h.getFullYear().toString() + '.',
                (h.getMonth() + 1).toString().padStart(2, "0") + "." + h.getDate().toString().padStart(2, "0")
            ];
        }
    }
}
</script>