<template>
    <div>
        <h1>
            This is a item id: {{ good?.id }}
        </h1>
        <p>Назва продукта: {{ good?.name }}</p>
        <p>Ціна: {{ good?.price }}</p>
    </div>
</template>

<script setup>
import { useRoute } from '#imports'
import { ref, watchEffect } from 'vue'
import { useFetch, useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const route = useRoute()
const goodId = route.params.id

const { data: good, error: goodError } = await useFetch(`${config.public.apiBase}/getGoods/${goodId}`)

watchEffect(() => {
    if (good.value) {
        useHead({
            title: good.value.name || 'Default Title',
            meta: [
                {
                    name: 'description',
                    content: good.value.description || 'Default description'
                },
                {
                    property: 'og:title',
                    content: good.value.name || 'Default Title'
                }
            ]
        })
    }
})

if (goodError.value) {
    console.error('Error fetching good data:', goodError.value)
}
</script>
