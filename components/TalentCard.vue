<template>
    <li :class="'p-talent__item ' + tid">
        <nuxt-link class="p-talent__link" :to="'/talents/' + tid">
            <p class="p-talent__thumb">
                <picture>
                    <source class="p-talent__img" type="image/webp" :srcset="'/img/talent/' + tid + '/thumb.webp'" :alt="name" loading="lazy">
                    <img class="p-talent__img" :src="'/img/talent/' + tid + '/thumb.png'" :alt="name" loading="lazy">
                </picture>
            </p>
            <div class="button-action">
                <span class="button-action__wrap">{{name}}</span>
            </div>
        </nuxt-link>
    </li>
</template>

<script>
export default {
    props: [
        "tid",
        "name"
    ]
}
</script>