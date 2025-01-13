<template>
    <div>
      <h1>Goods List</h1>
      <ul>
        <li><NuxtLink :to="`/goods/addGoods`">Add goods</NuxtLink></li>
        <li v-for="good in goods" :key="good.id"><NuxtLink :to="`/goods/${good.id}`">{{ good.name }}</NuxtLink></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        goods: []
      }
    },
    methods: {
      async fetchGoods() {
        try {
          const response = await this.$axios.get('/getGoods') // Запит через Axios
          this.goods = response.data
        } catch (error) {
          console.error('Error fetching goods:', error)
        }
      }
    },
    mounted() {
      this.fetchGoods() // Викликаємо метод після монтування компонента
    }
  }
  </script>
  
  <style scoped>
  /* Ваші стилі */
  </style>
  