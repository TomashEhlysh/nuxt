<template>
    <div>
        <div class="banner" style="background-image: url('/images/banner.png');"></div>
        <header class="header">
            <div class="container">
                <nav class="header-nav">
                    <NuxtLink href="/" class="logo">
                        <img src="/images/logo.png" alt="Logo">
                    </NuxtLink>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" class="header-cities" >
                        <template #dropdownicon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M7.42767 0C7.91447 0 8.16872 0.739513 7.87504 1.21727L7.83162 1.28027L4.40346 5.78035C4.30508 5.90949 4.17418 5.98706 4.03533 5.99852C3.89647 6.00998 3.7592 5.95454 3.64927 5.8426L3.59556 5.78035L0.167408 1.28027L0.119985 1.20977L0.0891323 1.15202L0.0582786 1.08002L0.0485654 1.05302L0.0331397 1.00277L0.0148554 0.921766L0.0091424 0.882015L0.00342798 0.837015L0.00114346 0.794264L0 0.750013L0.00114346 0.705762L0.00399923 0.662262L0.0091424 0.617261L0.0148554 0.57826L0.0331397 0.497259L0.0485654 0.447008L0.0885611 0.348006L0.125699 0.280505L0.167408 0.219754L0.221116 0.157503L0.265111 0.117002L0.319961 0.0765015L0.34053 0.0637511L0.378811 0.0435005L0.440518 0.0195004L0.4708 0.0120001L0.505082 0.00449975L0.537649 0.00149992L7.42767 0Z" fill="#FAFAFA"/>
                            </svg>
                        </template>
                    </Select>
                    <ul class="header-list">
                        <li class="header-item header-sell">
                            <NuxtLink href="/">
                                Акції
                            </NuxtLink>
                        </li>
                        <li class="header-item">
                            <NuxtLink href="/">
                                Подарункові сертифікати
                            </NuxtLink>
                        </li>
                        <li class="header-item">
                            <NuxtLink href="/">
                                Магазини
                            </NuxtLink>
                        </li>
                        <li class="header-item">
                            <a @click="subList = !subList" href="#">
                                Ще
                            </a>
                            <ul class="header-subList" v-if="subList">
                                <li class="header-subItem">
                                    <NuxtLink href="/">
                                        Пункт1
                                    </NuxtLink>
                                    <NuxtLink href="/">
                                        Пункт2
                                    </NuxtLink>
                                    <NuxtLink href="/">
                                        Пункт3
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
                    <ul class="header-languages_list">
                        <li class="header-languages_item" v-for="lang in langs" :key="lang">
                            <NuxtLink :to="`/${lang.code}`">
                                {{ lang.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cities: [
                {id: 1, name: "Київ"},
                {id: 2, name: "Львів"},
                {id: 3, name: "Одеса"},
                {id: 4, name: "Харків"},
                {id: 5, name: "Дніпро"},
                {id: 6, name: "Запоріжжя"},
                {id: 7, name: "Вінниця"},
                {id: 8, name: "Чернівці"},
                {id: 10, name: "Тернопіль"}
            ],
            selectedCity: {id: 1, name: 'Київ'},
            subList: false,
            langs:[
                {name: 'Укр', code: 'ua'},
                {name: 'Рус', code: 'ru'},
                {name: 'Eng', code: 'en'},
                {name: 'Pol', code: 'pl'},
                {name: 'De', code: 'de'}
            ]
        }
    }
}
</script>

<style>

</style>