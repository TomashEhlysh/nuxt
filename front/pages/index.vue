<template>
    <div>
        <h1>
            {{ $t('title') }}
        </h1>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'
const config = useRuntimeConfig()

const { data: pageData, error: pageError } = await useFetch(`${config.public.apiBase}/getPage/home`)
const { data: goods, error: goodsError } = await useFetch(`${config.public.apiBase}/getGoods`)

// Використовуємо watchEffect для оновлення заголовків після отримання даних
watchEffect(() => {
    if (pageData.value) {
        useHead({
            title: pageData.value.title || 'Default Title',
            meta: [
                {
                    name: 'description',    
                    content: pageData.value.description || 'Default description'
                },
                {
                    property: 'og:title',
                    content: pageData.value.title || 'Default Title'
                }
            ]
        })
    }
})

if (pageError.value) {
    console.error('Error fetching page data:', pageError.value)
}

if (goodsError.value) {
    console.error('Error fetching goods:', goodsError.value)
}
</script>
