<template>
    <div>
        <NuxtLoadingIndicator />
        <MyHeader/>
        <main class="main">
            <NuxtPage />
        </main>
        <MyFooter/>
    </div>
</template>

<script setup>
import { useHead, useRuntimeConfig } from '#imports'
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '~/components/MyFooter.vue';

const loader = ref(null);
useHead({
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
        }
    ],
})
</script>