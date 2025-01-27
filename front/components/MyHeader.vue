<template>
    <div>
        <div class="banner" style="background-image: url('/images/banner.png');"></div>
        <header class="header">
            <div class="container">
                <nav class="header-nav">
                    <NuxtLink :href="`/${currentLocale}`" class="logo">
                        <img src="/images/logo.png" alt="Logo">
                    </NuxtLink>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" class="header-cities" >
                        <template #dropdownicon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M7.42767 0C7.91447 0 8.16872 0.739513 7.87504 1.21727L7.83162 1.28027L4.40346 5.78035C4.30508 5.90949 4.17418 5.98706 4.03533 5.99852C3.89647 6.00998 3.7592 5.95454 3.64927 5.8426L3.59556 5.78035L0.167408 1.28027L0.119985 1.20977L0.0891323 1.15202L0.0582786 1.08002L0.0485654 1.05302L0.0331397 1.00277L0.0148554 0.921766L0.0091424 0.882015L0.00342798 0.837015L0.00114346 0.794264L0 0.750013L0.00114346 0.705762L0.00399923 0.662262L0.0091424 0.617261L0.0148554 0.57826L0.0331397 0.497259L0.0485654 0.447008L0.0885611 0.348006L0.125699 0.280505L0.167408 0.219754L0.221116 0.157503L0.265111 0.117002L0.319961 0.0765015L0.34053 0.0637511L0.378811 0.0435005L0.440518 0.0195004L0.4708 0.0120001L0.505082 0.00449975L0.537649 0.00149992L7.42767 0Z" fill="#FAFAFA"/>
                            </svg>
                        </template>
                    </Select>
                    <button class="header-city">
                        Київ
                    </button>
                    <ul class="header-list">
                        <li class="header-item header-sell">
                            <NuxtLink href="/">
                                {{ $t('header.menu.item1') }}
                            </NuxtLink>
                        </li>
                        <li class="header-item">
                            <NuxtLink href="/">
                                {{ $t('header.menu.item2') }}
                            </NuxtLink>
                        </li>
                        <li class="header-item">
                            <NuxtLink href="/">
                                {{ $t('header.menu.item3') }}
                            </NuxtLink>
                        </li>
                        <li class="header-item">
                            <a @click="subList = !subList" href="#">
                                {{ $t('header.menu.item4.head') }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M7.42767 0C7.91447 0 8.16872 0.739513 7.87504 1.21727L7.83162 1.28027L4.40346 5.78035C4.30508 5.90949 4.17418 5.98706 4.03533 5.99852C3.89647 6.00998 3.7592 5.95454 3.64927 5.8426L3.59556 5.78035L0.167408 1.28027L0.119985 1.20977L0.0891323 1.15202L0.0582786 1.08002L0.0485654 1.05302L0.0331397 1.00277L0.0148554 0.921766L0.0091424 0.882015L0.00342798 0.837015L0.00114346 0.794264L0 0.750013L0.00114346 0.705762L0.00399923 0.662262L0.0091424 0.617261L0.0148554 0.57826L0.0331397 0.497259L0.0485654 0.447008L0.0885611 0.348006L0.125699 0.280505L0.167408 0.219754L0.221116 0.157503L0.265111 0.117002L0.319961 0.0765015L0.34053 0.0637511L0.378811 0.0435005L0.440518 0.0195004L0.4708 0.0120001L0.505082 0.00449975L0.537649 0.00149992L7.42767 0Z" fill="#BAB4E1"/>
                                </svg>
                            </a>
                            <ul class="header-subList" v-if="subList">
                                <li class="header-subItem">
                                    <NuxtLink href="/">
                                        {{ $t('header.menu.item4.item1') }}
                                    </NuxtLink>
                                    <NuxtLink href="/">
                                        {{ $t('header.menu.item4.item2') }}
                                    </NuxtLink>
                                    <NuxtLink href="/">
                                        {{ $t('header.menu.item4.item3') }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button class="btn header-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M3.75 3H6.75L8.25 6.75L6.375 7.875C7.17822 9.50365 8.49635 10.8218 10.125 11.625L11.25 9.75L15 11.25V14.25C15 14.6478 14.842 15.0294 14.5607 15.3107C14.2794 15.592 13.8978 15.75 13.5 15.75C10.5744 15.5722 7.81512 14.3299 5.74262 12.2574C3.67013 10.1849 2.42779 7.42555 2.25 4.5C2.25 4.10218 2.40804 3.72064 2.68934 3.43934C2.97064 3.15804 3.35218 3 3.75 3Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Зв’затись
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M7.42767 0C7.91447 0 8.16872 0.739513 7.87504 1.21727L7.83162 1.28027L4.40346 5.78035C4.30508 5.90949 4.17418 5.98706 4.03533 5.99852C3.89647 6.00998 3.7592 5.95454 3.64927 5.8426L3.59556 5.78035L0.167408 1.28027L0.119985 1.20977L0.0891323 1.15202L0.0582786 1.08002L0.0485654 1.05302L0.0331397 1.00277L0.0148554 0.921766L0.0091424 0.882015L0.00342798 0.837015L0.00114346 0.794264L0 0.750013L0.00114346 0.705762L0.00399923 0.662262L0.0091424 0.617261L0.0148554 0.57826L0.0331397 0.497259L0.0485654 0.447008L0.0885611 0.348006L0.125699 0.280505L0.167408 0.219754L0.221116 0.157503L0.265111 0.117002L0.319961 0.0765015L0.34053 0.0637511L0.378811 0.0435005L0.440518 0.0195004L0.4708 0.0120001L0.505082 0.00449975L0.537649 0.00149992L7.42767 0Z" fill="#FAFAFA"/>
                        </svg>
                    </button>
                    <Languages class="header-languages"/>
                    <!-- <ul class="header-languages_list">
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
                    </ul> -->
                </nav>
            </div>
            <div class="header-content">
                <div class="container">
                    <div>
                        <svg class="header-bars" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="header-catalog_text">
                            Каталог товарів
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M7.42767 0C7.91447 0 8.16872 0.739513 7.87504 1.21727L7.83162 1.28027L4.40346 5.78035C4.30508 5.90949 4.17418 5.98706 4.03533 5.99852C3.89647 6.00998 3.7592 5.95454 3.64927 5.8426L3.59556 5.78035L0.167408 1.28027L0.119985 1.20977L0.0891323 1.15202L0.0582786 1.08002L0.0485654 1.05302L0.0331397 1.00277L0.0148554 0.921766L0.0091424 0.882015L0.00342798 0.837015L0.00114346 0.794264L0 0.750013L0.00114346 0.705762L0.00399923 0.662262L0.0091424 0.617261L0.0148554 0.57826L0.0331397 0.497259L0.0485654 0.447008L0.0885611 0.348006L0.125699 0.280505L0.167408 0.219754L0.221116 0.157503L0.265111 0.117002L0.319961 0.0765015L0.34053 0.0637511L0.378811 0.0435005L0.440518 0.0195004L0.4708 0.0120001L0.505082 0.00449975L0.537649 0.00149992L7.42767 0Z" fill="#FAFAFA"/>
                            </svg>
                        </p>
                    </div>
                    <label for="search" class="header-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input id="search" type="text" name="search" v-model="search">
                    </label>
                    <div>
                        <button class="btn header-content_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Увійти
                        </button>
                        <svg class="header-wish header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.5003 12.5717L12.0003 19.9997L4.5003 12.5717C4.00561 12.0903 3.61594 11.5117 3.35585 10.8723C3.09575 10.2329 2.97086 9.54664 2.98904 8.85662C3.00721 8.1666 3.16806 7.48782 3.46146 6.86303C3.75485 6.23823 4.17444 5.68094 4.69379 5.22627C5.21314 4.77159 5.82101 4.42938 6.47911 4.22117C7.13722 4.01296 7.83131 3.94327 8.51767 4.01649C9.20403 4.08971 9.8678 4.30425 10.4672 4.64659C11.0666 4.98894 11.5885 5.45169 12.0003 6.00569C12.4138 5.45571 12.9364 4.99701 13.5354 4.65829C14.1344 4.31958 14.7968 4.10814 15.4812 4.03721C16.1657 3.96628 16.8574 4.03739 17.5131 4.24608C18.1688 4.45477 18.7743 4.79656 19.2919 5.25005C19.8094 5.70354 20.2277 6.25897 20.5207 6.88158C20.8137 7.50419 20.975 8.18057 20.9946 8.8684C21.0142 9.55622 20.8916 10.2407 20.6344 10.8789C20.3773 11.5172 19.9912 12.0955 19.5003 12.5777" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="header-cart header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 17C6.53043 17 7.03914 17.2107 7.41421 17.5858C7.78929 17.9609 8 18.4696 8 19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19C4 18.4696 4.21071 17.9609 4.58579 17.5858C4.96086 17.2107 5.46957 17 6 17ZM6 17H17M6 17V3H4M17 17C17.5304 17 18.0391 17.2107 18.4142 17.5858C18.7893 17.9609 19 18.4696 19 19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19C15 18.4696 15.2107 17.9609 15.5858 17.5858C15.9609 17.2107 16.4696 17 17 17ZM6 5L20 6L19 13H6" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <Languages class="header-content_language"/>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import Languages from './Languages.vue';
import { useI18n } from 'vue-i18n';
export default {
    components:{
        Languages
    },
    data(){
        return{
            cities: [
                {id: 1, name: "Україна"},
                {id: 2, name: "Варшава"},
                {id: 3, name: "Берлін"}
            ],
            selectedCity: {id: 1, name: 'Україна'},
            search: '',
            subList: false
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