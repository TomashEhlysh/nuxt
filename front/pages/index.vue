<template>
    <section class="home">
        <div class="container">
            <h1>
                {{ $t('title') }}
            </h1>
        </div>
    </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'
const config = useRuntimeConfig()

const { locale } = useI18n();
const { data: pageData, error: pageError } = await useFetch(`${config.public.apiBase}/getPage/home/${locale.value}`)
watchEffect(() => {
    if (pageData.value) {
        const descr = pageData.value.desctiption
        const title = pageData.value.title
        useHead({
            title: pageData.value.title || 'Default Title',
            meta: [
                {
                    name: 'description',    
                    content: descr || 'Default description'
                },
                {
                    property: 'og:title',
                    content: title || 'Default Title'
                }
            ]
        })
    }
})

if (pageError.value) {
    console.error('Error fetching page data:', pageError.value)
}
</script>
