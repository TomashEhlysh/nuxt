<template>
    <ul class="header-languages_list">
        <li class="header-languages_item header-languages_item__list" v-for="lang in langs" :key="lang">
            <NuxtLink :to="`/${lang.code}`" :class="lang.code == currentLocale ? 'active' : ''" >
                {{ lang.name }}
            </NuxtLink>
        </li>
        <li class="header-languages_item__show">
            <p @click="this.showLangList = !this.showLangList">{{ langs.filter(item => item.code == currentLocale)[0].name }}</p>
            <ul class="header-languages_subList" v-show="showLangList">
                <li class="header-languages_item" v-for="lang in langs.filter(item => item.code != currentLocale)" :key="lang">
                    <NuxtLink :to="`/${lang.code}`" @click="showLangList = false" :class="lang.code == currentLocale ? 'active' : ''" >
                        {{ lang.name }}
                    </NuxtLink>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
    data(){
        return{
            langs:[
                {name: 'Укр', code: 'ua'},
                {name: 'Рус', code: 'ru'},
                {name: 'Eng', code: 'en'},
                {name: 'Pol', code: 'pl'},
                {name: 'De', code: 'de'}
            ],
            showLangList: false,
        }
    },
    setup(){
        const { locale } = useI18n();
        return {
            currentLocale: locale
        };
    }
}
</script>

<style>

</style>