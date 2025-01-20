<template>
    <div>
        <NuxtLoadingIndicator />
        <MyHeader/>
        <main>
            <NuxtPage />
        </main>
    </div>
</template>

<script setup>
import { useHead, useRuntimeConfig } from '#imports'
import MyHeader from '@/components/MyHeader.vue';

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
            href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swapm'
        }
    ],
})
</script>
  