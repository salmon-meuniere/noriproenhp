<template>
    <section class="section talent" id="talent" data-section="talent">
        <div class="section__wrap">
            <header class="sectionHeader">
                <p class="sectionHeader__main">TALENTS</p>
            </header>
            <div class="talents__wrap" >
                <section v-for="item in generations" :key="item.id" :class="'talents__group ' + item.class">
                    <h3 v-if="item.secName != ''" class="header-border">{{item.secName}}</h3>
                    <ul class="p-talents__groupList">
                        <TalentCard v-for="tl in talents[item.id]" :key="tl.slug" :tid="tl.slug" :name="tl.name.en" />
                    </ul>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
import g from "@/assets/datas/generations.json"
export default {
    props: [
        "talents",
        "parentLoaded"
    ],
    computed: {
        generations() {
            return g.sort(function(a, b) {
                return a.priority >= b.priority;
            });
        }
    }
}
</script>